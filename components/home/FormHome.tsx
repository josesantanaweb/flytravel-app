import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Image,
  Linking,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FormOffer = () => {
  const [formData, setFormData] = useState({
    passengers: "",
    phone: "",
    email: "",
    name: "",
    origin: "",
    destination: "",
    flightType: "Ida y Vuelta",
    departureDate: new Date(),
    returnDate: new Date(),
  });
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
    const phoneNumber = "584126475918";
    const message = `
      *Solicitud de Cotización de Vuelo*
      Nombre: ${formData.name}
      Origen: ${formData.origin}
      Destino: ${formData.destination}
      Correo: ${formData.email}
      Teléfono: ${formData.phone}
      Pasajeros: ${formData.passengers}
      Tipo de viaje: ${formData.flightType}
      Fecha de ida: ${formattedDate(formData.departureDate)}
      Fecha de vuelta: ${formattedDate(formData.returnDate)}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    Linking.openURL(url);
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
    <View className="relative mt-5 mb-14">
      <View className="flex-row items-end gap-5 mb-5">
        <View>
          <Pressable
            onPress={() =>
              setFormData({
                ...formData,
                flightType: "Ida y Vuelta",
              })
            }
          >
            <Text
              className={`text-base font-semibold ${
                formData.flightType === "Ida y Vuelta"
                  ? "text-orange-500"
                  : "text-blue-950"
              }`}
            >
              Ida y Vuelta
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() =>
            setFormData({
              ...formData,
              flightType: "Solo Ida",
            })
          }
        >
          <Text
            className={`text-base font-semibold ${
              formData.flightType === "Solo Ida"
                ? "text-orange-500"
                : "text-blue-950"
            }`}
          >
            Solo Ida
          </Text>
        </Pressable>
      </View>
      <View className="gap-3 mb-10">
        <View className="relative w-full">
          <Image
            source={require("@/assets/images/origin.png")}
            className="w-[14px] h-[14px] absolute left-4 top-[18px] z-10"
          />
          <TextInput
            value={formData.origin}
            onChangeText={(text) => setFormData({ ...formData, origin: text })}
            placeholder="Origen"
            autoCapitalize="none"
            className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-full outline-none h-14"
            placeholderTextColor="#888"
          />
        </View>
        <View className="relative w-full">
          <Image
            source={require("@/assets/images/destination.png")}
            className="w-[12px] h-[17px] absolute left-4 top-[16px] z-10"
          />
          <TextInput
            value={formData.destination}
            onChangeText={(text) =>
              setFormData({ ...formData, destination: text })
            }
            placeholder="Destino"
            autoCapitalize="none"
            className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-full outline-none h-14"
            placeholderTextColor="#888"
          />
        </View>
        <View className="flex flex-row items-center justify-between w-full gap-3">
          <Pressable
            onPress={() => showDatepicker("departure")}
            className="relative flex-row items-center flex-1 gap-4 px-5 bg-gray-100 rounded-tl-full rounded-bl-full h-14"
          >
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
          </Pressable>

          <Pressable
            onPress={() => showDatepicker("return")}
            className="relative flex-row items-center w-1/2 gap-4 px-5 bg-gray-100 rounded-tr-full rounded-br-full h-14"
          >
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
          </Pressable>
        </View>

        <View className="relative flex-1 w-full">
          <Image
            source={require("@/assets/images/passenger.png")}
            className="w-[6px] h-[22px] absolute left-6 top-[13px] z-10"
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
      </View>
      <TouchableOpacity
        onPress={handleSubmit}
        className="flex items-center justify-center w-full bg-red-700 rounded-full h-14"
      >
        <Text className="text-base text-center text-white">
          Solicitar cotización
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <Modal
          transparent
          animationType="fade"
          visible={showPicker}
          onRequestClose={() => setShowPicker(false)}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
            className="items-center justify-center flex-1"
          >
            <View className="w-[90%] max-w-md bg-gray-200 rounded-lg shadow-lg text-black p-4">
              <DateTimePicker
                value={
                  dateType === "departure"
                    ? formData.departureDate
                    : formData.returnDate
                }
                mode="date"
                textColor="#1c0062"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={onChange}
              />
              <Pressable onPress={() => setShowPicker(false)}>
                <Text className="mt-4 text-center text-orange-500">Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default FormOffer;
