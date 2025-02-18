import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info";

const RestaurantScreen = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Searchbar
          placeholder="search here..."
          onChangeText={(e) => {
            setSearchText(e);
          }}
          value={searchText}
        />
      </View>
      <View>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    margin: 10,
  },
});
