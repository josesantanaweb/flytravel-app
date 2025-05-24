import { Image } from "expo-image";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Offer from "./Offer";

const OFFERS = [
  {
    image: require("@/assets/images/madrid.png"),
    destination: "Caracas / Madrid",
    price: 906,
    city: "Madrid",
  },
  {
    image: require("@/assets/images/malaga.png"),
    destination: "Caracas / Málaga",
    price: 890,
    city: "Málaga",
  },
  {
    image: require("@/assets/images/oporto.png"),
    destination: "Caracas / Oporto",
    price: 970,
    city: "Oporto",
  },
  {
    image: require("@/assets/images/tenerife.jpg"),
    destination: "Caracas / Tenerife",
    price: 890,
    city: "Tenerife",
  },
  {
    image: require("@/assets/images/valencia.png"),
    destination: "Caracas / Valencia",
    price: 232,
    city: "Valencia",
  },
  {
    image: require("@/assets/images/lisboa.jpg"),
    destination: "Caracas / Lisboa",
    price: 450,
    city: "Lisboa",
  },
  {
    image: require("@/assets/images/madrid.png"),
    destination: "Caracas / Madrid",
    price: 234,
    city: "Madrid",
  },
  {
    image: require("@/assets/images/munich.jpg"),
    destination: "Caracas / Munich",
    price: 678,
    city: "Munich",
  },
  {
    image: require("@/assets/images/berlin.png"),
    destination: "Caracas / Berlín",
    price: 786,
    city: "Berlín",
  },
  {
    image: require("@/assets/images/roma.jpg"),
    destination: "Caracas / Roma",
    price: 123,
    city: "Roma",
  },
];

const Offers = () => {
  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={require("@/assets/images/offers-bg.png")}
          contentFit="cover"
          className="w-full h-[340px]"
        />
      </View>
      <View className="relative p-5 overflow-hidden bg-white -mt-14 rounded-t-3xl">
        <Image
          source={require("@/assets/images/bg-figure.png")}
          contentFit="cover"
          className="absolute top-[-540px] w-[210px] h-[1500px] left-[280px]"
        />
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Destinos
        </Text>
        <View className="relative grid items-center flex-1 grid-cols-2 gap-4 ">
          {OFFERS.map((offer, index) => (
            <Offer offer={offer} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Offers;
