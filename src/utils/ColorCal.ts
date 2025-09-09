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

export function SimpHSL({ h, s, l }: { h: number; s: number; l: number }): string {

    return `${Math.round(h)}, ${Math.round(s * 100)}, ${Math.round(l * 100)}`;
}

function round4(x: number) {
    return Math.round(x * 10000) / 10000;
}

export function hexToOklab(hex: string): { L: number; a: number; b: number } {
    if (hex.startsWith("#")) hex = hex.slice(1);
    if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
    if (hex.length !== 6) throw new Error("Invalid hex color");

    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    const linearize = (x: number) => x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055)/1.055, 2.4);
    const R = linearize(r);
    const G = linearize(g);
    const B = linearize(b);

    // linear sRGB → LMS
    const L_ = 0.4122214708*R + 0.5363325363*G + 0.0514459929*B;
    const M_ = 0.2119034982*R + 0.6806995451*G + 0.1073969566*B;
    const S_ = 0.0883024619*R + 0.2817188376*G + 0.6299787005*B;

    const l_ = Math.cbrt(L_);
    const m_ = Math.cbrt(M_);
    const s_ = Math.cbrt(S_);

    const L = 0.2104542553*l_ + 0.7936177850*m_ - 0.0040720468*s_;
    const a = 1.9779984951*l_ - 2.4285922050*m_ + 0.4505937099*s_;
    const b_ = 0.0259040371*l_ + 0.7827717662*m_ - 0.8086757660*s_;

    return { L: round4(L), a, b: round4(b_) };
}

export function simpOKLab({ L, a, b }: { L: number; a: number; b: number }): string {
    return `${round4(L)}, ${round4(a)}, ${round4(b)}`;
}

export function hexToOklch(hex: string): { l: number; c: number; h: number } {
    const { L, a, b } = hexToOklab(hex);
    const C = Math.sqrt(a*a + b*b);
    const h = (Math.atan2(b, a) * 180 / Math.PI + 360) % 360;
    return { l: round4(L), c: round4(C), h: round4(h) };
}

export function simpOKLCH({ l, c, h }: { l: number; c: number; h: number }): string {
    return `${round4(l)}, ${round4(c)}, ${round4(h)}`;
}
