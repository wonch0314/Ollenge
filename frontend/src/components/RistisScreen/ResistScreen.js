import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LinearGradient } from "expo-linear-gradient"

import ColorSet from "../../style/ColorSet"
import ResistInfoScreen from "./ResistInfoScreen"
import ImageRegisterScreen from "./ImageRegisterScreen"
import TopMargin from "../common/TopMargin"
import { View } from "react-native"
import { Title } from "react-native-paper"

function ResistScreen() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
        title: "",
        headerTransparent: true,
        headerTintColor: `${ColorSet.navyColor(100)}`,
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "HyeminBold" },
      }}
    >
      <Stack.Screen name="ResistInfo" component={ResistInfoScreen} />
      <Stack.Screen name="Resist" component={ImageRegisterScreen} />
    </Stack.Navigator>
  )
}
export default ResistScreen
