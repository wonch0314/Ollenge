import React, { useState } from "react"

import { createStackNavigator } from "@react-navigation/stack"
import { Page1, Page2, Page3, Page4 } from "../components/CreateCGScreen/index"
import { Page5, Page6, Page7, Final } from "../components/CreateCGScreen/index"
import { NavigationContainer } from "@react-navigation/native"
import ColorSet from "../style/ColorSet"
import { StyleSheet } from "react-native"
import { fontStyles } from "../components/CreateCGScreen/PageBase"

const Stack = createStackNavigator()
const initialData = {
  challengeImg: "",
  challengeName: "",
  challengeTopic: "",
  authType: "",
  startDate: "",
  endDate: "",
  startTime: "00:00:00",
  endTime: "00:00:00",
  rewardContent: "",
  penaltyContent: "",
  challengeDescription: "",
}

export default function CreateCGScreen() {
  const [info, setInfo] = useState(initialData)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={styles.screenOptions}>
        <Stack.Screen name="Page1" options={{ title: "팀 정보 설정" }}>
          {() => <Page1 info={info} setInfo={setInfo} />}
        </Stack.Screen>
        <Stack.Screen name="Page2" options={{ title: "팀 목표 설정" }}>
          {() => <Page2 info={info} setInfo={setInfo} />}
        </Stack.Screen>
        <Stack.Screen name="Page3" options={{ title: "목표 인증 방법" }}>
          {() => <Page3 info={info} setInfo={setInfo} />}
        </Stack.Screen>
        <Stack.Screen name="Page4" options={{ title: "팀 설명 입력" }}>
          {() => <Page4 info={info} setInfo={setInfo} />}
        </Stack.Screen>
        <Stack.Screen name="Page5" options={{ title: "챌린지 기간 설정" }}>
          {() => <Page5 info={info} setInfo={setInfo} />}
        </Stack.Screen>
        <Stack.Screen name="Page6" options={{ title: "인증 시간 설정" }}>
          {() => <Page6 info={info} setInfo={setInfo} />}
        </Stack.Screen>
        <Stack.Screen name="Page7" options={{ title: "보상/벌칙 설정" }}>
          {() => <Page7 info={info} setInfo={setInfo} />}
        </Stack.Screen>
        <Stack.Screen name="Final" options={{ title: "" }}>
          {() => <Final info={info} setInfo={setInfo} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screenOptions: {
    headerTransparent: true,
    headerBackTitle: "",
    headerTintColor: `${ColorSet.navyColor(1)}`,
    headerTitleStyle: {
      ...fontStyles.HyeminBold({ size: 7.5, color: `${ColorSet.navyColor(1)}` }),
    },
    headerTitleAlign: "center",
    backgroundColor: "black",
  },
})
