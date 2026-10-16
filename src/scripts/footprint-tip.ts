/**
 * One shared tooltip that explains any five-cell Swiss footprint on hover
 * (or tap on touch screens). The hovered cell's row is highlighted. Labels
 * come from the page's embedded dictionary, so nothing is duplicated in HTML.
 */
import { escapeHtml, t } from './store';

const DIMENSIONS = [
  'headquarters',
  'ownership',
  'development',
  'hosting',
  'infrastructure',
] as const;
const STATE_KEY: Record<string, string> = {
  yes: 'state.yes',
  partial: 'state.partial',
  no: 'state.no',
  unknown: 'state.unknownShort',
};

let tip: HTMLElement | undefined;
let current: HTMLElement | undefined;

function ensureTip(): HTMLElement {
  if (!tip) {
    tip = document.createElement('div');
    tip.className = 'fp-tip';
    tip.setAttribute('role', 'tooltip');
    tip.hidden = true;
    document.body.append(tip);
  }
  return tip;
}

function render(strip: HTMLElement, activeIndex: number) {
  const cells = [...strip.querySelectorAll<HTMLElement>('.footprint__cell')];
  const rows = DIMENSIONS.map((dimension, i) => {
    const state = cells[i]?.dataset.state ?? 'unknown';
    return `<li class="fp-tip__row${i === activeIndex ? ' is-active' : ''}">
      <span class="footprint__cell" data-state="${escapeHtml(state)}"></span>
      <span class="fp-tip__label">${escapeHtml(t(`footprint.${dimension}`))}</span>
      <span class="fp-tip__state">${escapeHtml(t(STATE_KEY[state] ?? 'state.unknownShort'))}</span>
    </li>`;
  }).join('');
  const question =
    activeIndex >= 0
      ? `<p class="fp-tip__q">${escapeHtml(t(`footprint.${DIMENSIONS[activeIndex]}.q`))}</p>`
      : '';
  return `<p class="fp-tip__title">${escapeHtml(t('footprint.title'))}</p><ul>${rows}</ul>${question}`;
}

function position(strip: HTMLElement, el: HTMLElement) {
  const rect = strip.getBoundingClientRect();
  const width = el.offsetWidth;
  const height = el.offsetHeight;
  const left = Math.min(
    Math.max(8, rect.left + rect.width / 2 - width / 2),
    window.innerWidth - width - 8,
  );
  const above = rect.top - height - 10;
  const top = above > 8 ? above : rect.bottom + 10;
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

function show(strip: HTMLElement, cell?: Element | null) {
  const el = ensureTip();
  const cells = [...strip.querySelectorAll('.footprint__cell')];
  const index = cell ? cells.indexOf(cell) : -1;
  el.innerHTML = render(strip, index);
  el.hidden = false;
  position(strip, el);
  current = strip;
}

function hide() {
  if (tip) tip.hidden = true;
  current = undefined;
}

export function initFootprintTips() {
  document.addEventListener('pointerover', (event) => {
    if ((event as PointerEvent).pointerType === 'touch') return;
    const target = event.target as Element;
    const strip = target.closest<HTMLElement>('[data-fp]');
    if (strip) show(strip, target.closest('.footprint__cell'));
    else if (current) hide();
  });

  // Touch: a tap on a footprint shows the explanation instead of following the card link.
  document.addEventListener(
    'click',
    (event) => {
      const strip = (event.target as Element).closest<HTMLElement>('[data-fp]');
      if (!strip || !matchMedia('(hover: none)').matches) return;
      event.preventDefault();
      event.stopPropagation();
      if (current === strip) hide();
      else show(strip, (event.target as Element).closest('.footprint__cell'));
    },
    true,
  );

  document.addEventListener('pointerdown', (event) => {
    if (current && !(event.target as Element).closest('[data-fp]')) hide();
  });
  window.addEventListener('scroll', hide, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hide();
  });
}
