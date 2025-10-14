//Añadimos importanciones necesarias
import React, { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import "@/global.css";
import { View } from "react-native";
import { router } from "expo-router";

  const index = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
      <View>
        {
          isLogin ? (
            <LoginForm 
              onLoginPress={() => {router.replace('/(home)/HomeScreen')}}
              onSwitchToRegister={() => setIsLogin(false)}
            />
          ) : (
            <RegisterForm 
              onRegisterPress={() => {router.replace('/(home)/HomeScreen'), setIsLogin(true)}}
              onSwitchToLogin={() => setIsLogin(true)}
            />
          )
        }
      </View>
    )
  }
  
  export default index
