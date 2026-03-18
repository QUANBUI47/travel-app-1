/**
 * Design system — Vivu (doc/DESIGN_SYSTEM.md, doc/design-tokens.json)
 * Palette hiện đại: blue (primary), slate neutrals.
 * Font: Inter & Plus Jakarta Sans. Icons: Lucide.
 */

import { Platform } from "react-native";

// Màu từ doc/design-tokens.json — palette hiện đại (slate + blue)
const light = {
  primary: "#006FEE",
  primaryHover: "#005BC4",
  primaryMuted: "#E6F1FE",
  primaryForeground: "#FFFFFF",
  secondary: "#94A3B8",
  secondaryForeground: "#FFFFFF",
  background: "#FFFFFF",
  surface: "#F8FAFC",
  foreground: "#0F172A",
  muted: "#64748B",
  mutedForeground: "#94A3B8",
  border: "#E2E8F0",
  borderMuted: "#F1F5F9",
  accent: "#F1F5F9",
  destructive: "#EF4444",
  success: "#17C964",
  warning: "#F5A524",
};

const dark = {
  primary: "#3385DA",
  primaryHover: "#006FEE",
  primaryMuted: "#1A5FB4",
  primaryForeground: "#0F172A",
  secondary: "#64748B",
  secondaryForeground: "#0F172A",
  background: "#0F172A",
  surface: "#1E293B",
  foreground: "#F8FAFC",
  muted: "#94A3B8",
  mutedForeground: "#64748B",
  border: "#334155",
  borderMuted: "#1E293B",
  accent: "#334155",
  destructive: "#F31260",
  success: "#17C964",
  warning: "#F5A524",
};

export const Colors = {
  light: {
    ...light,
    text: light.foreground,
    tint: light.primary,
    icon: light.muted,
    tabIconDefault: light.mutedForeground,
    tabIconSelected: light.primary,
    card: light.surface,
  },
  dark: {
    ...dark,
    text: dark.foreground,
    tint: dark.primary,
    icon: dark.muted,
    tabIconDefault: dark.mutedForeground,
    tabIconSelected: dark.primary,
    card: dark.surface,
  },
};

export const FontFamily = {
  sans: "Inter",
  serif: "Plus Jakarta Sans",
};

export const Fonts = Platform.select({
  ios: {
    sans: FontFamily.sans,
    serif: FontFamily.serif,
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: FontFamily.sans,
    serif: FontFamily.serif,
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: `"Inter", system-ui, -apple-system, sans-serif`,
    serif: `"Plus Jakarta Sans", Georgia, serif`,
    rounded: "normal",
    mono: "monospace",
  },
});

// Spacing (px) — nhiều khoảng trắng, tối giản (doc/DESIGN_SYSTEM.md)
export const Spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  section: 80,
  sectionSm: 64,
} as const;

export const Radius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  "2xl": 24,
  full: 9999,
} as const;
