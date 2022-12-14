import React from "react"

import { View, Image, StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"

import AppBoldText from "../../common/AppBoldText"
import ColorSet from "../../../style/ColorSet"
import defaultImage from "../../../assets/images/default-image.png"

function MyRankItem({ user, rank, wholeDay, src }) {
  const defaultImageUri = Image.resolveAssetSource(defaultImage).uri
  return (
    <View style={styles.rootScreen}>
      <View style={styles.infoBox}>
        <AppBoldText pxSize={20} color={"orange"}>
          {rank}등
        </AppBoldText>
        <View style={styles.profileImgBox}>
          <Image
            source={user.profileImg ? { uri: user.profileImg } : { uri: defaultImageUri }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.bedgeImgBox}>
          {src ? (
            <Image source={src} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
          ) : (
            <View
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                backgroundColor: `${ColorSet.grayColor(1)}`,
              }}
            />
          )}
        </View>
        <View style={{ flex: 1 }}>
          <AppBoldText size={2.6} lineNumber={1}>
            {user.nickname}
          </AppBoldText>
        </View>

        <AppBoldText color={"orange"} size={2.4}>
          {Math.round((user.datetimeList.length / wholeDay) * 100)}%
        </AppBoldText>
      </View>
    </View>
  )
}
export default MyRankItem

const styles = StyleSheet.create({
  rootScreen: {
    width: "100%",
    paddingVertical: "2%",
    paddingHorizontal: "2%",
    flexDirection: "row",
    alignItems: "center",
  },
  infoBox: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: RFPercentage(10),
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  profileImgBox: {
    width: RFPercentage(10),
    height: RFPercentage(10),
    padding: "2%",
  },
  bedgeImgBox: {
    width: RFPercentage(10),
    height: RFPercentage(10),
    padding: "2%",
  },
})
