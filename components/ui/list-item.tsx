import { Pressable, View, StyleSheet, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { Spacing } from "@/constants/theme";
import { Divider } from "./divider";

export type ListItemProps = ViewProps & {
  children: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onPress?: () => void;
  showDivider?: boolean;
};

export function ListItem({
  children,
  leftContent,
  rightContent,
  onPress,
  showDivider = true,
  style,
  ...rest
}: ListItemProps) {
  const bg = useThemeColor({}, "surface");

  const row = (
    <View style={[styles.row, { backgroundColor: bg }]}>
      {leftContent ? <View style={styles.left}>{leftContent}</View> : null}
      <View style={styles.center}>{children}</View>
      {rightContent ? <View style={styles.right}>{rightContent}</View> : null}
    </View>
  );

  return (
    <>
      {showDivider ? <Divider /> : null}
      {onPress ? (
        <Pressable style={({ pressed }) => [pressed && styles.pressed, style]} onPress={onPress} {...rest}>
          {row}
        </Pressable>
      ) : (
        <View style={style} {...rest}>
          {row}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing[4],
    paddingHorizontal: Spacing[4],
    minHeight: 56,
  },
  left: {
    marginRight: Spacing[4],
  },
  center: {
    flex: 1,
  },
  right: {
    marginLeft: Spacing[2],
  },
  pressed: {
    opacity: 0.7,
  },
});
