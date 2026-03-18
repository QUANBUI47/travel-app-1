import React from "react";
import { StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Search as SearchIcon, Filter, MapPin } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <SearchIcon size={20} color="#999" />
          <TextInput placeholder="Tìm kiếm điểm đến, tour..." style={styles.input} />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Filter size={20} color="#006FEE" />
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Tìm kiếm gần đây</ThemedText>
        {["Hạ Long", "Đà Nẵng", "Phú Quốc"].map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.recentItem}>
            <MapPin size={18} color="#666" />
            <ThemedText style={styles.recentText}>{item}</ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  header: { flexDirection: "row", padding: 20, gap: 12, alignItems: "center" },
  searchBar: { flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: "#F5F5F5", height: 50, borderRadius: 15, paddingHorizontal: 15, gap: 10 },
  input: { flex: 1, fontSize: 16 },
  filterBtn: { width: 50, height: 50, backgroundColor: "#E6F0FF", borderRadius: 15, alignItems: "center", justifyContent: "center" },
  content: { padding: 20 },
  sectionTitle: { marginBottom: 15 },
  recentItem: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#F0F0F0" },
  recentText: { fontSize: 16, color: "#333" },
});
