import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RestaurantScreen from "./src/components/features/screen/restaurant.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    margin: 10,
  },
});
