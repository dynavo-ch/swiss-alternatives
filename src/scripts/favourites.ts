/** Favourites page: renders saved, shared and recently viewed products. */
import { icons } from './icons';
import type { ProductRecord as BaseRecord } from '~/lib/export';

type ProductRecord = BaseRecord & { logo: string | null };
import {
  copyText,
  escapeHtml,
  getList,
  localPath,
  logoTile,
  onChange,
  setList,
  t,
  toast,
} from './store';

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function row(p: ProductRecord, removable: string | null, removeLabel: string): string {
  const cells = ['headquarters', 'ownership', 'development', 'hosting', 'infrastructure']
    .map((d) => `<span class="footprint__cell" data-state="${p.footprint[d]}"></span>`)
    .join('');
  return `<article class="prow">
    ${logoTile(p.logo, p.mono)}
    <div class="prow__body">
      <h3 class="prow__name"><a class="prow__link" href="${escapeHtml(p.url)}">${escapeHtml(p.name)}</a></h3>
      <p class="prow__desc">${escapeHtml(p.company)} · ${escapeHtml(p.tagline)}</p>
    </div>
    <div class="prow__side">
      <span class="footprint" data-fp aria-hidden="true">${cells}</span>
      <span class="muted">${escapeHtml(p.classification)}</span>
      ${
        removable
          ? `<button type="button" class="icon-btn" data-remove-${removable}="${escapeHtml(p.id)}" aria-label="${escapeHtml(removeLabel)}: ${escapeHtml(p.name)}">${icons.x}</button>`
          : ''
      }
    </div>
  </article>`;
}

export async function initFavourites(root: HTMLElement) {
  const strings = JSON.parse(root.dataset.strings ?? '{}') as { remove: string };
  const response = await fetch(localPath('/data/products.json'));
  const { products } = (await response.json()) as { products: ProductRecord[] };
  const byId = new Map(products.map((p) => [p.id, p]));

  const favList = root.querySelector<HTMLElement>('[data-fav-list]')!;
  const favEmpty = root.querySelector<HTMLElement>('[data-fav-empty]')!;
  const favActions = root.querySelector<HTMLElement>('[data-fav-actions]')!;
  const compareLink = root.querySelector<HTMLAnchorElement>('[data-fav-compare]')!;
  const recentSection = root.querySelector<HTMLElement>('[data-recent-section]')!;
  const recentList = root.querySelector<HTMLElement>('[data-recent-list]')!;
  const sharedSection = root.querySelector<HTMLElement>('[data-shared]')!;
  const sharedList = root.querySelector<HTMLElement>('[data-shared-list]')!;

  const shared = (new URLSearchParams(location.search).get('ids') ?? '')
    .split(',')
    .filter((id) => SLUG.test(id) && byId.has(id));

  function render() {
    const favs = getList('favourites').filter((id) => byId.has(id));
    favList.innerHTML = favs.map((id) => row(byId.get(id)!, 'fav', strings.remove)).join('');
    favEmpty.hidden = favs.length > 0;
    favActions.hidden = favs.length === 0;
    compareLink.href = `${localPath('/compare/')}?products=${favs.slice(0, 4).join(',')}`;
    compareLink.hidden = favs.length < 2;

    const recent = getList('recent').filter((id) => byId.has(id));
    recentSection.hidden = recent.length === 0;
    recentList.innerHTML = recent.map((id) => row(byId.get(id)!, null, '')).join('');

    sharedSection.hidden = shared.length === 0;
    sharedList.innerHTML = shared.map((id) => row(byId.get(id)!, null, '')).join('');
  }

  root.addEventListener('click', (event) => {
    const target = event.target as Element;
    const remove = target.closest<HTMLElement>('[data-remove-fav]');
    if (remove) {
      setList(
        'favourites',
        getList('favourites').filter((id) => id !== remove.dataset.removeFav),
      );
      return;
    }
    if (target.closest('[data-fav-clear]')) {
      setList('favourites', []);
      return;
    }
    if (target.closest('[data-recent-clear]')) {
      setList('recent', []);
      return;
    }
    if (target.closest('[data-import]')) {
      setList('favourites', [...getList('favourites'), ...shared]);
      history.replaceState(null, '', location.pathname);
      shared.length = 0;
      render();
      return;
    }
    if (target.closest('[data-fav-share]')) {
      const url = new URL(location.pathname, location.origin);
      url.searchParams.set('ids', getList('favourites').join(','));
      void copyText(url.href.replace(/%2C/g, ',')).then(
        (ok) => ok && toast(t('common.linkCopied')),
      );
    }
  });

  onChange(render);
  render();
}
