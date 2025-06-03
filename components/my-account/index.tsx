import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import {
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const MyAccount = () => {
  const handleInstagramPress = () => {
    const instagramUrl = "https://www.instagram.com/flytravelgoo/";
    Linking.openURL(instagramUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const handleFacebookPress = () => {
    const facebookUrl = "https://www.facebook.com/flytravelgoo";
    Linking.openURL(facebookUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const handleTelegramPress = () => {
    const telegramUrl = "https://t.me/flytravelgoo";
    Linking.openURL(telegramUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const handleQuestionPress = () => {
    const telegramUrl = "https://www.flytravelgoo.com/contacto";
    Linking.openURL(telegramUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const handleCallPress = () => {
    const phoneNumber = "tel:+584244158089";
    Linking.openURL(phoneNumber).catch((err) =>
      console.error("Failed to make a call:", err)
    );
  };

  return (
    <ScrollView style={{ marginTop: Platform.OS === "android" ? 60 : 0 }}>
      <View className="w-full h-[400px] justify-center items-center overflow-hidden">
        <Image
          source={require("@/assets/images/bg-3.png")}
          className="object-cover w-full h-[70%]"
          resizeMode="cover"
        />
        <View className="absolute items-center justify-center -translate-y-1/2 top-1/2">
          <Text className="text-3xl font-bold text-white">Hola</Text>
          <Text className="text-lg font-bold text-white">
            ¡Que bueno que estés aquí!
          </Text>
        </View>
      </View>
      <View className="relative px-5 py-8 -mt-24 bg-white rounded-t-[30px]">
        <Image
          source={require("@/assets/images/summer-3.png")}
          className="w-[63px] h-[176x] absolute -top-[120px] right-10 z-10"
        />
        <View className="absolute top-0 right-0 w-[145px] h-[324px] overflow-hidden rounded-[30px]">
          <Image
            source={require("@/assets/images/bird.png")}
            className="w-[100%] absolute top-0 -right-[20px] object-contain"
          />
        </View>
        <View className="flex items-center justify-center mb-8">
          <Text className="mb-3 text-xl font-semibold text-center text-blue-950">
            Mi cuenta
          </Text>
          <Text className="text-xs text-center text-blue-950 max-w-[300px]">
            Inicia sesión, revisa el estado de tus reservas, completa tus datos
            y reserva todo más fácil y rápido.
          </Text>
        </View>

        <View className="mb-2">
          <Text className="mb-3 text-base font-semibold text-blue-950">
            Ayuda
          </Text>
          <Pressable className="flex flex-row items-center justify-between gap-3 mb-3" onPress={handleQuestionPress}>
            <View className="flex flex-row items-center gap-2">
              <FontAwesome name="question-circle" size={14} color="#fa6c00" />
              <Text className="text-sm text-blue-950">
                Preguntas frecuentes / Ayuda
              </Text>
            </View>
          </Pressable>
          <Pressable className="flex flex-row items-center justify-between gap-3 mb-3" onPress={handleCallPress}>
            <View className="flex flex-row items-center gap-2">
              <FontAwesome name="phone" size={14} color="#fa6c00"/>
              <Text className="text-sm text-blue-950">Llama a Fly Travel</Text>
            </View>
          </Pressable>
        </View>

        <View className="mb-4">
          <Text className="mb-3 text-base font-semibold text-blue-950">
            Privacidad y legal
          </Text>
          <Pressable className="flex flex-row items-center justify-between gap-3 mb-3" onPress={handleQuestionPress}>
            <View className="flex flex-row items-center gap-2">
              <FontAwesome name="user-secret" size={14} color="#fa6c00" />
              <Text className="text-sm text-blue-950">
                Politicas de privacidad
              </Text>
            </View>
          </Pressable>
          <Pressable className="flex flex-row items-center justify-between gap-3 mb-3" onPress={handleQuestionPress}>
            <View className="flex flex-row items-center gap-2">
              <FontAwesome name="info-circle" size={14} color="#fa6c00" />
              <Text className="text-sm text-blue-950">
                Términos y condiciones
              </Text>
            </View>
          </Pressable>
          <Pressable className="flex flex-row items-center justify-between gap-3 mb-3">
            <View className="flex flex-row items-center gap-2">
              <FontAwesome name="star" size={14} color="#fa6c00" />
              <Text className="text-sm text-blue-950">
                Calificar aplicación
              </Text>
            </View>
          </Pressable>
        </View>

        <View className="relative bg-blue-950 rounded-[20px] w-full overflow-hidden mb-8">
          <Image
            source={require("@/assets/images/bg-2.png")}
            className="absolute top-0 left-0 object-cover w-full h-full"
            resizeMode="cover"
          />
          <View className="flex-row items-center justify-between p-5">
            <View className="max-w-[240px]">
              <Text className="mb-2 text-lg font-bold text-white">
                ¿Por qué elegirnos?
              </Text>
              <Text className="text-sm text-white">
                Ofrecemos viajes que te benefician tanto a ti como al planeta.
                Descubre más.
              </Text>
            </View>
            <Image
              source={require("@/assets/images/world.png")}
              className="w-[107px] h-[104px]"
              resizeMode="cover"
            />
          </View>
        </View>

        <View>
          <Text className="mb-3 text-base font-semibold text-blue-950">
            flytravelgoo.com
          </Text>
          <Pressable
            onPress={handleInstagramPress}
            className="flex flex-row items-center justify-between gap-3 mb-3"
          >
            <View className="flex flex-row items-center gap-2">
              <FontAwesome
                name="instagram"
                size={14}
                className="text-blue-950"
              />
              <Text className="text-sm text-blue-950">
                Siguenos en Instagram
              </Text>
            </View>
            <FontAwesome
              name="chevron-right"
              size={12}
              className="text-blue-950"
            />
          </Pressable>
          <Pressable
            onPress={handleFacebookPress}
            className="flex flex-row items-center justify-between gap-3 mb-3"
          >
            <View className="flex flex-row items-center gap-2">
              <FontAwesome
                name="facebook"
                size={14}
                className="text-blue-950"
              />
              <Text className="text-sm text-blue-950">
                Danos un Me gusta en Facebook
              </Text>
            </View>
            <FontAwesome
              name="chevron-right"
              size={12}
              className="text-blue-950"
            />
          </Pressable>
          <Pressable
            onPress={handleTelegramPress}
            className="flex flex-row items-center justify-between gap-3 mb-3"
          >
            <View className="flex flex-row items-center gap-2">
              <FontAwesome
                name="telegram"
                size={14}
                className="text-blue-950"
              />
              <Text className="text-sm text-blue-950">
                Siguenos en Telegram
              </Text>
            </View>
            <FontAwesome
              name="chevron-right"
              size={12}
              className="text-blue-950"
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyAccount;
