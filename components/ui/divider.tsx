import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type DividerProps = ViewProps & {
  orientation?: "horizontal" | "vertical";
  spacing?: number;
};

export function Divider({
  orientation = "horizontal",
  spacing = 0,
  style,
  ...rest
}: DividerProps) {
  const color = useThemeColor({}, "border");
  const isVertical = orientation === "vertical";

  return (
    <View
      style={[
        {
          backgroundColor: color,
          [isVertical ? "width" : "height"]: 1,
          [isVertical ? "height" : "width"]: "100%",
          marginHorizontal: isVertical ? spacing : 0,
          marginVertical: isVertical ? 0 : spacing,
        },
        style,
      ]}
      {...rest}
    />
  );
}
