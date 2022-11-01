import React from "react"
import { Image, Text, View, Dimensions } from "react-native"
import { styles as shadowStyles } from "../common/AppCard"
import Styled from "styled-components/native"
import AppCard from "../common/AppCard"

const deviceWidth = Dimensions.get("window").width

const users = [
  { rank: 1, nickname: "chanchan", score: 100 },
  { rank: 2, nickname: "chanchan", score: 100 },
  { rank: 3, nickname: "chanchan", score: 100 },
]

const WholeFrame = Styled.View`
    width: 100%;
    padding: 0px 12px;
    flex-direction: row;
    position: relative;
    `
const TopCard = Styled.View`
  flex: 1;
  width: ${deviceWidth / 3};
  height: ${deviceWidth / 3};
  margin: 0 2px;
  background-color: white;
  position: relative;
`

export default function TopUserCard() {
  return (
    <WholeFrame>
      <TopCard style={shadowStyles.cardShadow}>
        <View flex={1}>
          <Image
            source={require("../../assets/images/orange.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View alignItems="center">
          <Text>Chan</Text>
          <Text>1000점</Text>
        </View>
      </TopCard>

      <TopCard style={shadowStyles.cardShadow}>
        <View flex={1}>
          <Image
            source={require("../../assets/images/orange.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View alignItems="center">
          <Text>Chan</Text>
          <Text>1000점</Text>
        </View>
      </TopCard>

      <TopCard style={shadowStyles.cardShadow}>
        <View flex={1}>
          <Image
            source={require("../../assets/images/orange.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View alignItems="center">
          <Text>Chan</Text>
          <Text>1000점</Text>
        </View>
      </TopCard>
    </WholeFrame>
  )
}
