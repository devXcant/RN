import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform } from "react-native";

import { useColorScheme } from "../hooks/useColorScheme.web";
import { HapticTab } from "@/app-example/components/HapticTab";
import BlurTabBarBackground from "@/app-example/components/ui/TabBarBackground.ios";
import { Colors } from "@/app-example/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: BlurTabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image src='/assets/svg/star.svg' width={28} height={28} alt='tab' />
          ),
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: "Maps",
          tabBarIcon: ({ color }) => (
            // <IconSymbol size={28} name="paperplane.fill" color={color} />
            <Image src='/assets/svg/star.svg' width={28} height={28} alt='tab' />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Image src='/assets/svg/star.svg' width={28} height={28} alt='tab'  />
          ),
        }}
      />
    </Tabs>
  );
}
