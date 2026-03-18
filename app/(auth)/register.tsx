import React, { useState } from "react";
import { 
  StyleSheet, 
  View, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StatusBar,
  ImageBackground
} from "react-native";
import { User, Mail, Lock, Eye, EyeOff, ShieldCheck, ChevronRight } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Colors, FontFamily, Radius, Spacing } from "@/constants/theme";
import { useAuthStore } from "@/stores/auth-store";
import { BrandLogo } from "@/components/brand-logo";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

const { height } = Dimensions.get("window");

const GoogleIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 24 24">
    <Path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <Path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <Path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <Path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </Svg>
);

const FacebookIcon = () => (
  <Svg width="18" height="18" viewBox="0 0 24 24">
    <Path fill="#1877F2" d="M24 12.074a12.072 12.072 0 10-13.96 11.933v-8.442H6.974v-3.491h3.066V9.414c0-3.044 1.815-4.72 4.587-4.72 1.33 0 2.723.238 2.723.238v2.99h-1.533c-1.51 0-1.98.937-1.98 1.902v2.25h3.364l-.538 3.491h-2.826v8.442a12.076 12.076 0 0010.163-11.94z" />
  </Svg>
);

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const theme = Colors.light;
  const { setUser } = useAuthStore();

  const handleRegister = () => {
    setUser({
      id: "1",
      email: "example@vivu.com.vn",
      fullName: "Nguyễn Văn A",
      avatarUrl: null,
      role: "USER"
    });
  };

  return (
    <View style={[styles.mainContainer, { backgroundColor: theme.background }]}>
      <StatusBar barStyle="light-content" />
      
      {/* Premium Image Header */}
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop" }}
        style={styles.headerArea}
        blurRadius={1}
      >
        <LinearGradient
          colors={["rgba(0,19,47,0.85)", "rgba(1,10,25,0.4)"]}
          style={StyleSheet.absoluteFill}
        />
        <SafeAreaView edges={["top"]} style={styles.headerLevel}>
          <View style={styles.logoRow}>
            <BrandLogo size={120} variant="dark" />
          </View>
          
          <ThemedText style={styles.headerTitle} numberOfLines={2}>
            Gia nhập cộng đồng Vivu.
          </ThemedText>
          <ThemedText style={styles.headerSubtitle}>
            Khởi đầu chuyến phiêu lưu di sản của bạn ngay hôm nay.
          </ThemedText>
        </SafeAreaView>
      </ImageBackground>

      {/* Form Card Area */}
      <View style={[styles.contentCard, { backgroundColor: theme.background }]}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.formPadding}>
            <View style={styles.socialRow}>
               <TouchableOpacity 
                 style={[styles.socialButton, { borderColor: theme.border }]}
                 activeOpacity={0.7}
               >
                  <GoogleIcon />
                  <ThemedText style={[styles.socialText, { color: theme.text }]}>Google</ThemedText>
               </TouchableOpacity>
               
               <TouchableOpacity 
                 style={[styles.socialButton, { borderColor: theme.border }]}
                 activeOpacity={0.7}
               >
                  <FacebookIcon />
                  <ThemedText style={[styles.socialText, { color: theme.text }]}>Facebook</ThemedText>
               </TouchableOpacity>
            </View>

            <View style={styles.dividerBox}>
              <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
              <ThemedText style={[styles.dividerText, { color: theme.mutedForeground }]}>TẠO MỚI QUA EMAIL</ThemedText>
              <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
            </View>

            <View style={styles.inputsWrapper}>
              <View style={styles.inputItem}>
                <ThemedText style={[styles.inputTag, { color: theme.muted }]}>HỌ VÀ TÊN</ThemedText>
                <View style={[styles.fieldContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                  <User size={18} color={theme.mutedForeground} />
                  <TextInput 
                    placeholder="Nguyễn Văn A" 
                    placeholderTextColor={theme.mutedForeground}
                    style={[styles.fieldInput, { color: theme.text }]}
                  />
                </View>
              </View>

              <View style={styles.inputItem}>
                <ThemedText style={[styles.inputTag, { color: theme.muted }]}>ĐỊA CHỈ EMAIL</ThemedText>
                <View style={[styles.fieldContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                  <Mail size={18} color={theme.mutedForeground} />
                  <TextInput 
                    placeholder="example@vivu.com.vn" 
                    placeholderTextColor={theme.mutedForeground}
                    style={[styles.fieldInput, { color: theme.text }]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.inputItem}>
                <ThemedText style={[styles.inputTag, { color: theme.muted }]}>MẬT KHẨU</ThemedText>
                <View style={[styles.fieldContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                  <Lock size={18} color={theme.mutedForeground} />
                  <TextInput 
                    placeholder="••••••••" 
                    placeholderTextColor={theme.mutedForeground}
                    secureTextEntry={!showPassword}
                    style={[styles.fieldInput, { color: theme.text }]}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} color={theme.mutedForeground} /> : <Eye size={18} color={theme.mutedForeground} />}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity 
              activeOpacity={0.9}
              onPress={handleRegister}
              style={styles.submitMargin}
            >
              <LinearGradient
                colors={[theme.primary, theme.primaryHover]}
                style={[styles.submitBtn, styles.submitShadow]}
              >
                <ThemedText style={styles.submitBtnText}>ĐĂNG KÝ NGAY</ThemedText>
                <ChevronRight size={20} color="#FFF" />
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.bottomLinkBox}>
               <ThemedText style={[styles.notYetText, { color: theme.muted }]}>Đã có tài khoản? </ThemedText>
               <Link href="/(auth)/login">
                 <ThemedText style={[styles.signUpLinkText, { color: theme.primary }]}>ĐĂNG NHẬP</ThemedText>
               </Link>
            </View>

            <View style={styles.safeBadgeBox}>
              <View style={[styles.safeBadge, { backgroundColor: theme.success + "10" }]}>
                <ShieldCheck size={14} color={theme.success} />
                <ThemedText style={[styles.safeBadgeText, { color: theme.success }]}>
                  THÔNG TIN CỦA BẠN ĐƯỢC BẢO MẬT
                </ThemedText>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerArea: {
    height: height * 0.36,
    paddingHorizontal: Spacing[6],
    justifyContent: "center",
    overflow: "hidden",
  },
  headerLevel: {
    marginTop: -20,
    gap: Spacing[1],
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: Spacing[1],
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFF",
    fontFamily: FontFamily.serif,
    lineHeight: 36,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
    fontWeight: "500",
    lineHeight: 20,
    maxWidth: "85%",
  },
  contentCard: {
    flex: 1,
    marginTop: -25,
    borderTopLeftRadius: Radius["2xl"],
    borderTopRightRadius: Radius["2xl"],
    paddingTop: Spacing[5],
  },
  formPadding: {
    paddingHorizontal: Spacing[6],
  },
  socialRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: Spacing[3],
  },
  socialButton: {
    flex: 1,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderRadius: Radius.lg,
    backgroundColor: "#FFF",
    gap: 10,
  },
  socialText: {
    fontSize: 14,
    fontWeight: "700",
  },
  dividerBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: Spacing[3],
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },
  inputsWrapper: {
    gap: 10,
  },
  inputItem: {
    gap: 4,
  },
  inputTag: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    borderWidth: 1.5,
    borderRadius: Radius.lg,
    paddingHorizontal: 16,
    gap: 10,
  },
  fieldInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: FontFamily.sans,
  },
  submitMargin: {
    marginTop: Spacing[5],
  },
  submitBtn: {
    height: 52,
    borderRadius: Radius.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  submitBtnText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  submitShadow: {
    shadowColor: "#006FEE",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  bottomLinkBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Spacing[4],
    alignItems: "center",
  },
  notYetText: {
    fontSize: 13,
    fontWeight: "500",
  },
  signUpLinkText: {
    fontSize: 13,
    fontWeight: "900",
  },
  safeBadgeBox: {
    alignItems: "center",
    marginTop: Spacing[4],
  },
  safeBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: Radius.full,
    gap: 8,
  },
  safeBadgeText: {
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
});
