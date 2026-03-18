import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Switch,
  StatusBar
} from "react-native";
import { 
  ArrowLeft, 
  Bell, 
  Shield, 
  Languages, 
  Moon, 
  MessageSquare, 
  Info, 
  ChevronRight,
  User
} from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import { Colors, FontFamily, Spacing } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const router = useRouter();
  const theme = Colors.light;

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <ArrowLeft size={24} color={theme.text} />
          </TouchableOpacity>
          <ThemedText style={styles.headerTitle}>Cài đặt</ThemedText>
          <View style={{ width: 44 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.section}>
            <ThemedText style={styles.sectionLabel}>ỨNG DỤNG</ThemedText>
            
            <SettingItem 
               icon={Bell} 
               label="Thông báo đẩy" 
               color="#006FEE"
               rightComponent={
                 <Switch 
                   value={notifications} 
                   onValueChange={setNotifications}
                   trackColor={{ false: "#E2E8F0", true: theme.primary }}
                   thumbColor="#FFF"
                 />
               }
            />

            <SettingItem 
               icon={Moon} 
               label="Chế độ tối" 
               color="#6554C0"
               rightComponent={
                 <Switch 
                   value={darkMode} 
                   onValueChange={setDarkMode}
                   trackColor={{ false: "#E2E8F0", true: theme.primary }}
                   thumbColor="#FFF"
                 />
               }
            />

            <SettingItem 
               icon={Languages} 
               label="Ngôn ngữ" 
               value="Tiếng Việt"
               color="#36B37E"
            />
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionLabel}>TÀI KHOẢN & BẢO MẬT</ThemedText>
            
            <SettingItem 
               icon={User} 
               label="Chỉnh sửa hồ sơ" 
               color="#FF5A5F"
            />
            
            <SettingItem 
               icon={Shield} 
               label="Đổi mật khẩu" 
               color="#FFAB00"
            />
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionLabel}>HỖ TRỢ</ThemedText>
            
            <SettingItem 
               icon={MessageSquare} 
               label="Gửi phản hồi" 
               color="#00B8D9"
            />
            
            <SettingItem 
               icon={Info} 
               label="Về Vivu Heritage" 
               color="#64748B"
            />
          </View>

          <View style={styles.footer}>
             <ThemedText style={styles.versionText}>Phiên bản 1.0.2 (Build 202603)</ThemedText>
             <ThemedText style={styles.copyrightText}>© 2026 Vivu Heritage Team</ThemedText>
          </View>

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function SettingItem({ icon: Icon, label, value, color, rightComponent }: any) {
  return (
    <TouchableOpacity style={styles.settingItem} activeOpacity={0.6}>
      <View style={[styles.iconWrap, { backgroundColor: color + "10" }]}>
        <Icon size={20} color={color} />
      </View>
      <ThemedText style={styles.settingLabel}>{label}</ThemedText>
      
      {rightComponent ? (
        rightComponent
      ) : (
        <View style={styles.rightRow}>
           {value && <ThemedText style={styles.settingValue}>{value}</ThemedText>}
           <ChevronRight size={18} color="#CBD5E1" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 56,
  },
  backBtn: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
  },
  scrollContent: {
    paddingHorizontal: Spacing[6],
    paddingTop: Spacing[4],
  },
  section: {
    marginBottom: 32,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "900",
    color: "#94A3B8",
    letterSpacing: 1,
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F8FAFC",
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  settingLabel: {
    flex: 1,
    marginLeft: 16,
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  settingValue: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
    gap: 4,
  },
  versionText: {
    fontSize: 12,
    color: "#94A3B8",
    fontWeight: "600",
  },
  copyrightText: {
    fontSize: 11,
    color: "#CBD5E1",
    fontWeight: "500",
  },
});
