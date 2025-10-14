//Importaciones necesarias
import React, { useState } from "react";
import { View, Alert, Pressable } from "react-native";
import CustomText from "@/components/CustomText";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import "@/global.css";

// Defino los tipos de las props
type RegisterFormProps = {
  onRegisterPress: () => void;
  onSwitchToLogin: () => void;
};

//Funcion para alertas
export default function RegisterForm({ onRegisterPress, onSwitchToLogin }: RegisterFormProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Por favor completa todos los campos");//Manejo de errores
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");//Manejo de errores en contraseñas
      return;
    }
    
    console.log("Register:", { username, email, password });
    Alert.alert(`Bienvenido ${username}, tu cuenta ha sido creada exitosamente`);//Mensaje de exito
    onRegisterPress();
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

        <View className="items-center mt-3">
            <Pressable onPress={onSwitchToLogin}>
              <CustomText variant="small" dark={true}>
                ¿Ya tienes una cuenta? Inicia Sesión
              </CustomText>
            </Pressable>
        </View>
      </View>
    </View>
  );
}
