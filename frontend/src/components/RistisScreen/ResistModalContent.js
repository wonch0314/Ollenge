import React from "react"

import { Image, View } from "react-native"
import AppBoldText from "../common/AppBoldText"
import { RFPercentage } from "react-native-responsive-fontsize"

function ResistModalContent({ uri, base64 }) {
  return (
    <View style={{ paddingHorizontal: "5%" }}>
      <View style={{ width: "100%", height: RFPercentage(50) }}>
        <Image
          source={{ uri: uri }}
          resizeMode="cover"
          style={{ width: "100%", height: undefined, aspectRatio: 1, borderRadius: 20 }}
        />
      </View>
    </View>
  )
}
export default ResistModalContent
