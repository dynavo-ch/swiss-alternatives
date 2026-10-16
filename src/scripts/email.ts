/** Decodes protected email links on first interaction (see src/lib/email.ts). */
const decode = (encoded: string) => [...atob(encoded)].reverse().join('');

function mailto(link: HTMLElement): string {
  const params = new URLSearchParams();
  if (link.dataset.subject) params.set('subject', link.dataset.subject);
  if (link.dataset.body) params.set('body', link.dataset.body);
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${decode(link.dataset.email!)}${query ? `?${query}` : ''}`;
}

function arm(event: Event) {
  const link = (event.target as Element | null)?.closest?.<HTMLAnchorElement>('a[data-email]');
  if (link && !link.dataset.armed) {
    link.href = mailto(link);
    link.dataset.armed = '';
  }
}

export function initEmailLinks() {
  // Show the address as real text once scripts run (screen readers and
  // accessibility tools do not reliably read CSS-generated text). Scrapers
  // that do not execute JavaScript still see only the data attributes.
  document.querySelectorAll<HTMLElement>('.eml[data-u][data-d]').forEach((el) => {
    el.textContent = `${el.dataset.u}@${el.dataset.d}`;
  });
  for (const type of ['pointerover', 'focusin', 'touchstart']) {
    document.addEventListener(type, arm, { passive: true });
  }
  document.addEventListener('click', (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[data-email]');
    if (!link) return;
    event.preventDefault();
    location.href = mailto(link);
  });
}

/** Returns the decoded address of an element carrying data-email. */
export function emailOf(element: HTMLElement): string {
  return decode(element.dataset.email!);
}
