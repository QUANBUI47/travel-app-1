import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Modal, 
  ScrollView,
  Dimensions 
} from "react-native";
import { X, Check } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { Colors, FontFamily } from "@/constants/theme";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

const PRICE_RANGES = ["< 1Tr", "1Tr - 3Tr", "3Tr - 5Tr", "> 5Tr"];
const DESTINATION_TYPES = ["Biển đảo", "Núi cao", "Đô thị", "Di sản"];

export function FilterModal({ visible, onClose }: FilterModalProps) {
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0]);
  const [selectedType, setSelectedType] = useState<string[]>(["Biển đảo"]);
  const theme = Colors.light;

  const toggleType = (type: string) => {
    if (selectedType.includes(type)) {
      setSelectedType(selectedType.filter(item => item !== type));
    } else {
      setSelectedType([...selectedType, type]);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <BlurView intensity={20} style={StyleSheet.absoluteFill}>
        <TouchableOpacity 
          style={styles.overlay} 
          activeOpacity={1} 
          onPress={onClose} 
        />
        <View style={styles.modalContent}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <ThemedText style={styles.headerTitle}>Bộ lọc tìm kiếm</ThemedText>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <X size={20} color="#64748B" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scroll}>
            <View style={styles.section}>
              <ThemedText style={styles.sectionLabel}>KHOẢNG GIÁ</ThemedText>
              <View style={styles.optionGrid}>
                {PRICE_RANGES.map((range) => (
                  <TouchableOpacity 
                    key={range}
                    onPress={() => setSelectedPrice(range)}
                    style={[
                      styles.optionItem, 
                      selectedPrice === range && { backgroundColor: theme.primary + "10", borderColor: theme.primary }
                    ]}
                  >
                    <ThemedText style={[styles.optionText, selectedPrice === range && { color: theme.primary, fontWeight: "800" }]}>{range}</ThemedText>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionLabel}>HẠNG MỤC</ThemedText>
              <View style={styles.optionGrid}>
                {DESTINATION_TYPES.map((type) => (
                  <TouchableOpacity 
                    key={type}
                    onPress={() => toggleType(type)}
                    style={[
                      styles.optionItem, 
                      selectedType.includes(type) && { backgroundColor: theme.primary + "10", borderColor: theme.primary }
                    ]}
                  >
                    <ThemedText style={[styles.optionText, selectedType.includes(type) && { color: theme.primary, fontWeight: "800" }]}>{type}</ThemedText>
                    {selectedType.includes(type) && <Check size={12} color={theme.primary} />}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
             <TouchableOpacity style={styles.resetBtn}>
                <ThemedText style={styles.resetText}>Xóa tất cả</ThemedText>
             </TouchableOpacity>
             <TouchableOpacity style={styles.applyBtn} onPress={onClose}>
                <LinearGradient
                  colors={[theme.primary, theme.primaryHover]}
                  style={styles.applyGradient}
                >
                   <ThemedText style={styles.applyText}>ÁP DỤNG</ThemedText>
                </LinearGradient>
             </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  modalContent: {
    height: height * 0.65,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 8,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flex: 1,
    padding: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#94A3B8",
    marginBottom: 16,
  },
  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  optionItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#F1F5F9",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },
  footer: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },
  resetBtn: {
    paddingHorizontal: 16,
  },
  resetText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#64748B",
  },
  applyBtn: {
    flex: 1,
    height: 52,
    borderRadius: 16,
    overflow: "hidden",
  },
  applyGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  applyText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
