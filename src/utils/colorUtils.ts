// Color conversion utilities
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b]
    .map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');
}

export function getContrastColor(hexcolor: string): string {
  const { r, g, b } = hexToRgb(hexcolor);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
}

export function generateRandomColor(): string {
  const letters = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function adjustBrightness(hex: string, percent: number): string {
  const { r, g, b } = hexToRgb(hex);
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;

  const newR = Math.round((t - r) * p) + r;
  const newG = Math.round((t - g) * p) + g;
  const newB = Math.round((t - b) * p) + b;

  return rgbToHex(newR, newG, newB);
}