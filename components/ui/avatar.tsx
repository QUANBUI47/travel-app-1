import { View, Text, Image, StyleSheet, type ImageProps, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { FontFamily, Radius } from "@/constants/theme";

export type AvatarSize = "sm" | "md" | "lg";

export type AvatarProps = ViewProps & {
  source?: ImageProps["source"];
  alt?: string;
  name?: string;
  size?: AvatarSize;
};

const sizeMap = { sm: 32, md: 40, lg: 56 };

export function Avatar({ source, name, size = "md", style, ...rest }: AvatarProps) {
  const sizePx = sizeMap[size];
  const bg = useThemeColor({}, "accent");
  const textColor = useThemeColor({}, "muted");

  const initials = name
    ? name
        .trim()
        .split(/\s+/)
        .map((s) => s[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  return (
    <View
      style={[
        styles.wrap,
        {
          width: sizePx,
          height: sizePx,
          borderRadius: sizePx / 2,
          backgroundColor: bg,
        },
        style,
      ]}
      {...rest}
    >
      {source ? (
        <Image source={source} style={[styles.img, { width: sizePx, height: sizePx, borderRadius: sizePx / 2 }]} resizeMode="cover" />
      ) : (
        <Text style={[styles.initials, { color: textColor, fontSize: size === "sm" ? 12 : size === "lg" ? 20 : 14, fontFamily: FontFamily.sans }]}>
          {initials}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  img: {},
  initials: {
    fontWeight: "600",
  },
});
