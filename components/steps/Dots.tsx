import React from "react";
import { Pressable, View } from "react-native";

interface DotsProps {
  setStep: (step: number) => void;
  step: number;
}

const Dots = ({ step, setStep }: DotsProps) => {
  return (
    <View className="flex flex-row items-center gap-3 mb-10">
      {Array.from({ length: 4 }).map((_, index) => (
        <Pressable
          key={index}
          onPress={() => setStep(index)}
          className={`w-3 h-3 rounded-full ${
            step === index ? "bg-white" : "bg-transparent border border-white"
          }`}
        ></Pressable>
      ))}
    </View>
  );
};

export default Dots;
