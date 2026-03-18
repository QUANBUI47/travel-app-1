import React from "react";
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  StatusBar
} from "react-native";
import { 
  ArrowLeft, 
  Tag, 
  Calendar, 
  Info,
  ChevronRight
} from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import { Colors, FontFamily } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: "promo",
    title: "Ưu đãi giới hạn: Giảm 30% cho Tour Phú Quốc",
    desc: "Chỉ áp dụng cho các booking trong tuần này. Đừng bỏ lỡ!",
    time: "2 giờ trước",
    icon: Tag,
    color: "#FF5A5F",
    read: false
  },
  {
    id: 2,
    type: "booking",
    title: "Chuyến đi sắp tới: Vịnh Hạ Long",
    desc: "Hành trình của bạn sẽ bắt đầu sau 3 ngày nữa. Hãy chuẩn bị hành lý nhé!",
    time: "5 giờ trước",
    icon: Calendar,
    color: "#006FEE",
    read: true
  },
  {
    id: 3,
    type: "info",
    title: "Cập nhật chính sách dịch vụ",
    desc: "Vivu Heritage vừa cập nhật điều khoản bảo mật mới để phục vụ bạn tốt hơn.",
    time: "1 ngày trước",
    icon: Info,
    color: "#64748B",
    read: true
  }
];

export default function NotificationsScreen() {
  const router = useRouter();
  const theme = Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <ArrowLeft size={24} color={theme.text} />
          </TouchableOpacity>
          <ThemedText style={styles.headerTitle}>Thông báo</ThemedText>
          <TouchableOpacity style={styles.readAllBtn}>
             <ThemedText style={[styles.readAllText, { color: theme.primary }]}>Đã đọc hết</ThemedText>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {MOCK_NOTIFICATIONS.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.notiItem, !item.read && { backgroundColor: theme.primary + "05" }]}
              activeOpacity={0.7}
            >
               <View style={[styles.iconWrap, { backgroundColor: item.color + "15" }]}>
                  <item.icon size={20} color={item.color} />
               </View>
               <View style={styles.content}>
                  <View style={styles.titleRow}>
                     <ThemedText style={[styles.notiTitle, !item.read && styles.unreadText]}>{item.title}</ThemedText>
                     {!item.read && <View style={[styles.unreadDot, { backgroundColor: theme.primary }]} />}
                  </View>
                  <ThemedText style={styles.notiDesc} numberOfLines={2}>{item.desc}</ThemedText>
                  <ThemedText style={styles.notiTime}>{item.time}</ThemedText>
               </View>
               <ChevronRight size={16} color="#CBD5E1" />
            </TouchableOpacity>
          ))}

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
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
  readAllBtn: {
    paddingHorizontal: 16,
  },
  readAllText: {
    fontSize: 13,
    fontWeight: "700",
  },
  scrollContent: {
    paddingTop: 8,
  },
  notiItem: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    alignItems: "center",
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  notiTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
    flex: 1,
    lineHeight: 20,
  },
  unreadText: {
    color: "#000",
    fontWeight: "900",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
    marginTop: 6,
  },
  notiDesc: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
    marginBottom: 6,
    fontWeight: "500",
  },
  notiTime: {
    fontSize: 11,
    color: "#94A3B8",
    fontWeight: "600",
  },
});
