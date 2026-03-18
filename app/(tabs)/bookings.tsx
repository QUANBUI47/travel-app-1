import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Calendar, Ticket } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">Chuyến đi của tôi</ThemedText>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.emptyContainer}>
          <Ticket size={64} color="#DDD" />
          <ThemedText style={styles.emptyTitle}>Chưa có chuyến đi nào</ThemedText>
          <ThemedText style={styles.emptySub}>Hãy bắt đầu hành trình khám phá Việt Nam ngay hôm nay!</ThemedText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  header: { padding: 20 },
  content: { flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 100 },
  emptyContainer: { alignItems: "center", gap: 15 },
  emptyTitle: { fontSize: 18, fontWeight: "800", color: "#666" },
  emptySub: { fontSize: 14, color: "#999", textAlign: "center", paddingHorizontal: 40 },
});
