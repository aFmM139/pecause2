import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Link, router } from "expo-router";
import CustomText from "@/components/CustomText";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import "@/global.css";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    
    console.log("Register:", { username, email, password });
    Alert.alert("Éxito", `Bienvenido ${username}, tu cuenta ha sido creada`);
    router.push("/(home)/HomeScreen");
  };

  return (
    <View className="bg-[#E3C69F] w-screen h-screen flex justify-center items-center">
      <View className="w-4/5 max-w-md">
        <View className="mb-8">
          <CustomText variant="large" dark={true}>
            Crear Cuenta
          </CustomText>
          <View className="h-2"></View>
          <CustomText variant="medium" dark={true}>
            Regístrate para comenzar
          </CustomText>
        </View>

        <View className="mb-4">
          <CustomText variant="small" dark={true}>
            Nombre de Usuario
          </CustomText>
          <View className="h-2"></View>
          <CustomInput
            placeholder="Tu nombre de usuario"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View className="mb-4">
          <CustomText variant="small" dark={true}>
            Correo Electrónico
          </CustomText>
          <View className="h-2"></View>
          <CustomInput
            placeholder="ejemplo@correo.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-6">
          <CustomText variant="small" dark={true}>
            Contraseña
          </CustomText>
          <View className="h-2"></View>
          <CustomInput
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <View className="mb-6">
          <CustomText variant="small" dark={true}>
            Confirmar Contraseña
          </CustomText>
          <View className="h-2"></View>
          <CustomInput
            placeholder="••••••••"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
        </View>

        <CustomButton onPress={handleRegister}>
          Registrarse
        </CustomButton>

        <View className="mt-8 items-center">
          <CustomText variant="small" dark={true}>
            ¿Ya tienes una cuenta?
          </CustomText>
          <Link href="/" className="mt-2">
            <CustomText variant="small" dark={true}>Inicia Sesión</CustomText>
          </Link>
        </View>
      </View>
    </View>
  );
}
