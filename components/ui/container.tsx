import { View, StyleSheet, type ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Spacing } from "@/constants/theme";

const CONTAINER_PADDING = Spacing[6];
const CONTAINER_PADDING_LG = Spacing[8];

export type ContainerProps = ViewProps & {
  children: React.ReactNode;
  padding?: keyof typeof Spacing | number;
  safeTop?: boolean;
  safeBottom?: boolean;
};

export function Container({
  children,
  padding,
  safeTop,
  safeBottom,
  style,
  ...rest
}: ContainerProps) {
  const insets = useSafeAreaInsets();
  const pad = padding !== undefined
    ? (typeof padding === "number" ? padding : Spacing[padding as keyof typeof Spacing])
    : CONTAINER_PADDING;

  return (
    <View
      style={[
        styles.base,
        {
          paddingHorizontal: pad,
          paddingTop: safeTop ? Math.max(insets.top, pad) : pad,
          paddingBottom: safeBottom ? Math.max(insets.bottom, pad) : pad,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
