import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function Index() {
  const [searchText, setSearchText] = useState()
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Searchbar placeholder='search here...' onChangeText={(e) => {
        e.target.setSearchText
        e.preventDefault()
      }} value={searchText} />
      <Text>Start</Text>
    </SafeAreaView>
  );
}
