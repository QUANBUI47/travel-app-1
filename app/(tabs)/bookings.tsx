import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  StatusBar
} from "react-native";
import { Compass, ChevronRight, Clock, Calendar } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, FontFamily, Spacing } from "@/constants/theme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";



const MOCK_BOOKINGS = [
  {
    id: 1,
    title: "Tour Heritage Hạ Long 2N1Đ",
    date: "25 Tháng 3, 2026",
    status: "Đã xác nhận",
    statusColor: "#059669",
    image: "https://images.unsplash.com/photo-1559592442-741e6b89cc75?q=80&w=400&auto=format&fit=crop",
    price: "2.450.000₫"
  }
];

export default function BookingsScreen() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const theme = Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        
        {/* Modern Header */}
        <View style={styles.header}>
           <ThemedText style={styles.title}>Chuyến đi</ThemedText>
           
           {/* Tab Switcher */}
           <View style={[styles.tabContainer, { backgroundColor: theme.surface }]}>
              <TouchableOpacity 
                style={[styles.tab, activeTab === "upcoming" && styles.activeTab]} 
                onPress={() => setActiveTab("upcoming")}
              >
                 <ThemedText style={[styles.tabText, activeTab === "upcoming" && styles.activeTabText]}>Sắp tới</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tab, activeTab === "history" && styles.activeTab]} 
                onPress={() => setActiveTab("history")}
              >
                 <ThemedText style={[styles.tabText, activeTab === "history" && styles.activeTabText]}>Lịch sử</ThemedText>
              </TouchableOpacity>
           </View>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {activeTab === "upcoming" ? (
            <View style={styles.listSection}>
               {MOCK_BOOKINGS.length > 0 ? (
                 MOCK_BOOKINGS.map((booking) => (
                   <TouchableOpacity key={booking.id} style={styles.bookingCard} activeOpacity={0.9}>
                      <Image source={{ uri: booking.image }} style={styles.bookingImg} />
                      <View style={styles.bookingContent}>
                         <View style={styles.statusRow}>
                            <View style={[styles.statusBadge, { backgroundColor: booking.statusColor + "15" }]}>
                               <View style={[styles.statusDot, { backgroundColor: booking.statusColor }]} />
                               <ThemedText style={[styles.statusText, { color: booking.statusColor }]}>{booking.status}</ThemedText>
                            </View>
                            <ThemedText style={styles.priceText}>{booking.price}</ThemedText>
                         </View>
                         
                         <ThemedText style={styles.bookingTitle}>{booking.title}</ThemedText>
                         
                         <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                               <Calendar size={14} color={theme.muted} />
                               <ThemedText style={styles.infoText}>{booking.date}</ThemedText>
                            </View>
                            <View style={[styles.divider, { backgroundColor: theme.border }]} />
                            <View style={styles.infoItem}>
                               <Clock size={14} color={theme.muted} />
                               <ThemedText style={styles.infoText}>14:00 PM</ThemedText>
                            </View>
                         </View>

                         <View style={[styles.footerBtn, { borderColor: theme.border }]}>
                            <ThemedText style={[styles.footerBtnText, { color: theme.primary }]}>XEM CHI TIẾT VÉ</ThemedText>
                            <ChevronRight size={14} color={theme.primary} />
                         </View>
                      </View>
                   </TouchableOpacity>
                 ))
               ) : (
                 <EmptyState theme={theme} />
               )}
            </View>
          ) : (
            <EmptyState theme={theme} isHistory />
          )}

          {/* Suggested Section */}
          <View style={styles.suggestSection}>
             <ThemedText style={styles.sectionTitle}>Gợi ý cho hành trình tiếp theo</ThemedText>
             <TouchableOpacity style={styles.suggestCard}>
                <Image 
                  source={{ uri: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop" }} 
                  style={styles.suggestImg}
                />
                <View style={styles.suggestOverlay}>
                   <LinearGradient
                     colors={["transparent", "rgba(0,0,0,0.8)"]}
                     style={StyleSheet.absoluteFill}
                   />
                   <View style={styles.suggestMeta}>
                      <ThemedText style={styles.suggestTitle}>Cố đô Huế — Vẻ đẹp trầm mặc</ThemedText>
                      <ThemedText style={styles.suggestTag}>Giảm 20% cho thành viên</ThemedText>
                   </View>
                </View>
             </TouchableOpacity>
          </View>

          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function EmptyState({ theme, isHistory }: any) {
  return (
    <View style={styles.emptyWrap}>
       <View style={[styles.emptyIconCircle, { backgroundColor: theme.primary + "08" }]}>
          <Compass size={40} color={theme.primary} />
       </View>
       <ThemedText style={styles.emptyTitle}>
          {isHistory ? "Chưa có lịch sử chuyến đi" : "Bạn chưa có chuyến đi nào"}
       </ThemedText>
       <ThemedText style={styles.emptySub}>
          {isHistory ? "Hãy hoàn thành chuyến đi đầu tiên để lưu lại những kỷ niệm đẹp cùng Vivu." : "Bắt đầu khám phá hàng ngàn tour du lịch hấp dẫn trên khắp Việt Nam ngay hôm nay."}
       </ThemedText>
       {!isHistory && (
         <TouchableOpacity style={[styles.exploreBtn, { backgroundColor: theme.primary }]}>
            <ThemedText style={styles.exploreBtnText}>KHÁM PHÁ NGAY</ThemedText>
         </TouchableOpacity>
       )}
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
    paddingHorizontal: Spacing[6],
    paddingTop: Spacing[4],
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
    marginBottom: Spacing[4],
  },
  tabContainer: {
    flexDirection: "row",
    height: 48,
    borderRadius: 14,
    padding: 4,
    marginBottom: Spacing[4],
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#64748B",
  },
  activeTabText: {
    color: "#1E293B",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  listSection: {
    paddingHorizontal: Spacing[6],
    gap: 16,
  },
  bookingCard: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F1F5F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  bookingImg: {
    width: "100%",
    height: 140,
  },
  bookingContent: {
    padding: 16,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "900",
  },
  priceText: {
    fontSize: 14,
    fontWeight: "900",
    color: "#1E293B",
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "600",
  },
  divider: {
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  footerBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    marginTop: 4,
    gap: 6,
  },
  footerBtnText: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  emptyWrap: {
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyIconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1E293B",
    textAlign: "center",
  },
  emptySub: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 22,
  },
  exploreBtn: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
  },
  exploreBtnText: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "900",
  },
  suggestSection: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
    paddingHorizontal: Spacing[6],
    marginBottom: 16,
  },
  suggestCard: {
    marginHorizontal: Spacing[6],
    height: 180,
    borderRadius: 24,
    overflow: "hidden",
  },
  suggestImg: {
    width: "100%",
    height: "100%",
  },
  suggestOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: "flex-end",
  },
  suggestMeta: {
    gap: 4,
  },
  suggestTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#FFF",
  },
  suggestTag: {
    fontSize: 12,
    color: "#FEF3C7",
    fontWeight: "700",
  },
});
