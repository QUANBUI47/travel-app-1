import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  StatusBar
} from "react-native";
import { Search as SearchIcon, Filter, TrendingUp, History, ChevronRight } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, FontFamily, Spacing } from "@/constants/theme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FilterModal } from "@/components/filter-modal";

const { width } = Dimensions.get("window");

const TRENDING_DESTINATIONS = [
  { id: 1, name: "Đà Lạt", count: "1.2k tours", image: "https://images.unsplash.com/photo-1583002570044-f2cae1488ca8?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Đà Nẵng", count: "850 tours", image: "https://images.unsplash.com/photo-1559592442-741e6b89cc75?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Sapa", count: "640 tours", image: "https://images.unsplash.com/photo-1583256082490-a548325cd64e?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Nha Trang", count: "920 tours", image: "https://images.unsplash.com/photo-1590432800540-062758177435?q=80&w=400&auto=format&fit=crop" },
];

const RECENT_SEARCHES = ["Hội An", "Hang Sơn Đoòng", "Chùa Hương"];

export default function SearchScreen() {
  const [showFilters, setShowFilters] = useState(false);
  const theme = Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        
        {/* Modern Search Header */}
        <View style={styles.header}>
           <ThemedText style={styles.title}>Khám phá</ThemedText>
           <View style={styles.searchRow}>
              <View style={[styles.searchBar, { borderColor: theme.border }]}>
                <SearchIcon size={20} color={theme.muted} />
                <TextInput 
                  placeholder="Bạn đang nghĩ về nơi nào?" 
                  placeholderTextColor={theme.muted}
                  style={styles.input} 
                />
              </View>
              <TouchableOpacity 
                style={[styles.filterBtn, { backgroundColor: theme.primary + "10" }]}
                onPress={() => setShowFilters(true)}
              >
                <Filter size={20} color={theme.primary} />
              </TouchableOpacity>
           </View>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Recent Searches */}
          <View style={styles.section}>
            <View style={styles.sectionRow}>
               <View style={styles.sectionTitleGroup}>
                 <History size={16} color={theme.muted} />
                 <ThemedText style={styles.sectionTitle}>Tìm kiếm gần đây</ThemedText>
               </View>
               <TouchableOpacity><ThemedText style={[styles.clearBtn, { color: theme.primary }]}>Xóa</ThemedText></TouchableOpacity>
            </View>
            <View style={styles.recentWrapper}>
              {RECENT_SEARCHES.map((item, idx) => (
                <TouchableOpacity key={idx} style={[styles.recentTag, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                  <ThemedText style={styles.recentTagText}>{item}</ThemedText>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Trending Destinations Grid */}
          <View style={styles.section}>
            <View style={styles.sectionRow}>
               <View style={styles.sectionTitleGroup}>
                 <TrendingUp size={16} color={theme.primary} />
                 <ThemedText style={styles.sectionTitle}>Điểm đến xu hướng</ThemedText>
               </View>
               <TouchableOpacity style={styles.viewMoreRow}>
                 <ThemedText style={[styles.viewMore, { color: theme.primary }]}>Tất cả</ThemedText>
                 <ChevronRight size={14} color={theme.primary} />
               </TouchableOpacity>
            </View>

            <View style={styles.grid}>
              {TRENDING_DESTINATIONS.map((dest) => (
                <TouchableOpacity key={dest.id} style={styles.gridItem} activeOpacity={0.9}>
                   <Image source={{ uri: dest.image }} style={styles.gridImg} />
                   <LinearGradient
                     colors={["transparent", "rgba(0,0,0,0.7)"]}
                     style={StyleSheet.absoluteFill}
                   />
                   <View style={styles.gridContent}>
                     <ThemedText style={styles.destName}>{dest.name}</ThemedText>
                     <ThemedText style={styles.destCount}>{dest.count}</ThemedText>
                   </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Suggestions */}
          <View style={styles.section}>
             <ThemedText style={[styles.sectionTitle, { marginLeft: Spacing[6] }]}>Gợi ý cho bạn</ThemedText>
             <TouchableOpacity style={styles.suggestionCard}>
                <LinearGradient
                  colors={[theme.primary, theme.primaryHover]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.suggestionGradient}
                >
                   <View style={styles.suggestionInfo}>
                      <ThemedText style={styles.suggestionTitle}>Tìm kiếm theo sở thích?</ThemedText>
                      <ThemedText style={styles.suggestionDesc}>Bắt đầu khảo sát nhỏ để chúng tôi hiểu bạn hơn.</ThemedText>
                      <View style={styles.suggestBtn}>
                         <ThemedText style={[styles.suggestBtnText, { color: theme.primary }]}>BẮT ĐẦU NGAY</ThemedText>
                      </View>
                   </View>
                   <Image 
                     source={{ uri: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=200&auto=format&fit=crop" }} 
                     style={styles.suggestionImg}
                   />
                </LinearGradient>
             </TouchableOpacity>
          </View>

          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>

      <FilterModal 
        visible={showFilters} 
        onClose={() => setShowFilters(false)} 
      />
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
    paddingBottom: Spacing[2],
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
    marginBottom: Spacing[4],
  },
  searchRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: FontFamily.sans,
  },
  filterBtn: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    paddingBottom: 20,
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
  sectionTitleGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: FontFamily.serif,
  },
  clearBtn: {
    fontSize: 13,
    fontWeight: "700",
  },
  recentWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: Spacing[6],
    gap: 10,
  },
  recentTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  recentTagText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
  },
  viewMoreRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  viewMore: {
    fontSize: 13,
    fontWeight: "800",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: Spacing[6],
    gap: 12,
  },
  gridItem: {
    width: (width - Spacing[6] * 2 - 12) / 2,
    height: 180,
    borderRadius: 20,
    overflow: "hidden",
  },
  gridImg: {
    width: "100%",
    height: "100%",
  },
  gridContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  destName: {
    fontSize: 16,
    fontWeight: "900",
    color: "#FFF",
  },
  destCount: {
    fontSize: 10,
    fontWeight: "700",
    color: "rgba(255,255,255,0.8)",
    marginTop: 2,
  },
  suggestionCard: {
    marginHorizontal: Spacing[6],
    marginTop: Spacing[4],
    borderRadius: 24,
    overflow: "hidden",
  },
  suggestionGradient: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    gap: 16,
  },
  suggestionInfo: {
    flex: 1,
    gap: 8,
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#FFF",
  },
  suggestionDesc: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    fontWeight: "500",
    lineHeight: 18,
  },
  suggestionImg: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  suggestBtn: {
    alignSelf: "flex-start",
    backgroundColor: "#FFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 8,
  },
  suggestBtnText: {
    fontSize: 11,
    fontWeight: "900",
  },
});
