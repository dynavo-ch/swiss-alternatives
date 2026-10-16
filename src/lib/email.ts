/**
 * Email protection. The address never appears as plain text or as a mailto:
 * link in the generated HTML:
 *   • the visible address is assembled from two data attributes
 *     (`<span class="eml" data-u="info" data-d="example.ch">`) — by CSS without
 *     JavaScript, as real text once scripts run (for assistive technology)
 *   • the mailto: link is stored encoded (reversed, base64) and only decoded
 *     in the browser when someone hovers, focuses or clicks the link
 *     (src/scripts/email.ts)
 *   • without JavaScript, links lead to the contact page.
 * This stops address harvesting by simple scrapers; it cannot stop a bot that
 * runs a full browser and interacts with the page.
 */
export function encodeEmail(address: string): string {
  return Buffer.from([...address].reverse().join(''), 'utf8').toString('base64');
}

export function splitEmail(address: string): { user: string; domain: string } {
  const [user = '', domain = ''] = address.split('@');
  return { user, domain };
}
