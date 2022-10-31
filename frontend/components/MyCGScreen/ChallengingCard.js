import React from "react-native"
import { View, Text, Dimensions } from "react-native"
import ColorSet from "../../style/ColorSet"
import AppText from "../common/AppText"
import AppCard from "../common/AppCard"
import { ProgressBar } from "react-native-paper"

export default function ChallengingCard() {
  const windowWidth = Dimensions.get("window").width

  return (
    <AppCard height="200">
      {/* 상단  */}
      <View
        style={{
          flex: 7,
        }}
      ></View>
      {/* 하단 */}
      <View
        style={{
          flex: 3,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: windowWidth * 0.8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <AppText size="15">날짜 들어갈</AppText>
            <AppText size="15">날짜 들어갈</AppText>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: windowWidth * 0.8,
          }}
        >
          <ProgressBar style={{}} progress={0.5} color="red" />
        </View>
      </View>
    </AppCard>
  )
}
