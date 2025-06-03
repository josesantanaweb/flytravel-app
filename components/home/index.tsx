import { useRouter } from "expo-router";
import React from "react";
import { Image, Platform, Pressable, ScrollView, Text, View } from "react-native";
import Offer from "../offers/Offer";
import FormHome from "./FormHome";

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
    price: 523,
    city: "Roma",
  },
];

const Home = () => {
  const router = useRouter();

  const handleRedirect = (option: any) => router.push(option);

  return (
    <ScrollView style={{ marginTop: Platform.OS === "android" ? 60 : 0 }}>
      <View className="w-full h-[400px] justify-center items-center overflow-hidden">
        <Image
          source={require("@/assets/images/home.png")}
          className="object-cover w-full h-[70%]"
          resizeMode="cover"
        />
      </View>
      <View className="bg-orange-500 w-full h-[200px] rounded-t-[30px] -mt-24 p-5">
        <View className="flex flex-row items-center justify-between">
          <Pressable
            className="flex items-center gap-2"
           onPress={() => handleRedirect("/(tabs)/offers")}
          >
            <View
              style={{
                shadowColor: "#fff",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 8,
                elevation: 8,
              }}
              className="flex items-center justify-center w-[64px] h-[64px] bg-white rounded-full"
            >
              <Image
                source={require("@/assets/images/fly.png")}
                className="w-[28px] h-[28px]"
              />
            </View>
            <Text className="mb-3 text-xs text-white">Vuelos</Text>
          </Pressable>
          <Pressable
            className="flex items-center gap-2"
            onPress={() => handleRedirect("/(tabs)/getaways")}
          >
            <View
              style={{
                shadowColor: "#fff",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 8,
                elevation: 8,
              }}
              className="flex items-center justify-center w-[64px] h-[64px] bg-white rounded-full"
            >
              <Image
                source={require("@/assets/images/geteways-icon-active.png")}
                className="w-[28px] h-[28px]"
              />
            </View>
            <Text className="mb-3 text-xs text-white">Escapadas</Text>
          </Pressable>
          <Pressable
            className="flex items-center gap-2"
            onPress={() => handleRedirect("/(tabs)/offers")}
          >
            <View
              style={{
                shadowColor: "#fff",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 8,
                elevation: 8,
              }}
              className="flex items-center justify-center w-[64px] h-[64px] bg-white rounded-full"
            >
              <Image
                source={require("@/assets/images/offers-icon-active.png")}
                className="w-[28px] h-[30px]"
              />
            </View>
            <Text className="mb-3 text-xs text-white">Ofertas</Text>
          </Pressable>
          <Pressable
            className="flex items-center gap-2"
            onPress={() => handleRedirect("/(tabs)/my-account")}
          >
            <View
              style={{
                shadowColor: "#fff",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 8,
                elevation: 8,
              }}
              className="flex items-center justify-center w-[64px] h-[64px] bg-white rounded-full"
            >
              <Image
                source={require("@/assets/images/account-icon-active.png")}
                className="w-[28px] h-[28px]"
              />
            </View>
            <Text className="mb-3 text-xs text-white">Mi Cuenta</Text>
          </Pressable>
        </View>
      </View>
      <View className="relative px-5 py-5 -mt-24 bg-white rounded-t-[30px]">
        <FormHome />
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Ofertas de la semana
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

export default Home;
