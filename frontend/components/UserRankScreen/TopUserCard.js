import React from "react"
import { Image, Text, View } from "react-native"

export default function TopUserCard() {
  return (
    <View
      alignItems="center"
      style={{
        backgroundColor: "white",
        height: "100%",
        borderRadius: 10,
        marginLeft: 2,
        marginRight: 2,
      }}
      flex={1}
    >
      <View flex={4}>
        <Image
          source={require("../../assets/images/default-image.png")}
          style={{ width: "90%", height: "90%" }}
        />
        <Text>asdasd</Text>
      </View>
      <View flex={1}>
        <Text>Chan0314</Text>
      </View>
      <View flex={1}>
        <Text>15132점</Text>
      </View>
    </View>
  )
}
