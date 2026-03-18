import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity, 
  Dimensions,
  StatusBar,
  Pressable
} from "react-native";
import {
  Search,
  Bell,
  MapPin,
  Palmtree,
  Hotel,
  Waves,
  TrendingUp,
  Heart,
  Star,
  Compass,
  ChevronRight
} from "lucide-react-native";
import { Image } from "expo-image";
import { BrandLogo } from "@/components/brand-logo";
import { ThemedText } from "@/components/themed-text";
import { Colors, FontFamily, Spacing } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

const CATEGORIES = [
  { icon: Palmtree, label: "Tours", color: "#006FEE" },
  { icon: Hotel, label: "Khách sạn", color: "#FF5A5F" },
  { icon: Waves, label: "Biển đảo", color: "#00B8D9" },
  { icon: TrendingUp, label: "Xu hướng", color: "#FFAB00" },
];

const FEATURED_TOURS = [
  { 
    id: 1, 
    title: "Vịnh Hạ Long — Kỳ quan di sản", 
    location: "Quảng Ninh", 
    price: "2.450.000", 
    rating: 4.8, 
    reviews: 124, 
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Phú Quốc — Thiên đường biển", 
    location: "Kiên Giang", 
    price: "4.800.000", 
    rating: 4.9, 
    reviews: 89, 
    image: "https://images.unsplash.com/photo-1506197394121-6a0c99d3f2e4?q=80&w=600&auto=format&fit=crop" 
  },
];

const PROMOTIONS = [
  {
    id: 1,
    title: "Giảm 30% cho Tour Heritage",
    code: "VIVU30",
    color: ["#006FEE", "#004B9B"],
    image: "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=400&auto=format&fit=crop"
  }
];

export default function HomeScreen() {
  const theme = Colors.light;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Chào buổi sáng,";
    if (hour < 18) return "Chào buổi chiều,";
    return "Chào buổi tối,";
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        
        {/* Modern Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <BrandLogo size={42} variant="light" />
            <View style={styles.greetingBox}>
              <ThemedText style={[styles.greeting, { color: theme.mutedForeground }]}>{getGreeting()}</ThemedText>
              <ThemedText style={styles.username}>Khách hàng Vivu 👋</ThemedText>
            </View>
          </View>
          <View style={styles.headerActions}>
            <Link href="/notifications" asChild>
              <TouchableOpacity style={[styles.iconBtn, { borderColor: theme.border }]}>
                <Bell size={20} color={theme.text} />
                <View style={[styles.dot, { backgroundColor: theme.primary }]} />
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <ThemedText style={styles.heroTitle}>
              Khám phá{"\n"}<ThemedText style={{ color: theme.primary }}>di sản Việt Nam</ThemedText>
            </ThemedText>
            
            {/* Search Bar */}
            <View style={[styles.searchOuter, { borderColor: theme.border }]}>
               <Search size={20} color={theme.muted} />
               <TextInput 
                 placeholder="Tìm kiếm điểm đến, tour..." 
                 placeholderTextColor={theme.muted}
                 style={styles.searchInput}
               />
               <TouchableOpacity style={[styles.filterBtn, { backgroundColor: theme.primary }]}>
                  <Compass size={18} color="#FFF" />
               </TouchableOpacity>
            </View>
          </View>

          {/* Categories */}
          <View style={styles.section}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={styles.categoryScroll}
            >
              {CATEGORIES.map((cat, idx) => (
                <TouchableOpacity key={idx} style={styles.categoryItem}>
                  <View style={[styles.categoryIcon, { backgroundColor: cat.color + "10" }]}>
                    <cat.icon size={22} color={cat.color} />
                  </View>
                  <ThemedText style={styles.categoryLabel}>{cat.label}</ThemedText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Promotions Carousel - Premium look */}
          <View style={styles.section}>
            {PROMOTIONS.map((promo) => (
              <Pressable key={promo.id} style={styles.promoCard}>
                <Image source={{ uri: promo.image }} style={styles.promoImg} />
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.8)"]}
                  style={StyleSheet.absoluteFill}
                />
                <View style={styles.promoContent}>
                  <View style={styles.promoBadge}>
                    <ThemedText style={styles.promoBadgeText}>ƯU ĐÃI THÁNG 3</ThemedText>
                  </View>
                  <ThemedText style={styles.promoTitle}>{promo.title}</ThemedText>
                  <ThemedText style={styles.promoCode}>Mã: {promo.code}</ThemedText>
                </View>
              </Pressable>
            ))}
          </View>

          {/* Featured Tours */}
          <View style={styles.section}>
            <View style={styles.sectionRow}>
              <ThemedText style={styles.sectionTitle}>Điểm đến nổi bật</ThemedText>
              <TouchableOpacity style={styles.viewAllRow}>
                <ThemedText style={[styles.viewAll, { color: theme.primary }]}>Tất cả</ThemedText>
                <ChevronRight size={14} color={theme.primary} />
              </TouchableOpacity>
            </View>

            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={styles.tourScroll}
            >
              {FEATURED_TOURS.map((tour) => (
                <Link key={tour.id} href={{ pathname: "/tour/[id]", params: { id: tour.id } }} asChild>
                  <TouchableOpacity activeOpacity={0.9} style={styles.tourCard}>
                    <View style={styles.tourImgContainer}>
                      <Image source={{ uri: tour.image }} style={styles.tourImg} />
                      <LinearGradient
                        colors={["rgba(0,0,0,0.3)", "transparent"]}
                        style={StyleSheet.absoluteFill}
                      />
                      <TouchableOpacity style={styles.heartBtn} onPress={(e) => { e.stopPropagation(); /* Handle like */ }}>
                        <Heart size={16} color="#FFF" />
                      </TouchableOpacity>
                      <View style={styles.ratingBadge}>
                        <Star size={10} color="#FFAB00" fill="#FFAB00" />
                        <ThemedText style={styles.ratingText}>{tour.rating}</ThemedText>
                      </View>
                    </View>
                    
                    <View style={styles.tourMeta}>
                      <ThemedText style={styles.tourTitle} numberOfLines={1}>{tour.title}</ThemedText>
                      <View style={styles.locRow}>
                        <MapPin size={10} color={theme.muted} />
                        <ThemedText style={styles.locText}>{tour.location}</ThemedText>
                      </View>
                      <View style={styles.priceRow}>
                        <View>
                          <ThemedText style={styles.priceUnit}>Giá từ</ThemedText>
                          <ThemedText style={[styles.priceVal, { color: theme.primary }]}>₫{tour.price}</ThemedText>
                        </View>
                        <View style={[styles.bookBtn, { backgroundColor: theme.primary + "10" }]}>
                           <ThemedText style={{ color: theme.primary, fontSize: 10, fontWeight: "900" }}>ĐẶT NGAY</ThemedText>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Link>
              ))}
            </ScrollView>
          </View>

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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Spacing[6],
    paddingVertical: Spacing[4],
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  greetingBox: {
    justifyContent: "center",
  },
  greeting: {
    fontSize: 12,
    fontWeight: "600",
  },
  username: {
    fontSize: 16,
    fontWeight: "800",
    fontFamily: FontFamily.sans,
  },
  headerActions: {
    flexDirection: "row",
    gap: 10,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  dot: {
    position: "absolute",
    top: 10,
    right: 12,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  heroSection: {
    paddingHorizontal: Spacing[6],
    paddingVertical: Spacing[4],
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
    lineHeight: 40,
    marginBottom: Spacing[5],
  },
  searchOuter: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: FontFamily.sans,
  },
  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    marginTop: Spacing[6],
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Spacing[6],
    marginBottom: Spacing[4],
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
  },
  viewAllRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  viewAll: {
    fontSize: 13,
    fontWeight: "800",
  },
  categoryScroll: {
    paddingLeft: Spacing[6],
    paddingRight: Spacing[2],
    gap: 20,
  },
  categoryItem: {
    alignItems: "center",
    gap: 10,
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#666",
  },
  promoCard: {
    marginHorizontal: Spacing[6],
    height: 160,
    borderRadius: 24,
    overflow: "hidden",
  },
  promoImg: {
    width: "100%",
    height: "100%",
  },
  promoContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  promoBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 8,
  },
  promoBadgeText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "900",
  },
  promoTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#FFF",
    marginBottom: 4,
  },
  promoCode: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    fontWeight: "700",
  },
  tourScroll: {
    paddingLeft: Spacing[6],
    paddingRight: Spacing[2],
    gap: 16,
  },
  tourCard: {
    width: width * 0.75,
    borderRadius: 24,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#F1F1F1",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  tourImgContainer: {
    height: 190,
  },
  tourImg: {
    width: "100%",
    height: "100%",
  },
  heartBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingBadge: {
    position: "absolute",
    bottom: 12,
    left: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: "900",
  },
  tourMeta: {
    padding: 16,
    gap: 4,
  },
  tourTitle: {
    fontSize: 16,
    fontWeight: "900",
  },
  locRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  priceUnit: {
    fontSize: 10,
    color: "#9CA3AF",
    fontWeight: "600",
  },
  priceVal: {
    fontSize: 18,
    fontWeight: "900",
  },
  bookBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
