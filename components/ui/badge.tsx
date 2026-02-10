import { View, Text, StyleSheet, type ViewProps } from "react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors, FontFamily, Radius, Spacing } from "@/constants/theme";

export type BadgeColor = "primary" | "secondary" | "default" | "success" | "destructive" | "warning";

export type BadgeProps = ViewProps & {
  children: React.ReactNode;
  color?: BadgeColor;
  variant?: "solid" | "flat";
  size?: "sm" | "md";
};

function getBadgeColors(color: BadgeColor, variant: "solid" | "flat", isDark: boolean) {
  const c = isDark ? Colors.dark : Colors.light;
  if (variant === "solid") {
    const map: Record<BadgeColor, { bg: string; text: string }> = {
      primary: { bg: c.primary, text: c.primaryForeground },
      secondary: { bg: c.secondary, text: c.secondaryForeground },
      default: { bg: c.muted, text: c.foreground },
      success: { bg: c.success, text: "#fff" },
      destructive: { bg: c.destructive, text: "#fff" },
      warning: { bg: c.warning, text: "#fff" },
    };
    return map[color];
  }
  const flatMap: Record<BadgeColor, { bg: string; text: string }> = {
    primary: { bg: c.primaryMuted ?? c.accent, text: c.primary },
    secondary: { bg: c.accent, text: c.secondary },
    default: { bg: c.accent, text: c.muted },
    success: { bg: "rgba(34,197,94,0.2)", text: c.success },
    destructive: { bg: "rgba(239,68,68,0.2)", text: c.destructive },
    warning: { bg: "rgba(245,158,11,0.2)", text: c.warning },
  };
  return flatMap[color];
}

export function Badge({
  children,
  color = "default",
  variant = "flat",
  size = "md",
  style,
  ...rest
}: BadgeProps) {
  const isDark = useColorScheme() === "dark";
  const { bg, text } = getBadgeColors(color, variant, isDark);
  const paddingH = size === "sm" ? Spacing[2] : Spacing[3];
  const paddingV = size === "sm" ? 2 : 4;
  const fontSize = size === "sm" ? 11 : 12;

  return (
    <View style={[styles.wrap, { backgroundColor: bg, paddingHorizontal: paddingH, paddingVertical: paddingV }, style]} {...rest}>
      <Text style={[styles.text, { color: text, fontSize, fontFamily: FontFamily.sans }]} numberOfLines={1}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderRadius: Radius.full,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
  },
});
