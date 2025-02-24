import camelize from "camelize-ts";
import { mocks } from "./mock";


export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
  console.log(mocks);
};

export const restaurantTransform = ({ result = [] }) => {
    const mappedResults = result.map((restaurant: any) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isCloasedTemporarily: restaurant.business_status === ' CLOSED_RESTAURANT'
        }
    })

  return camelize(mappedResults);
};


