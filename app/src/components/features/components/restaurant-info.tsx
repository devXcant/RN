import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native"; // Use native version for React Native
import { SvgXml } from "react-native-svg";

// SVG star as XML string
const starSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H15.4329C16.4016 6.90983 16.8044 8.14946 16.0207 8.71885L13.2205 10.7533C12.87 11.0079 12.7234 11.4593 12.8572 11.8713L13.9268 15.1631C14.2261 16.0844 13.1717 16.8505 12.388 16.2812L9.58778 14.2467C9.2373 13.9921 8.7627 13.9921 8.41221 14.2467L5.61204 16.2812C4.82833 16.8505 3.77385 16.0844 4.0732 15.1631L5.14277 11.8713C5.27665 11.4593 5.12999 11.0079 4.7795 10.7533L1.97933 8.71885C1.19562 8.14946 1.59839 6.90983 2.5671 6.90983H5.02832C5.46154 6.90983 5.8455 6.63087 5.97937 6.21885L7.04894 2.92705Z" fill="#FFD700"/>
</svg>`;

// Styled components with proper type definitions
const Title = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.body};
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.ui.success};
`;

const Address = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.body};
  font-weight: 800; /* Fixed from invalid 'extrabold' */
`;

const Info = styled.View`
  padding: ${(props: any) => props.theme.space[3]};
`;

const Rating = styled.View`
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
  flex-direction: row;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    photos = [
      require("../../../../../assets/images/restaurant1.jpg"),
      require("../../../../../assets/images/restaurant2.jpg"),
      require("../../../../../assets/images/restaurant3.jpg"),
    ],
    address = "123 Random Street",
    rating = 4,
  } = restaurant;

  // Create array of correct length
  const ratingArray = Array.from({ length: Math.ceil(rating) });

  const photoSource = photos[0] || require("../../../../../assets/images/restaurant1.jpg");

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.cover} source={photoSource} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml xml={starSvg} width={20} height={20} key={`star-${i}`} />
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
