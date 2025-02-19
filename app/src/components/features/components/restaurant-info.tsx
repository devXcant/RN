import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/svg/star.js";
import open from "../../../../../assets/svg/open.js";
import React from "react";

const Title = styled(Text)`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.body};
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.ui.success};
`;

const Address = styled(Text)`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.body};
  font-weight: 700;
`;

const Info = styled(View)`
  padding: ${(props: any) => props.theme.space[3]};
`;

const Rating = styled(View)`
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
  display: flex;
  flex-direction: row;
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

interface Restaurant {
  name: string;
  icon: string;
  photos: ImageSourcePropType[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

interface RestaurantInfoCardProps {
  restaurant?: Restaurant;
}

const defaultRestaurant: Restaurant = {
  name: "Some Restaurant",
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos: [
    require("../../../../../assets/images/restaurant1.jpg"),
    require("../../../../../assets/images/restaurant2.jpg"),
    require("../../../../../assets/images/restaurant3.jpg"),
  ],
  address: "123 Random Street",
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: true,
};

const RestaurantInfoCard: React.FC<RestaurantInfoCardProps> = ({
  restaurant = defaultRestaurant
}) => {
  if (!restaurant) {
    return null;
  }

  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  const photoSource =
    photos.length > 0 && photos[0]
      ? photos[0]
      : require("../../../../../assets/images/restaurant1.jpg");

  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.cover} source={photoSource} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text>CLOSED TEMPORARILY</Text>}
            <View style={{ marginLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={16} height={16} />}
            <View style={{ marginLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 16,
  },
  cover: {
    backgroundColor: "white",
  },
});

export default RestaurantInfoCard;
