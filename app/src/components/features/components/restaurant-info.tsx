import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "/assets/images/restaurant1.jpg",
      "/assets/images/restaurant2.jpg",
      "/assets/images/restaurant3.jpg",
    ],
    address = "123 Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const Title = styled.text`
    padding: 16px;
    fontsize: 20;
    fontweight: "bold";
  `;

  // Use a placeholder image if no valid photo is available
  const photoUri =
    photos.length > 0 && photos[0]
      ? photos[0]
      : "/assets/images/restaurant1.jpg";

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.cover} source={{ uri: photoUri }} />
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
  title: {
    padding: 16,
  },
});
