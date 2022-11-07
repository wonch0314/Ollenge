import React from "react"

import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import TopMargin from "./../components/common/TopMargin"
import AppButton from "./../components/common/AppButton"

function CGRoomScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <TopMargin />
      <TopMargin />
      <View style={{ height: 50 }}>
        <AppButton title={"유저목록"} handler={() => navigation.push("CGUser")}></AppButton>
      </View>
      <View style={{ height: 50 }}>
        <AppButton
          title={"인증이미지등록"}
          handler={() => navigation.push("CGImg", { methodNum: 0, participationId: 3 })}
        ></AppButton>
      </View>
      <View style={{ height: 50 }}>
        <AppButton
          title={"인증"}
          handler={() => navigation.push("CGAuth", { methodNum: 1, participationId: 3 })}
        ></AppButton>
      </View>
    </View>
  )
}
export default CGRoomScreen
