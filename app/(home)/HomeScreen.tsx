import "@/global.css";
import { View, Alert,Text } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import SettingsScreens from "./SettingsScreens";

export default function HomeScreen() {
  return (
   <View>
    <Text>Hola mundo</Text>
    <Link href="/SettingsScreens" className="">🎶</Link>
    <Link href="/" className="">🎶</Link>
   </View>
  );
}
