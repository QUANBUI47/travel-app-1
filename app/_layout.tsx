import { useEffect } from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  BeVietnamPro_300Light,
  BeVietnamPro_400Regular,
  BeVietnamPro_500Medium,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_700Bold,
  BeVietnamPro_800ExtraBold,
  BeVietnamPro_900Black,
} from "@expo-google-fonts/be-vietnam-pro";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { useAuthStore } from "@/stores/auth-store";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const router = useRouter();
  
  const { user, isLoading, setLoading } = useAuthStore();

  // Be Vietnam Pro unified — đồng bộ với travel-web. Designer Việt, optimize
  // 100% cho dấu tiếng Việt. Key "BeVietnamPro" base + weight suffix.
  const [fontsLoaded] = useFonts({
    "BeVietnamPro-Light": BeVietnamPro_300Light,
    BeVietnamPro: BeVietnamPro_400Regular,
    "BeVietnamPro-Medium": BeVietnamPro_500Medium,
    "BeVietnamPro-SemiBold": BeVietnamPro_600SemiBold,
    "BeVietnamPro-Bold": BeVietnamPro_700Bold,
    "BeVietnamPro-ExtraBold": BeVietnamPro_800ExtraBold,
    "BeVietnamPro-Black": BeVietnamPro_900Black,
  });

  // Simulate auth check on mount
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 500); // 500ms mock load time
    }
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (!fontsLoaded || isLoading) return;

    // Wait until fonts are loaded and auth check is done to hide splash screen
    SplashScreen.hideAsync();

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      // Redirect to the sign-in page
      router.replace("/(auth)/login");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page to home
      router.replace("/(tabs)");
    }
  }, [user, segments, fontsLoaded, isLoading, router]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false, animation: "fade" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: "fade" }} />
        <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
