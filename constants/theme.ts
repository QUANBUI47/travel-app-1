/**
 * Design system — Vivu (doc/DESIGN_SYSTEM.md, doc/design-tokens.json)
 * Palette hiện đại: cyan (primary), slate neutrals.
 * Font: Be Vietnam Pro. Icons: Lucide.
 */

import { Platform } from "react-native";

// Màu từ doc/design-tokens.json — palette hiện đại (slate + cyan)
const light = {
  primary: "#0891B2",
  primaryHover: "#0E7490",
  primaryMuted: "#CFFAFE",
  primaryForeground: "#FFFFFF",
  secondary: "#64748B",
  secondaryForeground: "#FFFFFF",
  background: "#FAFAFA",
  surface: "#FFFFFF",
  foreground: "#0F172A",
  muted: "#64748B",
  mutedForeground: "#94A3B8",
  border: "#E2E8F0",
  borderMuted: "#F1F5F9",
  accent: "#F1F5F9",
  destructive: "#DC2626",
  success: "#16A34A",
  warning: "#CA8A04",
};

const dark = {
  primary: "#22D3EE",
  primaryHover: "#67E8F9",
  primaryMuted: "#164E63",
  primaryForeground: "#0F172A",
  secondary: "#94A3B8",
  secondaryForeground: "#0F172A",
  background: "#0F172A",
  surface: "#1E293B",
  foreground: "#F8FAFC",
  muted: "#94A3B8",
  mutedForeground: "#64748B",
  border: "#334155",
  borderMuted: "#1E293B",
  accent: "#334155",
  destructive: "#EF4444",
  success: "#22C55E",
  warning: "#FACC15",
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

// Be Vietnam Pro — font family sau khi load bằng useFonts (@expo-google-fonts/be-vietnam-pro)
export const FontFamily = {
  sans: "Be Vietnam Pro",
};

export const Fonts = Platform.select({
  ios: {
    sans: FontFamily.sans,
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: FontFamily.sans,
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: `"Be Vietnam Pro", system-ui, -apple-system, sans-serif`,
    serif: "Georgia, serif",
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
