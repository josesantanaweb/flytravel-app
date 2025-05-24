import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

interface IGetaway {
  image: string;
  destination: string;
  price: number;
  city: string;
}

interface GetawayProps {
  getaway: IGetaway;
}

const Getaway = ({ getaway }: GetawayProps) => {
  return (
    <View className="flex flex-row w-full overflow-hidden bg-white rounded-2xl"
      style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 5 }}>
      <View className="w-[200px] p-3 relative">
        <Image
          source={getaway.image}
          contentFit="cover"
          className="w-full h-[160px] rounded-xl"
        />
        <View className="absolute flex fle left-[50%] translate-x-[-50%] w-[105px] flex-row items-center gap-2 px-2 py-1 bg-orange-500 bottom-3">
          <Text className="text-[10px] text-white">4 Dias / 4 Noches</Text>
        </View>
      </View>
      <View className="flex items-start justify-start h-full gap-1 px-3 py-3">
        <Text className="text-base font-semibold text-blue-950">
          Paquete a {getaway.city}
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
          <Text className="text-xs text-gray-400">Precio por persona</Text>
          <Text className="text-xl font-bold text-blue-950">
            US$ {getaway.price}
          </Text>
          <Text className="text-[10px] text-gray-400 max-w-[220px]">
            Incluye impuestos tasas y cargos, excepto el IVA del alojamiento
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Getaway;
