import { Stack } from 'expo-router'
import React from 'react'
import { View,Text } from 'react-native'
import { Link } from "expo-router";

  export default function SettingsScreens(){
  return (
    <>
    <Stack.Screen options={{title:"Cuchisito"}}/>
    <View>
    <Text>Cuchisito tu papá</Text>
    <Link href="/(home)/HomeScreen">hola</Link>
    </View>
    </>
  )
}