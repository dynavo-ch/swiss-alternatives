/**
 * Comparison table, rendered from /data/products.json.
 * The URL (?products=a,b) is the source of truth; the local comparison list
 * is kept in sync so the tray reflects what is shown here.
 */
import { icons } from './icons';
import type { ProductRecord } from '~/lib/export';

type Record_ = ProductRecord & { logo: string | null };
import { copyText, escapeHtml, getList, localPath, logoTile, setList, t, toast } from './store';

type Labels = {
  overview: string;
  footprint: string;
  product: string;
  pricing: string;
  security: string;
  rows: Record<string, string>;
  states: Record<string, string>;
  none: string;
  remove: string;
  add: string;
};

type Cell = (p: Record_) => string;
type Row = { key: string; cell: Cell; value: (p: Record_) => string };

const STATES = ['yes', 'no', 'partial', 'optional', 'unknown'];
const DIMENSIONS = ['headquarters', 'ownership', 'development', 'hosting', 'infrastructure'];

export async function initCompare(root: HTMLElement) {
  const limit = Number(root.dataset.limit ?? 4);
  const labels = JSON.parse(root.querySelector('[data-compare-labels]')!.textContent!) as Labels;
  const mount = root.querySelector<HTMLElement>('[data-compare-root]')!;
  const empty = root.querySelector<HTMLElement>('[data-compare-empty]')!;
  const addSelect = root.querySelector<HTMLSelectElement>('[data-add]');
  const diffToggle = root.querySelector<HTMLInputElement>('[data-diff]');

  const response = await fetch(localPath('/data/products.json'));
  if (!response.ok) throw new Error(`Could not load product data (${response.status})`);
  const data = (await response.json()) as { products: Record_[] };
  const byId = new Map(data.products.map((p) => [p.id, p]));

  const fromUrl = new URLSearchParams(location.search).get('products');
  let ids = (fromUrl ? fromUrl.split(',') : getList('compare'))
    .filter((id) => byId.has(id))
    .slice(0, limit);

  const state = (value: string) => {
    const v = STATES.includes(value) ? value : 'unknown';
    return `<span class="state" data-state="${v}">${escapeHtml(labels.states[v] ?? v)}</span>`;
  };
  const list = (items: string[]) =>
    items.length
      ? `<span class="cmp__list">${items.map((i) => `<span>${escapeHtml(i)}</span>`).join('')}</span>`
      : state('unknown');
  const text = (value: string | null, sub?: string | null) =>
    value
      ? `${escapeHtml(value)}${sub ? `<span class="cmp__sub">${escapeHtml(sub)}</span>` : ''}`
      : state('unknown');
  const footprint = (p: Record_) =>
    `<span class="footprint footprint--lg" data-fp role="img" aria-label="${escapeHtml(
      DIMENSIONS.map((d) => `${d}: ${p.footprint[d]}`).join(', '),
    )}">${DIMENSIONS.map((d) => `<span class="footprint__cell" data-state="${p.footprint[d]}"></span>`).join('')}</span>`;

  const r = (key: string, cell: Cell, value?: (p: Record_) => string): Row => ({
    key,
    cell,
    value: value ?? ((p) => cell(p)),
  });

  const groups: { title: string; rows: Row[] }[] = [
    {
      title: labels.overview,
      rows: [
        r(
          'company',
          (p) => `<a href="${escapeHtml(p.companyUrl)}">${escapeHtml(p.company)}</a>`,
          (p) => p.company,
        ),
        r('location', (p) => text(p.location, p.canton)),
        r(
          'category',
          (p) => `<a href="${escapeHtml(p.categoryUrl)}">${escapeHtml(p.category)}</a>`,
          (p) => p.category,
        ),
        r(
          'classification',
          (p) => escapeHtml(p.classification),
          (p) => p.classification,
        ),
        r('footprint', footprint, (p) => JSON.stringify(p.footprint)),
      ],
    },
    {
      title: labels.footprint,
      rows: [
        r(
          'swissCompany',
          (p) =>
            `${state(p.swissCompany)}${p.jurisdiction ? `<span class="cmp__sub">${escapeHtml(p.jurisdiction)}</span>` : ''}`,
        ),
        r(
          'owned',
          (p) =>
            `${state(p.owned)}${p.parent ? `<span class="cmp__sub">${escapeHtml(p.parent)}</span>` : ''}`,
        ),
        r('developed', (p) => state(p.developed)),
        r(
          'hosted',
          (p) =>
            `${state(p.hosted)}${p.dataLocations.length ? `<span class="cmp__sub">${escapeHtml(p.dataLocations.join(', '))}</span>` : ''}`,
        ),
        r(
          'infrastructure',
          (p) =>
            `${state(p.infrastructure)}${p.infraProvider ? `<span class="cmp__sub">${escapeHtml(p.infraProvider)}</span>` : ''}`,
        ),
      ],
    },
    {
      title: labels.product,
      rows: [
        r(
          'openSource',
          (p) =>
            `${state(p.openSource)}${p.license ? `<span class="cmp__sub mono">${escapeHtml(p.license)}</span>` : ''}`,
        ),
        r('selfHostable', (p) => state(p.selfHostable)),
        r(
          'platforms',
          (p) => list(p.platforms),
          (p) => p.platforms.join(),
        ),
        r(
          'audience',
          (p) => list(p.audience),
          (p) => p.audience.join(),
        ),
        r(
          'languages',
          (p) => list(p.languages),
          (p) => p.languages.join(),
        ),
      ],
    },
    {
      title: labels.pricing,
      rows: [
        r(
          'pricingTier',
          (p) => escapeHtml(p.pricingTierLabel),
          (p) => p.pricingTier,
        ),
        r('pricingModel', (p) => text(p.pricingModel)),
        r('price', (p) => text(p.price, p.priceNote)),
        r('freePlan', (p) => state(p.freePlan)),
        r('freeTrial', (p) => state(p.freeTrial)),
        r('enterprise', (p) => state(p.enterprise)),
        r('chfBilling', (p) => state(p.chfBilling)),
      ],
    },
    {
      title: labels.security,
      rows: [
        ...['e2ee', 'mfa', 'sso', 'scim', 'api', 'dataExport'].map((key) =>
          r(key, (p) => state(p.features[key] ?? 'unknown')),
        ),
        r(
          'certifications',
          (p) =>
            p.certifications.length
              ? list(p.certifications)
              : `<span class="muted">${escapeHtml(labels.none)}</span>`,
          (p) => p.certifications.join(),
        ),
        r(
          'lastVerified',
          (p) =>
            p.lastVerified
              ? `<span class="mono">${escapeHtml(p.lastVerified)}</span>`
              : state('unknown'),
          (p) => p.lastVerified ?? '',
        ),
      ],
    },
  ];

  function sync() {
    const url = new URL(location.href);
    if (ids.length) url.searchParams.set('products', ids.join(','));
    else url.searchParams.delete('products');
    history.replaceState(null, '', url.pathname + url.search.replace(/%2C/g, ','));
    setList('compare', ids);
  }

  function render() {
    const products = ids.map((id) => byId.get(id)!);
    empty.hidden = products.length > 0;
    mount.hidden = products.length === 0;
    if (addSelect) {
      addSelect.disabled = products.length >= limit;
      [...addSelect.options].forEach((o) => (o.disabled = o.value !== '' && ids.includes(o.value)));
    }
    if (!products.length) {
      mount.innerHTML = '';
      return;
    }

    const head = products
      .map(
        (p) => `<th scope="col">
          <div class="cmp__head">
            <div class="cmp__head-top">
              ${logoTile(p.logo, p.mono)}
              <button type="button" class="icon-btn" data-remove="${escapeHtml(p.id)}" aria-label="${escapeHtml(labels.remove)}: ${escapeHtml(p.name)}">${icons.x}</button>
            </div>
            <a class="cmp__name" href="${escapeHtml(p.url)}">${escapeHtml(p.name)}</a>
            <span class="cmp__tag">${escapeHtml(p.tagline)}</span>
          </div>
        </th>`,
      )
      .join('');

    const body = groups
      .map(
        (group) =>
          `<tr class="cmp__group"><th colspan="${products.length + 1}" scope="colgroup">${escapeHtml(group.title)}</th></tr>` +
          group.rows
            .map((row) => {
              const same = products.length > 1 && new Set(products.map(row.value)).size === 1;
              return `<tr${same ? ' data-same' : ''}><th scope="row">${escapeHtml(labels.rows[row.key] ?? row.key)}</th>${products
                .map((p) => `<td data-product="${escapeHtml(p.name)}">${row.cell(p)}</td>`)
                .join('')}</tr>`;
            })
            .join(''),
      )
      .join('');

    mount.innerHTML = `<div class="cmp-wrap"><table class="cmp${diffToggle?.checked ? ' cmp--diff' : ''}">
      <colgroup><col class="cmp__label-col">${products.map(() => '<col>').join('')}</colgroup>
      <thead><tr><td></td>${head}</tr></thead>
      <tbody>${body}</tbody>
    </table></div>`;
  }

  root.addEventListener('click', (event) => {
    const target = event.target as Element;
    const remove = target.closest<HTMLElement>('[data-remove]');
    if (remove) {
      ids = ids.filter((id) => id !== remove.dataset.remove);
      sync();
      render();
      return;
    }
    if (target.closest('[data-copy-compare]')) {
      void copyText(location.href).then((ok) => ok && toast(t('common.linkCopied')));
    }
  });

  addSelect?.addEventListener('change', () => {
    const id = addSelect.value;
    if (id && !ids.includes(id) && ids.length < limit) {
      ids = [...ids, id];
      sync();
      render();
    }
    addSelect.value = '';
  });

  diffToggle?.addEventListener('change', () => {
    mount.querySelector('.cmp')?.classList.toggle('cmp--diff', diffToggle.checked);
  });

  sync();
  render();
}
