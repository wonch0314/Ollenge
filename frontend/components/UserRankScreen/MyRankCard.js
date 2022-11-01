import React from "react"
import { Text, View, Dimensions, Image, StyleSheet } from "react-native"

import styled from "styled-components/native"
import { Avatar } from "react-native-paper"

const deviceHeight = Dimensions.get("window").height

const MyRankArea = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  height: ${deviceHeight * 0.1}px;
  flex-direction: column;
`
const PaperBack = styled.View`
  border-radius: 10px;
  width: 100%;
  background-color: white;
  flex: 1;
`

const styles = StyleSheet.create({
  containerStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
})

export default function MyRankCard() {
  return (
    <MyRankArea>
      <PaperBack style={styles.containerStyle}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View flex={1} style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>132위</Text>
          </View>

          <View flex={1} style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/default-image.png")}
              style={{ borderRadius: 5, width: 65, height: 65 }}
            />
          </View>
          <View flex={1} style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/default-image.png")}
              style={{ borderRadius: 5, width: 65, height: 65 }}
            />
          </View>
          <View flex={2} style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>
              ChanChanChanChanChanChanChanChanChanChanChanChanChanChanChanChanChanChanChanChanChan
            </Text>
          </View>
          <View flex={1.5} style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>1290088</Text>
          </View>
        </View>
      </PaperBack>
    </MyRankArea>
  )
}
