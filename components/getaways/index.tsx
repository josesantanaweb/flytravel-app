import { Image } from "expo-image";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Getaway from "./Getaway";

const GETAWAYS = [
  {
    image: require("@/assets/images/los-roques.jpg"),
    destination: "Caracas / Los Roques",
    price: 906,
    city: "Los Roques",
  },
  {
    image: require("@/assets/images/margarita.jpg"),
    destination: "Caracas / Margarita",
    price: 890,
    city: "Margarita",
  },
  {
    image: require("@/assets/images/canaima.jpg"),
    destination: "Caracas / Canaima",
    price: 970,
    city: "Canaima",
  },
  {
    image: require("@/assets/images/mochima.jpg"),
    destination: "Caracas / Mochima",
    price: 890,
    city: "Mochima",
  },
  {
    image: require("@/assets/images/cartagena.jpg"),
    destination: "Caracas / Cartagena",
    price: 232,
    city: "Cartagena",
  }
];

const Getaways = () => {
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={require("@/assets/images/getaways.png")}
          contentFit="cover"
          className="w-full h-[340px]"
        />
      </View>
      <View className="relative p-5 overflow-hidden bg-white -mt-14 rounded-t-3xl">
         <Image
          source={require("@/assets/images/bg-figure.png")}
          contentFit="cover"
          className="absolute top-[-440px] w-[210px] h-[1300px] left-[280px]"
        />
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Destinos
        </Text>
        <View className="relative items-center flex-1 gap-4 ">
          {GETAWAYS.map((offer, index) => (
            <Getaway getaway={offer} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Getaways;
