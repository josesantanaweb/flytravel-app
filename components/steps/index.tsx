import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Dots from "./Dots";

const STEPS = [
  {
    title: "Aca podrás encontrar vuelos a excelentes precios",
    description:
      "Verás las mejores sugerencias y las mejores ofertas a tus destinos",
    image: require("@/assets/images/ticket.png"),
    width: 195,
    height: 157,
  },
  {
    title: "Entérate de nuestras escapadas de fin de semana",
    description: "Disfruta de nuestras ofertas a los destinos que más deseas",
    image: require("@/assets/images/beach.png"),
    width: 173,
    height: 152,
  },
  {
    title: "Tenemos un chat donde puedes dejar tus dudas y solicitudes",
    description:
      "Contácta de manera rápida y directa a uno de nuestras agentes para procesar tu solicitud",
    image: require("@/assets/images/touch.png"),
    width: 129,
    height: 157,
  },
  {
    title: "¿Quieres estar enterado de todo?",
    description:
      "Activa las notificaciones para recibir avisos instantaneos sobre ofertas o cambios en tus viajes",
    image: require("@/assets/images/hand.png"),
    width: 127,
    height: 166,
  },
];

const { width } = Dimensions.get("window");

const Steps = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleRedirect = () => {
    router.push("/(tabs)/offers");
  };

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setStep(index);
  };

  return (
    <View className="relative flex-1">
      <Image
        source={require("@/assets/images/bg.png")}
        className="absolute z-0 w-full h-full"
      />
      <View className="z-10 h-screen">
        <FlatList
          data={STEPS}
          ref={flatListRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{ width, paddingHorizontal: 40 }}
              className="flex items-center justify-center h-screen"
            >
              <Image
                source={require("@/assets/images/logo.png")}
                className="w-[95px] h-[100px] mb-14"
              />
              <Image
                source={item.image}
                style={{
                  width: item.width,
                  height: item.height,
                  marginBottom: 40,
                }}
              />
              <Text className="mb-6 text-xl font-semibold text-center text-white max-w-80">
                {item.title}
              </Text>
              <Text className="text-sm text-center text-white mb-14 max-w-[300px]">
                {item.description}
              </Text>
              <Dots
                step={step}
                setStep={(newStep) => {
                  setStep(newStep);
                  flatListRef.current?.scrollToIndex({ index: newStep });
                }}
              />
              {step === STEPS.length - 1 ? (
                <TouchableOpacity
                  onPress={handleRedirect}
                  className="flex items-center justify-center w-full mt-6 bg-orange-500 rounded-full h-14"
                >
                  <Text className="text-base text-white">Empezar</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Steps;
