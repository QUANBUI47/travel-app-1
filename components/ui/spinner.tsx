import { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { Radius } from "@/constants/theme";

export type SpinnerProps = ViewProps & {
  size?: "sm" | "md" | "lg";
};

const sizeMap = { sm: 20, md: 32, lg: 48 };

export function Spinner({ size = "md", style, ...rest }: SpinnerProps) {
  const primary = useThemeColor({}, "primary");
  const sizePx = sizeMap[size];
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        useNativeDriver: true,
        duration: 800,
      })
    );
    loop.start();
    return () => loop.stop();
  }, [spin]);

  const rotate = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={[
        styles.ring,
        {
          width: sizePx,
          height: sizePx,
          borderRadius: sizePx / 2,
          borderWidth: size === "sm" ? 2 : 3,
          borderColor: primary,
          borderTopColor: "transparent",
          transform: [{ rotate }],
        },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  ring: {},
});
