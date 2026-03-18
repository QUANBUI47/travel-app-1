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
import { User, Mail, Lock, ArrowRight } from "lucide-react-native";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { BrandLogo } from "@/components/brand-logo";

export default function RegisterScreen() {
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
            <View style={{ alignItems: "center", marginBottom: 20 }}>
              <BrandLogo size={80} />
            </View>
            <ThemedText type="title" style={styles.title}>Bắt đầu ngay</ThemedText>
            <ThemedText style={styles.subtitle}>Tham gia cộng đồng Vivu Travel</ThemedText>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <User size={20} color="#FFF" style={styles.icon} />
              <TextInput 
                placeholder="Họ và tên" 
                placeholderTextColor="rgba(255,255,255,0.7)"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Mail size={20} color="#FFF" style={styles.icon} />
              <TextInput 
                placeholder="Email" 
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

            <TouchableOpacity style={styles.registerBtn}>
              <ThemedText style={styles.registerBtnText}>Tạo tài khoản</ThemedText>
              <ArrowRight size={20} color="#FFF" />
            </TouchableOpacity>

            <View style={styles.footer}>
               <ThemedText style={styles.footerText}>Đã có tài khoản? </ThemedText>
               <Link href="/(auth)/login">
                 <ThemedText style={styles.linkText}>Đăng nhập</ThemedText>
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
    backgroundColor: "rgba(0,0,0,0.5)",
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
    fontSize: 36,
    color: "#FFF",
    fontWeight: "900",
    textAlign: "center",
  },
  subtitle: {
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    marginTop: 10,
  },
  form: {
    gap: 15,
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
  registerBtn: {
    backgroundColor: "#006FEE",
    height: 60,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
  },
  registerBtnText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "800",
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
