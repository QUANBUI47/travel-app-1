import { View, StyleSheet, Platform, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { Radius, Spacing } from "@/constants/theme";
import { ThemedText } from "@/components/themed-text";

export type CardProps = ViewProps & {
  children: React.ReactNode;
};

export function Card({ style, children, ...rest }: CardProps) {
  const backgroundColor = useThemeColor({}, "card");
  return (
    <View style={[styles.card, { backgroundColor }, style]} {...rest}>
      {children}
    </View>
  );
}

export type CardHeaderProps = ViewProps & {
  children: React.ReactNode;
  className?: string;
};

export function CardHeader({ style, children, ...rest }: CardHeaderProps) {
  return (
    <View style={[styles.header, style]} {...rest}>
      {typeof children === "string" ? (
        <ThemedText type="subtitle">{children}</ThemedText>
      ) : (
        children
      )}
    </View>
  );
}

export type CardBodyProps = ViewProps & {
  children: React.ReactNode;
};

export function CardBody({ style, children, ...rest }: CardBodyProps) {
  return (
    <View style={[styles.body, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    padding: Spacing[4],
    minHeight: 60,
    // shadow nhẹ (optional, platform-specific)
    ...(Platform.OS === "ios"
      ? {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.06,
          shadowRadius: 4,
        }
      : { elevation: 2 }),
  },
  header: {
    marginBottom: Spacing[2],
  },
  body: {
    paddingTop: Spacing[1],
  },
});
