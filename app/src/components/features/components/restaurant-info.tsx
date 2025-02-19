import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/svg/star.js";

const Title = styled(Text)`
  font-family: ${(props: any) => props.theme.fonts.body};

  font-size: ${(props: any) => props.theme.fontSizes.body};
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.ui.success};
`;

const Address = styled(Text)`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.body};
  font-weight: extrabold;
`;

const Info = styled(View)`
  padding: ${(props: any) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex: row;
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
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

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  // Use the first photo if available; otherwise, fallback to a default image
  const photoSource =
    photos.length > 0 && photos[0]
      ? photos[0]
      : require("../../../../../assets/images/restaurant1.jpg");

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.cover} source={photoSource} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
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
