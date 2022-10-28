import React from "react-native"
import { View, Text, Dimensions } from "react-native"
import ColorSet from "../../style/ColorSet"
import AppText from "../common/AppText"
import { Shadow } from "react-native-shadow-2"

export default function ChallengingCard() {
  const windowWidth = Dimensions.get("window").width
  return (
    // 공간
    <View
      style={{
        backgroundColor: "#edf8ff",
        height: 170,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 카드 */}
      <Shadow>
        <View
          style={{
            width: windowWidth * 0.9,
            height: 150,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          {/* <Text style={{ margin: 20, fontSize: 20 }}>🙂🙂🙂</Text> */}
        </View>
      </Shadow>
    </View>
  )
}
