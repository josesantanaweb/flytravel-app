import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "#e9e9e9",
            borderTopWidth: 0,
          },
          default: {
            borderTopWidth: 0,
            backgroundColor: "#e9e9e9",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/search-icon-active.png")
                  : require("@/assets/images/search-icon.png")
              }
              style={{ width: 20, height: 20, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="getaways"
        options={{
          title: "Escapadas",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/geteways-icon-active.png")
                  : require("@/assets/images/geteways-icon.png")
              }
              style={{ width: 20, height: 20, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: "Ofertas",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/offers-icon-active.png")
                  : require("@/assets/images/offers-icon.png")
              }
              style={{ width: 20, height: 20, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-account"
        options={{
          title: "Mi cuenta",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/account-icon-active.png")
                  : require("@/assets/images/account-icon.png")
              }
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
