import React from "react"
import Styled from "styled-components/native"
import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { Avatar } from "react-native-paper"
import AppText from "../common/AppText"

export default function TopUserArea({ topUsers }) {
  return (
    <View style={frameStyles.wholeFrame}>
      {[1, 2, 3].map((num) => {
        return (
          <View key={num} style={frameStyles.topPlayer(num)}>
            <Text>asdas</Text>
            <Text>asdas</Text>
          </View>
        )
      })}
      {topUsers.map((user, index) => {
        return (
          <View key={index}>
            <Text>
              {user.nickname}|{index}
            </Text>
          </View>
        )
      })}
    </View>
  )
}
const common = {
  borderWidth: 2,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
}

const frameStyles = StyleSheet.create({
  wholeFrame: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  topPlayer: (number) => {
    return {
      ...common,
      width: ["40%", "35%", "30%"][number - 1],
      paddingTop: [11, 0, -11][number - 1],
    }
  },
})
