import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

const Login = () => {
  const [layout, setLayout] = useState("LOGIN");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <View className="relative flex-1">
      <Image
        source={require("@/assets/images/bg.png")}
        className="absolute z-0 w-full h-full"
      />
      <View className="z-10 h-screen px-10">
        <View className="flex items-center justify-center h-full">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-[95px] h-[100px] mb-10"
          />
          <Image
            source={require("@/assets/images/login-user.png")}
            className="w-[150px] h-[150px] mb-10"
          />
          <Text className="mb-6 text-xl text-center text-white max-w-80">
            Inicia sesión o regístrate con tu correo electrónico
          </Text>
          {layout === "REGISTER" && (
            <View className="relative w-full gap-2 mb-4">
              <Text className="text-sm text-white">Nombre</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Ingresa tu nombre"
                autoCapitalize="none"
                className="w-full px-4 py-4 text-black bg-white border border-orange-500 rounded-full outline-none h-14"
                placeholderTextColor="#888"
              />
            </View>
          )}
          <View className="relative w-full gap-2 mb-4">
            <Text className="text-sm text-white">Correo electrónico</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Ingresa tu correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              className="w-full px-4 py-4 text-black bg-white border border-orange-500 rounded-full outline-none h-14"
              placeholderTextColor="#888"
            />
          </View>
          <View className="relative w-full gap-2 mb-6">
            <Text className="text-sm text-white">Contraseña</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Ingresa tu contraseña"
              secureTextEntry
              autoCapitalize="none"
              className="w-full px-4 py-4 text-black bg-white border border-orange-500 rounded-full outline-none h-14"
              placeholderTextColor="#888"
            />
          </View>
          <Pressable
            onPress={handleSubmit}
            className="flex items-center justify-center w-full bg-orange-500 rounded-full h-14"
          >
            <Text className="text-base text-center text-white">Continuar</Text>
          </Pressable>
          {layout === "LOGIN" && (
            <View className="flex-row items-center justify-center gap-3 my-3">
              <Text className="text-sm text-white">No tienes una cuenta?</Text>
              <Pressable onPress={() => setLayout("REGISTER")}>
                <Text className="text-sm font-semibold text-white">
                  Registrate
                </Text>
              </Pressable>
            </View>
          )}
          {layout === "REGISTER" && (
            <View className="flex-row items-center justify-center gap-3 my-3">
              <Text className="text-sm text-white">Ya tienes una cuenta?</Text>
              <Pressable onPress={() => setLayout("LOGIN")}>
                <Text className="text-sm font-semibold text-white">
                  Inicia sesión
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Login;
