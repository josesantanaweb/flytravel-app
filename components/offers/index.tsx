import React from "react";
import { Image, Platform, ScrollView, Text, View } from "react-native";
import FormOffer from "./FormOffer";
import Offer from "./Offer";

const OFFERS = [
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/madrid.png",
    destination: "Caracas / Madrid",
    price: 906,
    city: "Madrid",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/malaga.png",
    destination: "Caracas / Málaga",
    price: 890,
    city: "Málaga",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/oporto.png",
    destination: "Caracas / Oporto",
    price: 970,
    city: "Oporto",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/tenerife.jpg",
    destination: "Caracas / Tenerife",
    price: 890,
    city: "Tenerife",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/valencia.png",
    destination: "Caracas / Valencia",
    price: 232,
    city: "Valencia",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/lisboa.jpg",
    destination: "Caracas / Lisboa",
    price: 450,
    city: "Lisboa",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/madrid.png",
    destination: "Caracas / Madrid",
    price: 234,
    city: "Madrid",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/munich.jpg",
    destination: "Caracas / Munich",
    price: 678,
    city: "Munich",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/berlin.png",
    destination: "Caracas / Berlín",
    price: 786,
    city: "Berlín",
  },
  {
    image: "https://my-person-bucket.s3.us-east-2.amazonaws.com/roma.jpg",
    destination: "Caracas / Roma",
    price: 123,
    city: "Roma",
  },
];

const Offers = () => {
  return (
    <ScrollView style={{ marginTop: Platform.OS === "android" ? 60 : 0 }}>
      <View className="w-full h-[400px] justify-center items-center overflow-hidden">
        <Image
          source={require("@/assets/images/offers-bg.png")}
          className="object-cover w-full h-[70%]"
          resizeMode="cover"
        />
      </View>
      <View className="relative px-5 py-8 -mt-24 bg-white rounded-t-[30px]">
        <Image
          source={require("@/assets/images/summer-2.png")}
          className="w-[77px] h-[164px] absolute -top-[120px] right-10"
        />
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Formulario de viaje
        </Text>
        <Text className="mb-3 text-sm text-gray-400">
          Para organizar las mejores vacaciones necesitamos que nos suministres
          los siguientes datos:
        </Text>
        <FormOffer />
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Destinos
        </Text>
        <View className="flex flex-row flex-wrap justify-between">
          {OFFERS.map((offer, index) => (
            <View key={index} style={{ width: "48%", marginBottom: 16 }}>
              <Offer offer={offer} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Offers;
