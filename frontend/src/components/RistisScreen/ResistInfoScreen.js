import React from "react"

import AppText from "../common/AppText"
import TopMargin from "../common/TopMargin"
import AppBoldText from "./../common/AppBoldText"
import ColorSet from "../../style/ColorSet"

import { View, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import { RFPercentage } from "react-native-responsive-fontsize"
import AppButton from "../common/AppButton"

function ResistInfoScreen() {
  const navigation = useNavigation()
  return (
    <LinearGradient
      colors={[
        `${ColorSet.paleBlueColor(1)}`,
        `${ColorSet.paleBlueColor(1)}`,
        `${ColorSet.yellowColor(1)}`,
      ]}
      style={{ flex: 1, alignItems: "center" }}
    >
      <TopMargin />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <AppBoldText>인증 진행 시 최초 등록 이미지와의</AppBoldText>
          <AppBoldText>유사성을 판별해 인증을 검증합니다</AppBoldText>
          <View style={{ marginTop: "3%" }}>
            <AppText pxSize={18}>앞으로 챌린지를 진행할 때,</AppText>
            <AppText pxSize={18}>인증을 진행하기 위해서는</AppText>
            <AppText pxSize={18}>최초 등록해둔 물체를 촬영해야 합니다</AppText>
          </View>
          <View style={{ width: "100%", alignItems: "center", marginTop: "5%" }}>
            <View style={styles.textbox}>
              <AppText pxSize={18}>챌린지와 관련된 물체를 등록해 주세요</AppText>
            </View>
            <View style={styles.textbox}>
              <AppText pxSize={18}>해당 사항은 이후 변경 불가합니다</AppText>
            </View>
            <View style={styles.textbox}>
              <AppText pxSize={18}>등록하신 이미지는 피드에 업로드됩니다</AppText>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <AppButton
              title={"인증 이미지 등록하기"}
              handler={() => {
                navigation.push("Resist")
              }}
            ></AppButton>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}
export default ResistInfoScreen

const styles = StyleSheet.create({
  textbox: {
    backgroundColor: "#FFBF99",
    width: "90%",
    paddingVertical: "2%",
    borderRadius: 20,
    marginBottom: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonBox: {
    marginTop: "5%",
    width: "90%",
    height: RFPercentage(7),
  },
})
