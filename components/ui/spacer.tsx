import { View, type ViewProps } from "react-native";

import { Spacing } from "@/constants/theme";

export type SpacerProps = ViewProps & {
  size?: keyof typeof Spacing | number;
  horizontal?: boolean;
};

export function Spacer({
  size = 4,
  horizontal,
  style,
  ...rest
}: SpacerProps) {
  const value = typeof size === "number" ? size : Spacing[size as keyof typeof Spacing] ?? Spacing[4];
  return (
    <View
      style={[
        horizontal
          ? { width: value, height: 0 }
          : { width: 0, height: value },
        style,
      ]}
      {...rest}
    />
  );
}
