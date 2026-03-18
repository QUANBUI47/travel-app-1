import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  StatusBar,
  Platform
} from "react-native";
import { 
  ArrowLeft, 
  Share2, 
  Heart, 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { Colors, FontFamily, Spacing } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function TourDetailScreen() {
  const [isLiked, setIsLiked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();
  const theme = Colors.light;

  // Mock data for the tour
  const tour = {
    title: "Vịnh Hạ Long — Hành trình di sản quốc gia",
    location: "Vịnh Hạ Long, Quảng Ninh",
    rating: 4.8,
    reviews: 124,
    price: "2.450.000₫",
    duration: "2 Ngày 1 Đêm",
    groupSize: "Tối đa 15 người",
    description: "Khám phá vẻ đẹp huyền bí của Vịnh Hạ Long - di sản thiên nhiên thế giới được UNESCO công nhận. Trải nghiệm du thuyền 5 sao, thưởng thức hải sản tươi ngon và tham gia các hoạt động chèo kayak, khám phá hang động kỳ ảo.\n\nHành trình được thiết kế đặc biệt để bạn cảm nhận trọn vẹn vẻ đẹp quyến rũ của hàng ngàn hòn đảo đá vôi nhô lên từ dòng nước xanh ngọc bích.",
    highlights: [
      "Nghỉ đêm trên du thuyền 5 sao sang trọng",
      "Khám phá Hang Sửng Sốt & Đảo Ti Tốp",
      "Thưởng thức buffet hải sản cao cấp",
      "Chèo thuyền Kayak & Swimming tại Vịnh Lan Hạ"
    ],
    images: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=800&auto=format&fit=crop"
    ]
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="light-content" translucent />
      
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* Header Image Gallery */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: tour.images[0] }} style={styles.headerImg} />
          <LinearGradient
            colors={["rgba(0,0,0,0.4)", "transparent", "rgba(0,0,0,0.6)"]}
            style={StyleSheet.absoluteFill}
          />
          
          <SafeAreaView style={styles.topActions}>
            <TouchableOpacity 
              style={styles.circleBtn} 
              onPress={() => router.back()}
            >
              <ArrowLeft size={22} color="#FFF" />
            </TouchableOpacity>
            
            <View style={styles.rightActions}>
               <TouchableOpacity style={styles.circleBtn}>
                  <Share2 size={20} color="#FFF" />
               </TouchableOpacity>
               <TouchableOpacity 
                 style={styles.circleBtn}
                 onPress={() => setIsLiked(!isLiked)}
               >
                  <Heart size={20} color={isLiked ? "#FF3B30" : "#FFF"} fill={isLiked ? "#FF3B30" : "transparent"} />
               </TouchableOpacity>
            </View>
          </SafeAreaView>

          <View style={styles.imageBadge}>
             <ThemedText style={styles.imageBadgeText}>1/2</ThemedText>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.contentWrap}>
           <View style={styles.titleRow}>
              <ThemedText style={styles.title}>{tour.title}</ThemedText>
              <View style={styles.ratingBox}>
                 <Star size={14} color="#FFAB00" fill="#FFAB00" />
                 <ThemedText style={styles.ratingText}>{tour.rating}</ThemedText>
                 <ThemedText style={styles.reviewText}>({tour.reviews})</ThemedText>
              </View>
           </View>

           <View style={styles.locRow}>
              <MapPin size={16} color={theme.primary} />
              <ThemedText style={styles.locText}>{tour.location}</ThemedText>
           </View>

           {/* Quick Info Grid */}
           <View style={styles.infoGrid}>
              <View style={[styles.infoItem, { backgroundColor: "#F1F5F9" }]}>
                 <Clock size={18} color="#475569" />
                 <View>
                    <ThemedText style={styles.infoLabel}>Thời gian</ThemedText>
                    <ThemedText style={styles.infoValue}>{tour.duration}</ThemedText>
                 </View>
              </View>
              <View style={[styles.infoItem, { backgroundColor: "#F1F5F9" }]}>
                 <Users size={18} color="#475569" />
                 <View>
                    <ThemedText style={styles.infoLabel}>Quy mô</ThemedText>
                    <ThemedText style={styles.infoValue}>{tour.groupSize}</ThemedText>
                 </View>
              </View>
           </View>

           {/* Description */}
           <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Giới thiệu chuyến đi</ThemedText>
              <ThemedText style={styles.descText}>{tour.description}</ThemedText>
           </View>

           {/* Highlights */}
           <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Điểm nổi bật</ThemedText>
              <View style={styles.highlightList}>
                 {tour.highlights.map((item, idx) => (
                   <View key={idx} style={styles.highlightItem}>
                      <CheckCircle2 size={18} color={theme.success} />
                      <ThemedText style={styles.highlightText}>{item}</ThemedText>
                   </View>
                 ))}
              </View>
           </View>

           {/* Safety Badge */}
           <View style={styles.safecareBanner}>
              <LinearGradient
                colors={[theme.primary + "10", theme.primary + "05"]}
                style={styles.safeGradient}
              >
                 <ShieldCheck size={24} color={theme.primary} />
                 <View style={{ flex: 1 }}>
                    <ThemedText style={[styles.safeTitle, { color: theme.primary }]}>VIVU SafeCare bảo vệ bạn</ThemedText>
                    <ThemedText style={styles.safeDesc}>Hoàn tiền 100% nếu dịch vụ không đúng mô tả.</ThemedText>
                 </View>
              </LinearGradient>
           </View>

           <View style={{ height: 120 }} />
        </View>
      </ScrollView>

      {/* Bottom Booking Bar */}
      <View style={[styles.bookingBar, { borderTopColor: theme.border }]}>
         <View>
            <ThemedText style={styles.priceLabel}>Giá trọn gói</ThemedText>
            <ThemedText style={[styles.priceVal, { color: theme.primary }]}>{tour.price}</ThemedText>
         </View>
         <TouchableOpacity 
           activeOpacity={0.9} 
           style={styles.bookBtn}
           onPress={() => setShowSuccess(true)}
         >
            <LinearGradient
              colors={[theme.primary, theme.primaryHover]}
              style={styles.bookGradient}
            >
               <ThemedText style={styles.bookBtnText}>ĐẶT CHUYẾN ĐI</ThemedText>
               <ChevronRight size={18} color="#FFF" />
            </LinearGradient>
         </TouchableOpacity>
      </View>

      {/* Success Animation/Modal */}
      {showSuccess && (
        <View style={StyleSheet.absoluteFill}>
          <LinearGradient
             colors={["rgba(0,10,25,0.9)", "rgba(0,0,0,0.95)"]}
             style={StyleSheet.absoluteFill}
          />
          <View style={styles.successContainer}>
             <View style={[styles.successCircle, { backgroundColor: theme.success + "20" }]}>
                <CheckCircle2 size={60} color={theme.success} />
             </View>
             <ThemedText style={styles.successTitle}>Đặt chỗ thành công!</ThemedText>
             <ThemedText style={styles.successDesc}>
                Hành trình di sản của bạn đã được xác nhận. Kiểm tra chi tiết trong mục Chuyến đi.
             </ThemedText>
             
             <TouchableOpacity 
               style={[styles.doneBtn, { backgroundColor: theme.primary }]}
               onPress={() => {
                 setShowSuccess(false);
                 router.replace("/(tabs)/bookings");
               }}
             >
                <ThemedText style={styles.doneBtnText}>XEM CHUYẾN ĐI CỦA TÔI</ThemedText>
             </TouchableOpacity>

             <TouchableOpacity 
               style={styles.backHomeBtn}
               onPress={() => setShowSuccess(false)}
             >
                <ThemedText style={[styles.backHomeText, { color: theme.mutedForeground }]}>Quay lại</ThemedText>
             </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: height * 0.45,
    width: width,
  },
  headerImg: {
    width: "100%",
    height: "100%",
  },
  topActions: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  rightActions: {
    flexDirection: "row",
    gap: 12,
  },
  circleBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBadge: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  imageBadgeText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "700",
  },
  contentWrap: {
    flex: 1,
    marginTop: -25,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: Spacing[6],
    paddingTop: 30,
  },
  titleRow: {
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
    lineHeight: 32,
    marginBottom: 8,
  },
  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "900",
  },
  reviewText: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },
  locRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 24,
  },
  locText: {
    fontSize: 14,
    color: "#475569",
    fontWeight: "600",
  },
  infoGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
  },
  infoItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    gap: 12,
  },
  infoLabel: {
    fontSize: 10,
    color: "#64748B",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "900",
    color: "#1E293B",
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
    marginBottom: 12,
  },
  descText: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 24,
    fontWeight: "500",
  },
  highlightList: {
    gap: 12,
  },
  highlightItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  highlightText: {
    fontSize: 14,
    color: "#1E293B",
    fontWeight: "600",
  },
  safecareBanner: {
    borderRadius: 20,
    overflow: "hidden",
  },
  safeGradient: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 16,
  },
  safeTitle: {
    fontSize: 15,
    fontWeight: "900",
  },
  safeDesc: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
    marginTop: 2,
  },
  bookingBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === "ios" ? 30 : 10,
    borderTopWidth: 1,
  },
  priceLabel: {
    fontSize: 12,
    color: "#94A3B8",
    fontWeight: "600",
  },
  priceVal: {
    fontSize: 22,
    fontWeight: "900",
  },
  bookBtn: {
    flex: 1,
    marginLeft: 30,
    height: 54,
    borderRadius: 18,
    overflow: "hidden",
  },
  bookGradient: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  bookBtnText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  successContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  successCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  successTitle: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
    textAlign: "center",
  },
  successDesc: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 15,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 24,
    fontWeight: "500",
  },
  doneBtn: {
    marginTop: 40,
    height: 56,
    width: "100%",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  doneBtnText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },
  backHomeBtn: {
    marginTop: 20,
  },
  backHomeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#94A3B8",
  },
});
