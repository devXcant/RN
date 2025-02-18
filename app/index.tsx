import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RestaurantScreen from "./src/components/features/screen/restaurant.screen";

export default function Index() {
  return (<RestaurantScreen />
    
)}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    margin: 10,
  },
});
