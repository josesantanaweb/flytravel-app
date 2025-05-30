import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Image, Text, View } from "react-native";

interface IOffer {
  image: string;
    destination: string;
    price: number;
    city: string;
}

interface OfferProps {
  offer: IOffer;
}

const Offer = ({ offer }: OfferProps) => {
  return (
    <View className="flex w-[190px] h-[360px] bg-white rounded-2xl"
      style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 5 }}>
      <View className="w-full">
        <Image
          source={{ uri: offer.image }}
          className="w-full h-[180px] rounded-t-lg"
        />
        <View className="absolute left-0 flex flex-row items-center gap-2 px-2 py-1 bg-orange-500 top-5">
          {/* <FontAwesome5 name="map-marker-alt" size={8} color="#FFFFFF" /> */}
          <Text className="text-[10px] text-white">{offer.destination}</Text>
        </View>
      </View>
      <View className="flex items-start justify-start h-full gap-1 px-3 py-3">
        <Text className="text-base font-semibold text-blue-950">
          Vuelo a {offer.city}
        </Text>
        <View className="flex flex-row gap-1">
          <FontAwesome name="star" size={12} color="#FF9800" />
          <FontAwesome name="star" size={12} color="#FF9800" />
          <FontAwesome name="star" size={12} color="#FF9800" />
          <FontAwesome name="star" size={12} color="#FF9800" />
        </View>
        <Text className="text-[10px] text-gray-400 mb-1">
          Partiendo desde Caracas Vuelo + Hotel
        </Text>
        <Text className="w-[105px] px-3 py-1 text-[10px] text-white rounded-full bg-blue-950">
          Oferta Imbatible
        </Text>
        <View className="flex">
          <Text className="text-xs text-gray-400">A partir de</Text>
          <Text className="text-xl font-bold text-blue-950">
            US$ {offer.price}
          </Text>
          <Text className="text-[10px] text-gray-400">
            Incluye impuestos tasas y cargos, excepto el IVA del alojamiento
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Offer;
