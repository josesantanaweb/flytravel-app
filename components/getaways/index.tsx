import DateTimePicker from "@react-native-community/datetimepicker";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Getaway from "./Getaway";

const GETAWAYS = [
  {
    image: require("@/assets/images/los-roques.jpg"),
    destination: "Caracas / Los Roques",
    price: 906,
    city: "Los Roques",
  },
  {
    image: require("@/assets/images/margarita.jpg"),
    destination: "Caracas / Margarita",
    price: 890,
    city: "Margarita",
  },
  {
    image: require("@/assets/images/canaima.jpg"),
    destination: "Caracas / Canaima",
    price: 970,
    city: "Canaima",
  },
  {
    image: require("@/assets/images/mochima.jpg"),
    destination: "Caracas / Mochima",
    price: 890,
    city: "Mochima",
  },
  {
    image: require("@/assets/images/cartagena.jpg"),
    destination: "Caracas / Cartagena",
    price: 232,
    city: "Cartagena",
  },
];

const Getaways = () => {
  const [formData, setFormData] = useState({
    passengers: "",
    phone: "",
    email: "",
    name: "",
    packageType: "Vuelo todo incluido",
    departureDate: new Date(),
    returnDate: new Date(),
  });
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateType, setDateType] = useState<"departure" | "return">("departure");
  const formattedDate = (date: Date) =>
    date
      .toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
      })
      .replace(/^(\d{2}) (\w)/, (m, d, l) => `${d} ${l.toUpperCase()}`);

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
  };

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setShowPicker(false);
      setFormData((prev) => ({
        ...prev,
        [dateType === "departure" ? "departureDate" : "returnDate"]:
          selectedDate,
      }));
    }
  };

  const showDatepicker = (type: "departure" | "return") => {
    setDateType(type);
    setShowPicker(true);
  };

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={require("@/assets/images/getaways.png")}
          contentFit="cover"
          className="w-full h-[340px]"
        />
      </View>
      <View className="relative px-5 py-8 bg-white -mt-14 rounded-t-3xl">
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
        <View className="relative mt-5 mb-14">
          <View className="flex-row items-end gap-5 mb-5">
            <View>
              <Text className="text-xs text-gray-400">Tipo de paquete</Text>
              <Pressable
                onPress={() =>
                  setFormData({
                    ...formData,
                    packageType: "Vuelo todo incluido",
                  })
                }
              >
                <Text
                  className={`text-sm font-semibold ${
                    formData.packageType === "Vuelo todo incluido"
                      ? "text-orange-500"
                      : "text-blue-950"
                  }`}
                >
                  Vuelo todo incluido
                </Text>
              </Pressable>
            </View>
            <Pressable
              onPress={() =>
                setFormData({
                  ...formData,
                  packageType: "Solo vuelo",
                })
              }
            >
              <Text
                className={`text-sm font-semibold ${
                  formData.packageType === "Solo vuelo"
                    ? "text-orange-500"
                    : "text-blue-950"
                }`}
              >
                Solo vuelo
              </Text>
            </Pressable>
          </View>
          <View className="gap-3 mb-10">
            <View className="relative w-full">
              <Image
                source={require("@/assets/images/user.png")}
                className="w-[18px] h-[16px] absolute left-4 top-5"
              />
              <TextInput
                value={formData.name}
                onChangeText={(text) =>
                  setFormData({ ...formData, name: text })
                }
                placeholder="Nombre y apellido"
                secureTextEntry
                autoCapitalize="none"
                className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-full outline-none h-14"
                placeholderTextColor="#888"
              />
            </View>
            <View className="grid flex-row items-center grid-cols-2 gap-3">
              <View className="relative flex-row items-center gap-4 px-5 bg-gray-100 rounded-tl-full rounded-bl-full h-14">
                <Image
                  source={require("@/assets/images/calendar.png")}
                  className="w-[18px] h-[21px]"
                />
                <View>
                  <Text className="text-xs text-blue-950">Fecha de Ida</Text>
                  <Text className="text-base text-gray-400">
                     {formattedDate(formData.departureDate)}
                  </Text>
                </View>
              </View>
              <View className="relative flex-row items-center gap-4 px-5 bg-gray-100 rounded-tr-full rounded-br-full h-14">
                <Image
                  source={require("@/assets/images/calendar.png")}
                  className="w-[18px] h-[21px]"
                />
                <View>
                  <Text className="text-xs text-blue-950">Fecha de Vuelta</Text>
                  <Text className="text-base text-gray-400">
                     {formattedDate(formData.returnDate)}
                  </Text>
                </View>
              </View>

              {showPicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  onChange={onChange}
                />
              )}
            </View>
            <View className="relative w-full">
              <Image
                source={require("@/assets/images/passenger.png")}
                className="w-[6px] h-[22px] absolute left-6 top-[18px]"
              />
              <TextInput
                value={formData.passengers}
                onChangeText={(text) =>
                  setFormData({ ...formData, passengers: text })
                }
                placeholder="Pasajeros"
                keyboardType="numeric"
                autoCapitalize="none"
                className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-full outline-none h-14"
                placeholderTextColor="#888"
              />
            </View>
            <View className="relative w-full">
              <Image
                source={require("@/assets/images/phone.png")}
                className="w-[12px] h-[20px] absolute left-5 top-5"
              />
              <TextInput
                value={formData.phone}
                onChangeText={(text) =>
                  setFormData({ ...formData, phone: text })
                }
                placeholder="Teléfono"
                secureTextEntry
                autoCapitalize="none"
                className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-full outline-none h-14"
                placeholderTextColor="#888"
              />
            </View>
            <View className="relative w-full">
              <Image
                source={require("@/assets/images/email.png")}
                className="w-[18px] h-[12px] absolute left-4 top-[23px]"
              />
              <TextInput
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
                placeholder="Correo electrónico"
                secureTextEntry
                autoCapitalize="none"
                className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-full outline-none h-14"
                placeholderTextColor="#888"
              />
            </View>
          </View>
          <Pressable
            onPress={handleSubmit}
            className="flex items-center justify-center w-full bg-red-700 rounded-full h-14"
          >
            <Text className="text-base text-center text-white">
              Solicitar cotización
            </Text>
          </Pressable>
        </View>
        <Text className="mb-3 text-xl font-semibold text-blue-950">
          Destinos
        </Text>
        <View className="relative items-center flex-1 gap-4 ">
          {GETAWAYS.map((offer, index) => (
            <Getaway getaway={offer} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Getaways;
