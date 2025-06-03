import React from "react";
import { Image, Platform, ScrollView, Text, View } from "react-native";
import FormGetaway from "./FormGateway";
import Getaway from "./Getaway";

const GETAWAYS = [
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/los-roques.jpg",
    destination: "Caracas / Los Roques",
    price: 906,
    city: "Los Roques",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/margarita.jpg",
    destination: "Caracas / Margarita",
    price: 890,
    city: "Margarita",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/canaima.jpg",
    destination: "Caracas / Canaima",
    price: 970,
    city: "Canaima",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/mochima.jpg",
    destination: "Caracas / Mochima",
    price: 890,
    city: "Mochima",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/cartagena.jpg",
    destination: "Caracas / Cartagena",
    price: 232,
    city: "Cartagena",
  },
];

const Getaways = () => {
  return (
    <ScrollView style={{ marginTop: Platform.OS === "android" ? 60 : 0 }}>
      <View className="w-full h-[400px] justify-center items-center overflow-hidden">
        <Image
          source={require("@/assets/images/getaways.png")}
          className="object-cover w-full h-[70%]"
          resizeMode="cover"
        />
      </View>
      <View className="relative px-5 py-8 -mt-24 bg-white rounded-t-[30px]">
        <Image
          source={require("@/assets/images/summer.png")}
          className="w-[77px] h-[164px] absolute -top-[120px] right-10"
        />
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Formulario de viaje
        </Text>
        <Text className="mb-3 text-sm text-gray-400">
          Para organizar las mejores vacaciones necesitamos que nos suministres
          los siguientes datos:
        </Text>
        <FormGetaway />
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Destinos
        </Text>
        <View className="relative items-center flex-1 gap-4 mb-20">
          {GETAWAYS.map((offer, index) => (
            <Getaway getaway={offer} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Getaways;

// agregar un boton de destinos para ofertas y escapadas
