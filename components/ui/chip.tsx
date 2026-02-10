import { View, Text, Pressable, StyleSheet, type ViewProps } from "react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors, FontFamily, Radius, Spacing } from "@/constants/theme";

export type ChipProps = ViewProps & {
  children: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
  onClose?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function Chip({
  children,
  selected,
  onPress,
  onClose,
  leftIcon,
  rightIcon,
  style,
  ...rest
}: ChipProps) {
  const isDark = useColorScheme() === "dark";
  const c = isDark ? Colors.dark : Colors.light;
  const bg = selected ? c.primaryMuted ?? c.primary : c.accent;
  const textColor = selected ? c.primary : c.foreground;
  const borderColor = selected ? c.primary : c.border;

  const content = (
    <>
      {leftIcon ? <View style={styles.sideIcon}>{leftIcon}</View> : null}
      <Text style={[styles.text, { color: textColor, fontFamily: FontFamily.sans }]} numberOfLines={1}>
        {children}
      </Text>
      {rightIcon ?? (onClose ? null : null)}
    </>
  );

  if (onPress ?? onClose) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.wrap,
          { backgroundColor: bg, borderColor, opacity: pressed ? 0.85 : 1 },
          style,
        ]}
        onPress={onPress ?? onClose}
        {...rest}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View style={[styles.wrap, { backgroundColor: bg, borderColor }, style]} {...rest}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Radius.full,
    paddingVertical: Spacing[2],
    paddingHorizontal: Spacing[4],
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  sideIcon: {
    marginRight: Spacing[2],
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
