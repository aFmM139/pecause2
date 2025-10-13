import CustomText from "@/components/CustomText";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import "@/global.css";
import { View, Alert } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }
    
    console.log("Login:", { email, password });
    Alert.alert("Éxito", `Bienvenido ${email}`);

    router.push("/(home)/HomeScreen");
  };

  return (
    <View className="bg-[#E3C69F] w-screen h-screen flex justify-center items-center">
      <View className="w-4/5 max-w-md">
        {/* Título */}
        <View className="mb-8">
          <CustomText variant="large" dark={true}>
            Bienvenido
          </CustomText>
          <View className="h-2"></View>
          <CustomText variant="medium" dark={true}>
            Inicia sesión para continuar
          </CustomText>
        </View>

        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Login Button */}
        <CustomButton onPress={handleLogin}>
          Iniciar Sesión
        </CustomButton>

        {/* Forgot Password */}
        <View className="mt-4 items-center">
          <CustomText variant="small" dark={true}>
            ¿Olvidaste tu contraseña?
          </CustomText>
        </View>

        {/* Sign Up Link */}
        <View className="mt-8 items-center">
          <CustomText variant="small" dark={true}>
            ¿No tienes cuenta? Regístrate
          </CustomText>
          <Link href="/(home)/HomeScreen" className="mt-8 items-center h-15 w-15"> 🐷 </Link>
        </View>
      </View>
    </View>
  );
}
