import React from "react"
import { Text, View, Dimensions, Image, StyleSheet } from "react-native"
import { styles as shadowStyles } from "../common/AppCard"
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

const TextCover = styled.Text`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 40px;
`

export default function MyRankCard() {
  return (
    <MyRankArea>
      <PaperBack style={shadowStyles.cardShadow}>
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
            <TextCover>
              Chan Chan ChanChanChanChanChanChanChanChanChanChanChanChanChanChanCh
              anChanChanChanChan
            </TextCover>
          </View>
          <View flex={1.5} style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>1290088</Text>
          </View>
        </View>
      </PaperBack>
    </MyRankArea>
  )
}
