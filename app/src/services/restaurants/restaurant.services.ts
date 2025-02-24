import camelize from "camelize-ts";
import { mocks } from "./mock";


const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
  console.log(mocks);
};

const restaurantTransform = ({ result = [] }) => {
    const mappedResults = result.map((restaurant: any) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isCloasedTemporarily: restaurant.business_status === ' CLOSED RESTAURANT'
        }
    })

  return camelize(mappedResults);
};

restaurantRequest()
  .then(restaurantTransform)
  .then((transformedResponse: any) => {
    console.log(transformedResponse);
  })
  .catch((err: any) => {
    console.log("error");
  });
