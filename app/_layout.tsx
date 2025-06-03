import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isSteps, setIsSteps] = useState<boolean | null>(null);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const value = await AsyncStorage.getItem("stepsSeen");
        const userLoggedIn = value === "true";
        setIsSteps(userLoggedIn);
      } catch (error) {
        console.error("Error leyendo AsyncStorage:", error);
        setIsSteps(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isSteps === null) return;

    if (!isSteps) {
      router.replace("/steps");
    }
  }, [isSteps]);


  if (!loaded || isSteps === null) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="login" />
        <Stack.Screen name="steps" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
