import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
  padding: ${(props:any) => props.theme.space[3]};
  font-size: 20px;
  font-weight: bold;
  color: ${(props:any) => props.theme.colors.ui.success};
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      require("../../../../../assets/images/restaurant1.jpg"),
      require("../../../../../assets/images/restaurant2.jpg"),
      require("../../../../../assets/images/restaurant3.jpg"),
    ],
    address = "123 Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  // Use the first photo if available; otherwise, fallback to a default image
  const photoSource =
    photos.length > 0 && photos[0]
      ? photos[0]
      : require("../../../../../assets/images/restaurant1.jpg");

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.cover} source={photoSource} />
      <Title>{name}</Title>
    </Card>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 16,
  },
  cover: {
    backgroundColor: "white",
  },
});
