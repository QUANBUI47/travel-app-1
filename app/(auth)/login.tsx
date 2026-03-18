import React from "react";
import { 
  StyleSheet, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Mail, Lock, ArrowRight, Github } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require("@/assets/images/auth-bg.png")}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inner}
        >
          <View style={styles.header}>
            <ThemedText type="title" style={styles.title}>Vivu Travel</ThemedText>
            <ThemedText style={styles.subtitle}>Khám phá Việt Nam theo cách của bạn</ThemedText>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Mail size={20} color="#FFF" style={styles.icon} />
              <TextInput 
                placeholder="Email của bạn" 
                placeholderTextColor="rgba(255,255,255,0.7)"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Lock size={20} color="#FFF" style={styles.icon} />
              <TextInput 
                placeholder="Mật khẩu" 
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry
                style={styles.input}
              />
            </View>

            <TouchableOpacity style={styles.forgotBtn}>
              <ThemedText style={styles.forgotText}>Quên mật khẩu?</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.loginBtn}
              onPress={() => router.replace("/(tabs)")}
            >
              <ThemedText style={styles.loginBtnText}>Đăng nhập</ThemedText>
              <ArrowRight size={20} color="#006FEE" />
            </TouchableOpacity>

            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <ThemedText style={styles.dividerText}>Hoặc đăng nhập với</ThemedText>
              <View style={styles.divider} />
            </View>

            <View style={styles.socialRow}>
               <TouchableOpacity style={styles.socialBtn}>
                  <Github size={24} color="#FFF" />
               </TouchableOpacity>
            </View>

            <View style={styles.footer}>
               <ThemedText style={styles.footerText}>Chưa có tài khoản? </ThemedText>
               <Link href="/(auth)/register">
                 <ThemedText style={styles.linkText}>Đăng ký ngay</ThemedText>
               </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 42,
    color: "#FFF",
    fontWeight: "900",
    textAlign: "center",
  },
  subtitle: {
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    height: 60,
    borderRadius: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
  },
  forgotBtn: {
    alignSelf: "flex-end",
  },
  forgotText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: "#FFF",
    height: 60,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },
  loginBtnText: {
    color: "#006FEE",
    fontSize: 18,
    fontWeight: "800",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  dividerText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    color: "rgba(255,255,255,0.8)",
  },
  linkText: {
    color: "#FFF",
    fontWeight: "800",
  },
});
