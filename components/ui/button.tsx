import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type TextStyle,
} from "react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors, FontFamily, Radius, Spacing } from "@/constants/theme";

export type ButtonVariant = "solid" | "flat" | "bordered" | "ghost";
export type ButtonColor = "primary" | "secondary" | "default" | "destructive";

type Theme = keyof typeof Colors;

function getButtonColors(
  variant: ButtonVariant,
  color: ButtonColor,
  theme: Theme
) {
  const c = Colors[theme];
  if (variant === "solid") {
    if (color === "primary")
      return { bg: c.primary, text: c.primaryForeground, border: "transparent" };
    if (color === "secondary")
      return { bg: c.secondary, text: c.secondaryForeground, border: "transparent" };
    if (color === "destructive")
      return { bg: c.destructive, text: "#fff", border: "transparent" };
    return { bg: c.accent, text: c.foreground, border: "transparent" };
  }
  if (variant === "flat") {
    if (color === "primary")
      return { bg: c.primaryMuted ?? c.accent, text: c.primary, border: "transparent" };
    if (color === "destructive")
      return { bg: "#FEE2E2", text: c.destructive, border: "transparent" };
    return { bg: c.accent, text: c.foreground, border: "transparent" };
  }
  if (variant === "bordered") {
    const border = color === "primary" ? c.primary : c.border;
    return { bg: "transparent", text: color === "primary" ? c.primary : c.foreground, border };
  }
  return { bg: "transparent", text: c.primary, border: "transparent" };
}

export type ButtonProps = PressableProps & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  textStyle?: TextStyle;
};

export function Button({
  variant = "solid",
  color = "primary",
  size = "md",
  children,
  fullWidth,
  style,
  textStyle,
  disabled,
  ...rest
}: ButtonProps) {
  const scheme = useColorScheme();
  const theme: Theme = scheme === "dark" ? "dark" : "light";
  const { bg, text, border } = getButtonColors(variant, color, theme);

  const paddingVertical = size === "sm" ? Spacing[2] : size === "lg" ? Spacing[4] : Spacing[3];
  const paddingHorizontal = size === "sm" ? Spacing[3] : size === "lg" ? Spacing[6] : Spacing[5];
  const fontSize = size === "sm" ? 14 : size === "lg" ? 18 : 16;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: bg,
          borderWidth: border === "transparent" ? 0 : 1,
          borderColor: border,
          paddingVertical,
          paddingHorizontal,
          opacity: disabled ? 0.5 : pressed ? 0.85 : 1,
          width: fullWidth ? "100%" : undefined,
        },
        style as object,
      ]}
      disabled={disabled}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          { color: text, fontSize, fontFamily: FontFamily.sans },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
  },
});
