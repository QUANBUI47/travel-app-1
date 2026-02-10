import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  StyleSheet,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { FontFamily, Radius, Spacing } from "@/constants/theme";
import { ChevronDown } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";

export type SelectOption = { value: string; label: string };

export type SelectProps = ViewProps & {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string | null;
  onValueChange: (value: string) => void;
  disabled?: boolean;
};

export function Select({
  label,
  placeholder = "Chọn...",
  options,
  value,
  onValueChange,
  disabled,
  style,
  ...rest
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const borderColor = useThemeColor({}, "border");
  const bg = useThemeColor({}, "surface");
  const fg = useThemeColor({}, "foreground");
  const muted = useThemeColor({}, "mutedForeground");
  const accent = useThemeColor({}, "accent");

  const selected = options.find((o) => o.value === value);
  const display = selected?.label ?? placeholder;

  const handleSelect = (v: string) => {
    onValueChange(v);
    setOpen(false);
  };

  return (
    <View style={[styles.wrap, style]} {...rest}>
      {label ? (
        <ThemedText style={[styles.label, { fontFamily: FontFamily.sans }]}>{label}</ThemedText>
      ) : null}
      <Pressable
        style={[
          styles.trigger,
          { borderColor, backgroundColor: bg, opacity: disabled ? 0.6 : 1 },
        ]}
        onPress={() => !disabled && setOpen(true)}
        disabled={disabled}
      >
        <Text
          style={[
            styles.triggerText,
            { color: selected ? fg : muted, fontFamily: FontFamily.sans },
          ]}
          numberOfLines={1}
        >
          {display}
        </Text>
        <ChevronDown size={20} color={muted} />
      </Pressable>

      <Modal visible={open} transparent animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <View style={[styles.modal, { backgroundColor: bg }]}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  style={({ pressed }) => [
                    styles.option,
                    { backgroundColor: pressed ? accent : "transparent" },
                  ]}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={[styles.optionText, { color: fg, fontFamily: FontFamily.sans }]}>
                    {item.label}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: Spacing[3],
  },
  label: {
    fontSize: 14,
    marginBottom: Spacing[2],
    fontWeight: "500",
  },
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: Radius.md,
    minHeight: 44,
    paddingHorizontal: Spacing[4],
  },
  triggerText: {
    fontSize: 16,
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: Spacing[6],
  },
  modal: {
    borderRadius: Radius.lg,
    maxHeight: 320,
  },
  option: {
    paddingVertical: Spacing[4],
    paddingHorizontal: Spacing[4],
  },
  optionText: {
    fontSize: 16,
  },
});
