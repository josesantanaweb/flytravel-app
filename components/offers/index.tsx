import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Offer from "./Offer";

const OFFERS = [
  {
   image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/madrid.png",
    destination: "Caracas / Madrid",
    price: 906,
    city: "Madrid",
  },
  {
    image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/malaga.png",
    destination: "Caracas / Málaga",
    price: 890,
    city: "Málaga",
  },
  {
    image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/oporto.png",
    destination: "Caracas / Oporto",
    price: 970,
    city: "Oporto",
  },
  {
    image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/tenerife.jpg",
    destination: "Caracas / Tenerife",
    price: 890,
    city: "Tenerife",
  },
  {
    image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/valencia.png",
    destination: "Caracas / Valencia",
    price: 232,
    city: "Valencia",
  },
  {
    image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/lisboa.jpg",
    destination: "Caracas / Lisboa",
    price: 450,
    city: "Lisboa",
  },
  {
    image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/madrid.png",
    destination: "Caracas / Madrid",
    price: 234,
    city: "Madrid",
  },
  {
    image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/munich.jpg",
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
    image:
      "https://my-person-bucket.s3.us-east-2.amazonaws.com/roma.jpg",
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
          className="w-full h-[340px]"
        />
      </View>
      <View className="relative p-5 bg-white -mt-14 rounded-t-3xl">
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Destinos
        </Text>
        <View className="relative flex flex-row flex-wrap items-center gap-4">
          {OFFERS.map((offer, index) => (
            <Offer offer={offer} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Offers;
