//Añadimos importanciones necesarias
import React from "react";
import CustomText from "@/components/CustomText";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import "@/global.css";
import { View, Alert } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";

//Funcion para mandar aletaras en el inicio de sesion
export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");//Cuando se intente inciar sesion pero no se ingrese ningun dato
      return;
    }
    
    console.log("Login:", { email, password });
    Alert.alert("Éxito", `Bienvenido ${email}`);//Cuando se ingrese correctamente los datos

    router.push("/(home)/HomeScreen");
  };

  return (
    //Agregar los colores de fondo a las paginas
    <View className="bg-[#E3C69F] w-screen h-screen flex justify-center items-center">
      <View className="w-4/5 max-w-md">
        {/* Títulos para la bienvenida de la app */}
        <View className="mb-8">
          <CustomText variant="large" dark={true}>
            Bienvenido
          </CustomText>
          <View className="h-2"></View>
          <CustomText variant="medium" dark={true}>
            Inicia sesión para continuar
          </CustomText>
        </View>

    {/* Parte para ingresar el correo electronico */}
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

    {/* Parte para ingresar la contraseña */}
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

    {/* Boton de inciar sesion */}
        <CustomButton onPress={handleLogin}>
          Iniciar Sesión
        </CustomButton>

    {/* Texto que indica un ¿olvidaste tu contraseña? */}
        <View className="mt-4 items-center">
          <CustomText variant="small" dark={true}>
            ¿Olvidaste tu contraseña?
          </CustomText>
        </View>

    {/* Texto que indica un ¿No tienes cuenta? Regístrate */}
        <View className="mt-8 items-center">
          {/* Boton para navegar entre paginas */}
          <Link href="/(home)/RegisterScren" className="mt-8 items-center h-15 w-15"> 
            <CustomText variant="small" dark={true}>
              ¿No tienes cuenta? Regístrate
            </CustomText>
          </Link>
        </View>
      </View>
    </View>
  );
}
