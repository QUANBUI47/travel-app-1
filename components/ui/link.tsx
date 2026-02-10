import { Pressable, StyleSheet, type PressableProps } from "react-native";
import { useRouter } from "expo-router";

import { Colors } from "@/constants/theme";
import { ThemedText } from "@/components/themed-text";

export type LinkProps = PressableProps & {
  href?: string;
  color?: "foreground" | "primary" | "destructive";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

export function Link({
  href,
  color = "foreground",
  size = "md",
  children,
  onPress,
  ...rest
}: LinkProps) {
  const router = useRouter();
  const lightColor =
    color === "primary"
      ? Colors.light.primary
      : color === "destructive"
        ? Colors.light.destructive
        : Colors.light.foreground;
  const darkColor =
    color === "primary"
      ? Colors.dark.primary
      : color === "destructive"
        ? Colors.dark.destructive
        : Colors.dark.foreground;

  const fontSize = size === "sm" ? 14 : size === "lg" ? 18 : 16;

  const handlePress = (e: any) => {
    if (href) router.push(href as any);
    onPress?.(e);
  };

  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      onPress={handlePress}
      {...rest}
    >
      <ThemedText
        lightColor={lightColor}
        darkColor={darkColor}
        style={[styles.text, { fontSize }]}
      >
        {children}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
  },
});
