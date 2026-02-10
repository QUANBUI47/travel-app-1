import { View, Image, Pressable, StyleSheet, type ImageProps, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { Radius, Spacing } from "@/constants/theme";

export type ImageCardProps = ViewProps & {
  source: ImageProps["source"];
  imageStyle?: ImageProps["style"];
  aspectRatio?: number;
  onPress?: () => void;
  children: React.ReactNode;
};

export function ImageCard({
  source,
  imageStyle,
  aspectRatio = 3 / 2,
  onPress,
  children,
  style,
  ...rest
}: ImageCardProps) {
  const bg = useThemeColor({}, "surface");

  const content = (
    <>
      <View style={[styles.imgWrap, { aspectRatio }]}>
        <Image source={source} style={[StyleSheet.absoluteFill, styles.img, imageStyle]} resizeMode="cover" />
      </View>
      <View style={[styles.body, { backgroundColor: bg }]}>{children}</View>
    </>
  );

  return (
    <View style={[styles.card, style]} {...rest}>
      {onPress ? (
        <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.95 : 1 }]}>
          {content}
        </Pressable>
      ) : (
        content
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  imgWrap: {
    width: "100%",
    overflow: "hidden",
  },
  img: {
    borderRadius: 0,
  },
  body: {
    padding: Spacing[4],
  },
});
