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
    reasonType: "Fines migratorios",
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
      *Solicitud de Cotización de Oferta*
      Nombre: ${formData.name}
      Correo: ${formData.email}
      Teléfono: ${formData.phone}
      Pasajeros: ${formData.passengers}
      Motivo de viaje: ${formData.reasonType}
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
          <Text className="text-xs text-gray-400">Motivo de viaje</Text>
          <Pressable
            onPress={() =>
              setFormData({
                ...formData,
                reasonType: "Fines migratorios",
              })
            }
          >
            <Text
              className={`text-sm font-semibold ${
                formData.reasonType === "Fines migratorios"
                  ? "text-orange-500"
                  : "text-blue-950"
              }`}
            >
              Fines migratorios
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() =>
            setFormData({
              ...formData,
              reasonType: "Vacaciones",
            })
          }
        >
          <Text
            className={`text-sm font-semibold ${
              formData.reasonType === "Vacaciones"
                ? "text-orange-500"
                : "text-blue-950"
            }`}
          >
            Vacaciones
          </Text>
        </Pressable>
      </View>
      <View className="gap-3 mb-10">
        <View className="relative w-full">
          <Image
            source={require("@/assets/images/user.png")}
            className="w-[18px] h-[16px] absolute left-4 top-5 z-10"
          />
          <TextInput
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            placeholder="Nombre y apellido"
            autoCapitalize="none"
            className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-full outline-none h-14"
            placeholderTextColor="#888"
          />
        </View>
        <View className="flex flex-row items-center justify-between w-full gap-3">
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
              className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-tl-full rounded-bl-full outline-none h-14"
              placeholderTextColor="#888"
            />
          </View>

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

        <View className="relative w-full">
          <Image
            source={require("@/assets/images/phone.png")}
            className="w-[12px] h-[20px] absolute left-5 top-5 z-10"
          />
          <TextInput
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            placeholder="Teléfono"
            autoCapitalize="none"
            keyboardType="phone-pad"
            className="w-full py-4 pl-12 pr-4 text-black bg-gray-100 rounded-full outline-none h-14"
            placeholderTextColor="#888"
          />
        </View>
        <View className="relative w-full">
          <Image
            source={require("@/assets/images/email.png")}
            className="w-[18px] h-[12px] absolute left-4 top-[20px] z-10"
          />
          <TextInput
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholder="Correo electrónico"
            keyboardType="email-address"
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
