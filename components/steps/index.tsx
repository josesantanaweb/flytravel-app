import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Dots from "./Dots";

const STEPS = [
  {
    title: "Aca podrás encontrar vuelos a excelentes precios",
    description:
      "Verás las mejores sugerencias y las mejores ofertas a tus destinos",
    image: require("@/assets/images/ticket.png"),
    width: 251,
    height: 202,
  },
  {
    title: "Entérate de nuestras escapadas de fin de semana",
    description: "Disfruta de nuestras ofertas a los destinos que más deseas",
    image: require("@/assets/images/beach.png"),
    width: 322,
    height: 282,
  },
  {
    title: "Tenemos un chat donde puedes dejar tus dudas y solicitudes",
    description:
      "Contácta de manera rápida y directa a uno de nuestras agentes para procesar tu solicitud",
    image: require("@/assets/images/touch.png"),
    width: 241,
    height: 294,
  },
  {
    title: "¿Quieres estar enterado de todo?",
    description:
      "Activa las notificaciones para recibir avisos instantaneos sobre ofertas o cambios en tus viajes",
    image: require("@/assets/images/hand.png"),
    width: 213,
    height: 278,
  },
];

const Steps = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <View className="relative flex-1">
      <Image
        source={require("@/assets/images/bg.png")}
        contentFit="cover"
        className="absolute z-0 w-full h-full"
      />
      <View className="z-10 h-screen px-10">
        <View className="flex items-center justify-center h-full">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-[95px] h-[100px] mb-14"
          />
          <Image
            source={STEPS[step].image}
            style={{
              width: STEPS[step].width,
              height: STEPS[step].height,
              marginBottom: 40,
            }}
          />
          <Text className="mb-6 text-xl text-center text-white max-w-80">
            {STEPS[step].title}
          </Text>
          <Text className="text-sm text-center text-white mb-14 max-w-[300px]">
            {STEPS[step].description}
          </Text>
          <Dots step={step} setStep={setStep} />
          {step < 3 && (
          <Pressable
            onPress={() =>
              setStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev))
            }
            className="flex flex-row items-center gap-3"
          >
            <Text className="text-base text-center text-orange-400">
              Seguir viendo
            </Text>
            <View className="w-6 h-6 bg-orange-500 rounded-full"></View>
          </Pressable>
           )}
          {step === 3 && (
            <TouchableOpacity className="flex items-center justify-center w-full text-base text-white bg-orange-500 rounded-full h-14">
              Activar las notificaciones
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Steps;
