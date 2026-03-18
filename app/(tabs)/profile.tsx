import React from "react";
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  StatusBar
} from "react-native";
import { 
  Settings, 
  ShieldCheck, 
  Bell, 
  HelpCircle, 
  LogOut, 
  ChevronRight, 
  CreditCard,
  Heart,
  History,
  Star
} from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Colors, FontFamily, Spacing } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useAuthStore } from "@/stores/auth-store";
import { Link } from "expo-router";

export default function ProfileScreen() {
  const theme = Colors.light;
  const { user } = useAuthStore();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Profile Header With Gradient Backdrop */}
        <View style={styles.headerContainer}>
          <LinearGradient
            colors={[theme.primary, theme.primaryHover]}
            style={styles.headerBackdrop}
          />
          <SafeAreaView edges={["top"]} style={styles.headerSafe}>
            <View style={styles.headerTopRow}>
               <ThemedText style={styles.headerMainTitle}>Tài khoản</ThemedText>
               <Link href="/settings" asChild>
                 <TouchableOpacity style={styles.settingsBtn}>
                    <Settings size={22} color="#FFF" />
                 </TouchableOpacity>
               </Link>
            </View>

            <View style={styles.profileCard}>
              <View style={styles.profileMain}>
                <View style={styles.avatarWrap}>
                  <Image 
                    source={{ uri: user?.avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" }} 
                    style={styles.avatar} 
                  />
                  <View style={[styles.vipBadge, { backgroundColor: theme.primary }]}>
                     <Star size={10} color="#FFF" fill="#FFF" />
                  </View>
                </View>
                <View style={styles.infoBox}>
                  <ThemedText style={styles.userName}>{user?.fullName || "Khách hàng Vivu"}</ThemedText>
                  <View style={styles.memberStatus}>
                     <ThemedText style={styles.memberText}>Thành viên Vàng</ThemedText>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>

        {/* Quick Stats Section */}
        <View style={styles.statsContainer}>
           <StatItem label="Chuyến đi" val="12" icon={History} color="#006FEE" />
           <StatItem label="Yêu thích" val="24" icon={Heart} color="#FF5A5F" />
           <StatItem label="V-Point" val="850k" icon={Star} color="#FFAB00" />
        </View>

        {/* Menu Sections */}
        <View style={styles.menuBox}>
           <ThemedText style={styles.menuGroupTitle}>GIAO DỊCH & ƯU ĐÃI</ThemedText>
           <MenuItem icon={CreditCard} label="Ví V-Pay & Thẻ" color="#006FEE" />
           <MenuItem icon={Star} label="Ưu đãi của tôi" color="#FFAB00" />
           
           <ThemedText style={[styles.menuGroupTitle, { marginTop: 24 }]}>TIỆN ÍCH</ThemedText>
           <MenuItem icon={Bell} label="Thông báo" color="#3182CE" />
           <MenuItem icon={ShieldCheck} label="Bảo mật tài khoản" color="#38A169" />
           <MenuItem icon={HelpCircle} label="Trung tâm trợ giúp" color="#805AD5" />
        </View>

        {/* SafeCare Assurance */}
        <View style={styles.safeCareBox}>
           <LinearGradient
             colors={[theme.success + "10", theme.success + "05"]}
             style={styles.safeCareGradient}
           >
              <ShieldCheck size={20} color={theme.success} />
              <View style={{ flex: 1 }}>
                <ThemedText style={[styles.safeCareTitle, { color: theme.success }]}>VIVU SafeCare</ThemedText>
                <ThemedText style={styles.safeCareDesc}>Tài khoản và dữ liệu của bạn được bảo mật tuyệt đối.</ThemedText>
              </View>
           </LinearGradient>
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.7}>
          <LogOut size={20} color="#EF4444" />
          <ThemedText style={styles.logoutText}>Đăng xuất khỏi thiết bị</ThemedText>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

function StatItem({ label, val, icon: Icon, color }: any) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIconWrap, { backgroundColor: color + "10" }]}>
        <Icon size={18} color={color} />
      </View>
      <ThemedText style={styles.statVal}>{val}</ThemedText>
      <ThemedText style={styles.statLabel}>{label}</ThemedText>
    </View>
  );
}

function MenuItem({ icon: Icon, label, color }: any) {
  return (
    <TouchableOpacity style={styles.menuItem} activeOpacity={0.6}>
      <View style={[styles.menuIconWrap, { backgroundColor: color + "10" }]}>
        <Icon size={20} color={color} />
      </View>
      <ThemedText style={styles.menuLabel}>{label}</ThemedText>
      <ChevronRight size={18} color="#CBD5E1" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  headerContainer: {
    height: 240,
  },
  headerBackdrop: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerSafe: {
    paddingHorizontal: Spacing[6],
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Spacing[4],
  },
  headerMainTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFF",
    fontFamily: FontFamily.serif,
  },
  settingsBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  profileCard: {
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  profileMain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatarWrap: {
    position: "relative",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#FFF",
  },
  vipBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  infoBox: {
    flex: 1,
    gap: 4,
  },
  userName: {
    fontSize: 20,
    fontWeight: "900",
    fontFamily: FontFamily.sans,
  },
  memberStatus: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#FEF3C7",
    borderRadius: 6,
  },
  memberText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#D97706",
    letterSpacing: 0.5,
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: Spacing[6],
    gap: 12,
    marginTop: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  statIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  statVal: {
    fontSize: 16,
    fontWeight: "900",
  },
  statLabel: {
    fontSize: 10,
    color: "#64748B",
    fontWeight: "600",
    marginTop: 2,
  },
  menuBox: {
    marginTop: 32,
    paddingHorizontal: Spacing[6],
  },
  menuGroupTitle: {
    fontSize: 11,
    fontWeight: "900",
    color: "#94A3B8",
    letterSpacing: 1,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F8FAFC",
  },
  menuIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  menuLabel: {
    flex: 1,
    marginLeft: 16,
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
  },
  safeCareBox: {
    marginTop: 32,
    paddingHorizontal: Spacing[6],
  },
  safeCareGradient: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    gap: 16,
  },
  safeCareTitle: {
    fontSize: 14,
    fontWeight: "900",
  },
  safeCareDesc: {
    fontSize: 11,
    color: "#64748B",
    fontWeight: "500",
    marginTop: 2,
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 40,
    marginHorizontal: Spacing[6],
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FEF2F2",
  },
  logoutText: {
    color: "#EF4444",
    fontSize: 15,
    fontWeight: "800",
  },
});
