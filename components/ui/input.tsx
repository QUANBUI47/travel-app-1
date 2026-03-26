import {
  View,
  TextInput,
  StyleSheet,
  type TextInputProps,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { FontFamily, Radius, Spacing } from "@/constants/theme";
import { ThemedText } from "@/components/themed-text";

export type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  containerStyle?: ViewProps["style"];
};

export function Input({
  label,
  error,
  startContent,
  endContent,
  style,
  containerStyle,
  placeholderTextColor,
  ...rest
}: InputProps) {
  const borderColor = useThemeColor({}, "border");
  const backgroundColor = useThemeColor({}, "accent");
  const color = useThemeColor({}, "foreground");
  const defaultPlaceholderColor = useThemeColor({}, "mutedForeground");
  const destructiveColor = useThemeColor({}, "destructive");

  const placeholder = placeholderTextColor ?? defaultPlaceholderColor;

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? <ThemedText style={styles.label}>{label}</ThemedText> : null}
      <View style={[styles.inputWrap, { borderColor, backgroundColor }]}>
        {startContent ? (
          <View style={styles.sideContent}>{startContent}</View>
        ) : null}
        <TextInput
          style={[
            styles.input,
            {
              color,
              fontFamily: FontFamily.sans,
            },
            style as object,
          ]}
          placeholderTextColor={placeholder}
          {...rest}
        />
        {endContent ? (
          <View style={styles.sideContent}>{endContent}</View>
        ) : null}
      </View>
      {error ? (
        <ThemedText style={[styles.error, { color: destructiveColor }]}>
          {error}
        </ThemedText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Spacing[3],
  },
  label: {
    fontSize: 14,
    marginBottom: Spacing[2],
    fontWeight: "500",
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Radius.md,
    minHeight: 44,
    paddingHorizontal: Spacing[4],
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: Spacing[3],
    paddingHorizontal: 0,
  },
  sideContent: {
    marginHorizontal: Spacing[2],
  },
  error: {
    fontSize: 12,
    marginTop: Spacing[1],
  },
});
