import React, { createContext, ReactNode, useState } from "react";

interface RestaurantContextType {
  restaurantScreen: number[];
  setRestaurantScreen: React.Dispatch<React.SetStateAction<number[]>>;
}

// ✅ Provide a default value to avoid `null` issues
const defaultValue: RestaurantContextType = {
  restaurantScreen: [],
  setRestaurantScreen: () => {}, // Empty function as a placeholder
};

export const RestaurantContext = createContext<RestaurantContextType>(defaultValue);

interface RestaurantContextProviderProps {
  children: ReactNode;
}

export const RestaurantContextProvider: React.FC<RestaurantContextProviderProps> = ({ children }) => {
  const [restaurantScreen, setRestaurantScreen] = useState<number[]>([1, 2, 3]);

  return (
    <RestaurantContext.Provider value={{ restaurantScreen, setRestaurantScreen }}>
      {children}
    </RestaurantContext.Provider>
  );
};
