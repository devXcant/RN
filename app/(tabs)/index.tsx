import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RestaurantScreen from "../src/components/features/screen/restaurant.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/infrastructure/theme";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";

const restaurantNames = [
  "Zuni Café",
  "Hayes Street Grill",
  "M Burger",
  "The Cheesecake Factory",
  "Olive Garden",
  "Chipotle Mexican Grill",
  "Panda Express",
  "In-N-Out Burger",
  "Shake Shack",
  "Red Lobster",
  "Buffalo Wild Wings",
  "Chick-fil-A",
  "Panera Bread",
  "TGI Fridays",
  "Applebee's",
  "Outback Steakhouse",
  "Texas Roadhouse",
  "Cracker Barrel",
  "Denny's",
  "IHOP",
];

export default function Index() {
  let [montserratLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const [restaurantScreen, setRestaurantScreen] = useState(
    restaurantNames.map((name) => ({
      name,
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      photos: [
        require("../../assets/images/restaurant1.jpg"),
        require("../../assets/images/restaurant2.jpg"),
        require("../../assets/images/restaurant3.jpg"),
      ],
      address: `${name} Address`, // Placeholder address
      isOpenNow: Math.random() < 0.5, // Randomly set open status
      rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
      isClosedTemporarily: Math.random() < 0.3, // Randomly set closed status
    }))
  );

  if (!montserratLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen
        restaurantScreen={restaurantScreen}
      />
    </ThemeProvider>
  );
}
