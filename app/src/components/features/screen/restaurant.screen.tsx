import React, { useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info";

interface RestaurantScreenProps {
  restaurantScreen: any[];
  setRestaurantScreen: (restaurants: any[]) => void;
}

const RestaurantScreen: React.FC<RestaurantScreenProps> = ({ restaurantScreen, setRestaurantScreen }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={styles.main}>
      <View style={{ backgroundColor: "inherit" }}>
        <Searchbar
          placeholder="Search here..."
          onChangeText={(e) => setSearchText(e)}
          value={searchText}
          style={{ backgroundColor: "white", fontFamily: "Montserrat" }}
        />
      </View>
      <View>
        <FlatList
          data={restaurantScreen}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name.toString()}
          contentContainerStyle={{ padding: 1 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 20,
    margin: 10,
  },
});

export default RestaurantScreen;
