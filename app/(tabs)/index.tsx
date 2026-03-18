import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity, 
  Dimensions
} from "react-native";
import {
  Search,
  Bell,
  User,
  MapPin,
  Palmtree,
  Hotel,
  Waves,
  TrendingUp,
  Heart,
  Star
} from "lucide-react-native";
import { Image } from "expo-image";
import { BrandLogo } from "@/components/brand-logo";
import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

const CATEGORIES = [
  { icon: Palmtree, label: "Tours", color: "#006FEE" },
  { icon: Hotel, label: "Hotel", color: "#FF5A5F" },
  { icon: Waves, label: "Beach", color: "#00B8D9" },
  { icon: TrendingUp, label: "Trend", color: "#FFAB00" },
];

const FEATURED_TOURS = [
  { id: 1, title: "Hạ Long — Hành trình di sản", location: "Quảng Ninh", price: "2.5M", rating: 4.8, image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop" },
  { id: 2, title: "Phú Quốc — Đảo Ngọc", location: "Kiên Giang", price: "4.8M", rating: 4.9, image: "https://images.unsplash.com/photo-1506197394121-6a0c99d3f2e4?q=80&w=400&auto=format&fit=crop" },
];

export default function HomeScreen() {
  const tint = useThemeColor({}, "tint");
  const bgColor = useThemeColor({}, "background");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <BrandLogo size={48} />
            <View>
              <ThemedText style={styles.greeting}>Xin chào,</ThemedText>
              <ThemedText type="title" style={styles.username}>Vivuer 👋</ThemedText>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity style={styles.iconButton}>
                <User size={24} color="#666" />
              </TouchableOpacity>
            </Link>
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={24} color="#666" />
              <View style={styles.badge} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#999" />
            <TextInput 
              placeholder="Bạn muốn đi đâu?" 
              style={styles.searchInput} 
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryList}>
            {CATEGORIES.map((cat, idx) => (
              <TouchableOpacity key={idx} style={styles.categoryItem}>
                <View style={[styles.categoryIcon, { backgroundColor: cat.color + "15" }]}>
                  <cat.icon size={24} color={cat.color} />
                </View>
                <ThemedText style={styles.categoryLabel}>{cat.label}</ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Tours */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle">Tour nổi bật</ThemedText>
            <TouchableOpacity><ThemedText style={{ color: tint }}>Xem tất cả</ThemedText></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tourList}>
            {FEATURED_TOURS.map((tour) => (
              <TouchableOpacity key={tour.id} style={styles.tourCard}>
                <Image source={{ uri: tour.image }} style={styles.tourImage} />
                <TouchableOpacity style={styles.wishlistBtn}>
                  <Heart size={18} color="#FFF" />
                </TouchableOpacity>
                <View style={styles.tourInfo}>
                  <ThemedText style={styles.tourTitle} numberOfLines={1}>{tour.title}</ThemedText>
                  <View style={styles.locationRow}>
                    <MapPin size={12} color="#666" />
                    <ThemedText style={styles.locationText}>{tour.location}</ThemedText>
                  </View>
                  <View style={styles.priceRow}>
                    <ThemedText style={styles.priceText}>₫{tour.price}</ThemedText>
                    <View style={styles.ratingRow}>
                      <Star size={12} color="#FFAB00" fill="#FFAB00" />
                      <ThemedText style={styles.ratingText}>{tour.rating}</ThemedText>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 14,
    color: "#666",
  },
  username: {
    fontSize: 22,
    fontWeight: "800",
  },
  iconButton: {
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 14,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: "#FF3B30",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  searchContainer: {
    padding: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    height: 54,
    borderRadius: 18,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  section: {
    marginTop: 10,
  },
  categoryList: {
    paddingHorizontal: 20,
    gap: 24,
  },
  categoryItem: {
    alignItems: "center",
    gap: 8,
  },
  categoryIcon: {
    width: 58,
    height: 58,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
    marginTop: 20,
  },
  tourList: {
    paddingLeft: 20,
    paddingRight: 10,
    gap: 16,
  },
  tourCard: {
    width: width * 0.7,
    backgroundColor: "#FFF",
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  tourImage: {
    width: "100%",
    height: 180,
  },
  wishlistBtn: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 8,
    borderRadius: 12,
  },
  tourInfo: {
    padding: 16,
    gap: 6,
  },
  tourTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    fontSize: 12,
    color: "#666",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#006FEE",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "700",
  },
});
