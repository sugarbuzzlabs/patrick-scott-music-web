import QRCode from 'qrcode';

/** Values in site.json that are still TODO placeholders. */
export function isPlaceholder(value: string | null | undefined): boolean {
  return !value || value.startsWith('TODO_');
}

/**
 * venmo.com/u/<handle>. With the handle still a placeholder we point at
 * venmo.com so the link is never broken — the visible TODO does the nagging.
 */
export function venmoUrl(handle: string | null | undefined): string {
  if (isPlaceholder(handle)) return 'https://venmo.com/';
  return `https://venmo.com/u/${String(handle).replace(/^@/, '')}`;
}

export function paypalUrl(handle: string | null | undefined): string | null {
  if (!handle) return null;
  if (isPlaceholder(handle)) return 'https://paypal.me/';
  return `https://paypal.me/${String(handle).replace(/^@/, '')}`;
}

/**
 * Build-time QR as inline SVG — no runtime lib, no external image request.
 * Toned white on warm near-black: the tokenized palette, and still well past
 * the contrast ratio scanners need.
 */
export async function qrSvg(url: string): Promise<string> {
  const svg = await QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 1,
    color: { dark: '#F4F1EA', light: '#0C0B0A' },
  });
  return svg.replace('<svg', '<svg role="img" aria-label="Venmo tip QR code"');
}
