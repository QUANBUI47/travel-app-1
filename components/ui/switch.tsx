import { Switch as RNSwitch, type SwitchProps as RNSwitchProps } from "react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export type SwitchProps = Omit<RNSwitchProps, "trackColor" | "thumbColor"> & {
  /** Optional override; mặc định dùng primary (on) và border (off) */
  trackColor?: { false?: string; true?: string };
  thumbColor?: string;
};

export function Switch({
  trackColor: trackColorProp,
  thumbColor: thumbColorProp,
  ...rest
}: SwitchProps) {
  const isDark = useColorScheme() === "dark";
  const c = isDark ? Colors.dark : Colors.light;
  const trackColor = {
    false: trackColorProp?.false ?? c.border,
    true: trackColorProp?.true ?? c.primary,
  };
  const thumbColor = thumbColorProp ?? c.surface;

  return (
    <RNSwitch
      trackColor={trackColor}
      thumbColor={thumbColor}
      {...rest}
    />
  );
}
