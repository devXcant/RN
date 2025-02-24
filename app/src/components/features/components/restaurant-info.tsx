import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/svg/star.js";
import open from "../../../../../assets/svg/open.js";

interface Restaurant {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

interface RestaurantInfoCardProps {
  restaurant: Restaurant;
}

const RestaurantInfoCard: React.FC<RestaurantInfoCardProps> = ({
  restaurant,
}) => {
  if (!restaurant) {
    return null;
  }

  const {
    name,
    icon,
    photos = [],
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const photoSource =
    photos.length > 0 && photos[0]
      ? photos[0]
      : require("../../../../../assets/images/restaurant1.jpg");

  // Ensure rating is a valid number and within expected range
  // Ensure rating is a valid number and within expected range
const validRating = Number.isFinite(Number(rating)) ? Math.max(0, Math.min(Math.ceil(Number(rating)), 5)) : 0;
const ratingArray = Array.from({ length: validRating });


  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.cover} source={photoSource} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>
            {isClosedTemporarily ? "CLOSED TEMPORARILY" : isOpenNow ? "OPEN NOW" : "CLOSED"}
          </Text>
          <View style={styles.ratingContainer}>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
            <Text style={styles.rating}>Rating: {rating}</Text>
          </View>
          {isOpenNow && <SvgXml xml={open} width={16} height={16} />}
          <Image style={styles.icon} source={{ uri: icon }} />
        </View>
      </View>
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
  info: {
    padding: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  address: {
    fontSize: 14,
    color: "gray",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    fontSize: 14,
    // color: isOpenNow ? "green" : "red",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
});

export default RestaurantInfoCard;
