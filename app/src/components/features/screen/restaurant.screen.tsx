import React, { useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const RestaurantScreen = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView style={styles.main}>
      <View style={{backgroundColor: 'inherit'}}>
        <Searchbar
          placeholder="search here..."
          onChangeText={(e) => {
            setSearchText(e);
          }}
          value={searchText}
          style={{backgroundColor: 'white', fontFamily: 'Montserrat'}}
        />
      </View>
      <View>
        <FlatList data={[{name:1}, {name:2},{name:3},{name:4},{name:5},{name:6},{name:7},{name:8},{name:9},{name:10},{name:11},{name:12},{name:13},{name:14}] } renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 1 }}

          

        />

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
