import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RestaurantScreen from "./src/components/features/screen/restaurant.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";

// import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function Index() {
  let [montserratLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!montserratLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen />
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   main: {
//     padding: 20,
//     margin: 10,
//   },
// });
