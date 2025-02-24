import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";

import { useColorScheme } from "../hooks/useColorScheme.web";
import { HapticTab } from "@/app-example/components/HapticTab";
import BlurTabBarBackground from "@/app-example/components/ui/TabBarBackground.ios";
import { Colors } from "@/app-example/constants/Colors";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const color = {red: '#b3b4b5',
    green: '#fc122e',}

  return (
    <Tabs
  screenOptions={{
    // tabBarActiveTintColor: color.red,  // Active icon color
    tabBarInactiveTintColor: color.green, // Inactive icon color
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarStyle: Platform.select({
      ios: { position: "absolute" },
      default: {},
    }),
  }}
>

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: "Maps",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-maps" size={24} color={color} />

          ),

        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
