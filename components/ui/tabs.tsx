import { View, ScrollView, Pressable, StyleSheet, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { FontFamily, Radius, Spacing } from "@/constants/theme";
import { ThemedText } from "@/components/themed-text";

export type TabItem = { key: string; title: string };

export type TabsProps = ViewProps & {
  items: TabItem[];
  selectedKey: string;
  onSelectionChange: (key: string) => void;
  children?: React.ReactNode;
  fullWidth?: boolean;
};

export function Tabs({
  items,
  selectedKey,
  onSelectionChange,
  children,
  fullWidth,
  style,
  ...rest
}: TabsProps) {
  const borderColor = useThemeColor({}, "border");
  const primary = useThemeColor({}, "primary");
  const fg = useThemeColor({}, "foreground");
  const muted = useThemeColor({}, "muted");

  return (
    <View style={[styles.wrap, style]} {...rest}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { borderBottomColor: borderColor }, fullWidth && styles.scrollFull]}
      >
        {items.map((item) => {
          const isSelected = item.key === selectedKey;
          return (
            <Pressable
              key={item.key}
              style={({ pressed }) => [
                styles.tab,
                { borderBottomColor: isSelected ? primary : borderColor, opacity: pressed ? 0.8 : 1 },
              ]}
              onPress={() => onSelectionChange(item.key)}
            >
              <ThemedText
                lightColor={isSelected ? primary : muted}
                darkColor={isSelected ? primary : muted}
                style={[styles.tabText, { fontFamily: FontFamily.sans, fontWeight: isSelected ? "600" : "500" }]}
              >
                {item.title}
              </ThemedText>
            </Pressable>
          );
        })}
      </ScrollView>
      {children ? <View style={styles.panel}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {},
  scroll: {
    flexDirection: "row",
    paddingHorizontal: Spacing[2],
    borderBottomWidth: 1,
  },
  scrollFull: {
    flex: 1,
    justifyContent: "space-around",
  },
  tab: {
    paddingVertical: Spacing[4],
    paddingHorizontal: Spacing[4],
    marginHorizontal: Spacing[1],
    borderBottomWidth: 2,
    marginBottom: -1,
  },
  tabText: {
    fontSize: 15,
  },
  panel: {
    paddingTop: Spacing[4],
  },
});
