import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { User, Settings, Shield, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: "https://i.pravatar.cc/150?u=customer" }} 
            style={styles.avatar} 
          />
          <View style={styles.profileInfo}>
            <ThemedText type="subtitle" style={styles.name}>Vivuer VIP</ThemedText>
            <ThemedText style={styles.email}>customer@vivu.com</ThemedText>
          </View>
          <TouchableOpacity style={styles.settingsBtn}>
            <Settings size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <ThemedText style={styles.statVal}>12</ThemedText>
            <ThemedText style={styles.statLabel}>Chuyến đi</ThemedText>
          </View>
          <View style={[styles.statItem, styles.statBorder]}>
            <ThemedText style={styles.statVal}>5</ThemedText>
            <ThemedText style={styles.statLabel}>Yêu thích</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText style={styles.statVal}>850k</ThemedText>
            <ThemedText style={styles.statLabel}>Điểm</ThemedText>
          </View>
        </View>

        <View style={styles.menuSection}>
          <MenuItem icon={User} label="Thông tin cá nhân" color="#006FEE" />
          <MenuItem icon={Bell} label="Thông báo" color="#FFAB00" />
          <MenuItem icon={Shield} label="Bảo mật & Pháp lý" color="#36B37E" />
          <MenuItem icon={HelpCircle} label="Trung tâm hỗ trợ" color="#6554C0" />
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
          <LogOut size={20} color="#FF5A5F" />
          <ThemedText style={styles.logoutText}>Đăng xuất</ThemedText>
        </TouchableOpacity>

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function MenuItem({ icon: Icon, label, color }: any) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={[styles.menuIcon, { backgroundColor: color + "15" }]}>
        <Icon size={20} color={color} />
      </View>
      <ThemedText style={styles.menuLabel}>{label}</ThemedText>
      <ChevronRight size={18} color="#CCC" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  profileHeader: { flexDirection: "row", alignItems: "center", padding: 25 },
  avatar: { width: 70, height: 70, borderRadius: 35, borderWidth: 3, borderColor: "#006FEE" },
  profileInfo: { flex: 1, marginLeft: 15 },
  name: { fontSize: 20, fontWeight: "800" },
  email: { color: "#999", fontSize: 13 },
  settingsBtn: { padding: 10, backgroundColor: "#F5F5F5", borderRadius: 12 },
  statsRow: { flexDirection: "row", backgroundColor: "#F9F9F9", marginHorizontal: 20, borderRadius: 20, padding: 20 },
  statItem: { flex: 1, alignItems: "center" },
  statBorder: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: "#DDD" },
  statVal: { fontSize: 18, fontWeight: "800", color: "#333" },
  statLabel: { fontSize: 11, color: "#999", marginTop: 4 },
  menuSection: { marginTop: 30, paddingHorizontal: 20, gap: 10 },
  menuItem: { flexDirection: "row", alignItems: "center", paddingVertical: 15 },
  menuIcon: { width: 44, height: 44, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  menuLabel: { flex: 1, marginLeft: 15, fontSize: 15, fontWeight: "600" },
  logoutBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 40, marginHorizontal: 20, height: 56, borderRadius: 20, backgroundColor: "#FFF5F5" },
  logoutText: { color: "#FF5A5F", fontWeight: "800" }
});
