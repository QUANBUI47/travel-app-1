import { useEffect, useRef } from "react";
import { Animated, StyleSheet, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { Radius } from "@/constants/theme";

export type SkeletonProps = ViewProps & {
  width?: number | string;
  height?: number;
  borderRadius?: number;
};

export function Skeleton({
  width = "100%",
  height = 20,
  borderRadius = Radius.md,
  style,
  ...rest
}: SkeletonProps) {
  const baseColor = useThemeColor({}, "accent");
  const opacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0.8, useNativeDriver: true, duration: 600 }),
        Animated.timing(opacity, { toValue: 0.4, useNativeDriver: true, duration: 600 }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.base,
        {
          width: width as number,
          height,
          borderRadius,
          backgroundColor: baseColor,
          opacity,
        },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {},
});
