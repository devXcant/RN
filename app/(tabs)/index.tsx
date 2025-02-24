import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RestaurantScreen from "../src/components/features/screen/restaurant.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/infrastructure/theme";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";

export default function Index() {
  let [montserratLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const [restaurantScreen, setRestaurantScreen] = useState([
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
    { name: 11 },
    { name: 12 },
    { name: 13 },
    { name: 14 },
  ]);

  if (!montserratLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen
        restaurantScreen={restaurantScreen}
        setRestaurantScreen={setRestaurantScreen}
      />
    </ThemeProvider>
  );
}
