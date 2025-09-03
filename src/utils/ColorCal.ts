export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255; g /= 255; b /= 255;
    let max: number = Math.max(r, g, b), min: number = Math.min(r, g, b);
    let h: number, s: number, l: number = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d: number = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            default: h = 0;
        }
        h /= 6;
    }
    return { h: h * 360, s, l };
}

export function HexToRGB(hex: string): { r: number; g: number; b: number } {
    hex = hex.replace('#', '');

    if (hex.length === 3) {
        hex = hex.split('').map((c: string) => c + c).join('');
    }

    const r: number = parseInt(hex.substring(0, 2), 16);
    const g: number = parseInt(hex.substring(2, 4), 16);
    const b: number = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
    h /= 360;
    let r: number, g: number, b: number;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number): number => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q: number = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p: number = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

export function rgbToHex({ r, g, b }: { r: number; g: number; b: number }): string {
    return '#' + [r, g, b].map((x: number) => x.toString(16).padStart(2, '0')).join('');
}

export function invertHex(hex: string): string {
    const rgb = HexToRGB(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const newH = (hsl.h + 180) % 360;
    const compRgb = hslToRgb(newH, hsl.s, hsl.l);
    return rgbToHex(compRgb);
}

export function triadicColors(hex: string): string[] {
    const rgb = HexToRGB(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    const h1: number = (hsl.h + 120) % 360;
    const h2: number = (hsl.h + 240) % 360;

    const rgb1 = hslToRgb(h1, hsl.s, hsl.l);
    const rgb2 = hslToRgb(h2, hsl.s, hsl.l);

    return [hex, rgbToHex(rgb1), rgbToHex(rgb2)];
}


export function invertLightness(hex: string): string {
    const { r, g, b } = HexToRGB(hex);

    const hsl = rgbToHsl(r, g, b);

    let newL: number;
    if (hsl.l < 0.5) {
        newL = hsl.l + 0.5;
    } else {
        newL = hsl.l - 0.3;
    }
    const rgbNew = hslToRgb(hsl.h, hsl.s, newL);
    return rgbToHex(rgbNew);
}

export function SimpRGB({ r, g, b }: { r: number; g: number; b: number }): string {
    return `${r}, ${g}, ${b}`;
}
