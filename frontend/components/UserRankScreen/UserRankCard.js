import React from "react"
import { Text, View } from "react-native"

export default function UserRankCard() {
  return (
    <View
      style={{ flexDirection: "row", padding: "5%", backgroundColor: "rgba(12, 231,78, 0.25)" }}
    >
      <View flex={2} justifyContent="center" alignContent="center">
        <Text>5</Text>
      </View>
      <View flex={10}>
        <View style={{ backgroundColor: "white" }}>
          <Text>asdasd</Text>
        </View>
      </View>
    </View>
  )
}
