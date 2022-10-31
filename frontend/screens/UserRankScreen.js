import React from "react"
import { ScrollView, View, StatusBar, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import styled from "styled-components/native"
import AppText from "../components/common/AppText"
import UserRankCard from "../components/UserRankScreen/UserRankCard.js"
import { Dimensions } from "react-native"
import ColorSet from "../style/ColorSet"

const deviceHeight = Dimensions.get("window").height
const statusBarHeight = StatusBar.currentHeight

const TitleArea = styled.View`
  width: 100%;
  padding-left: 24px;
  height: ${deviceHeight * 0.07}px;
  justify-content: center;
  margin-top: ${statusBarHeight}px;
`

const TopRankArea = styled.View`
  width: 100%;
  height: ${deviceHeight * 0.2}px;
  background-color: blue;
  flex-direction: row;
`

const TopClass = (rankNum) => {
  return (
    <View alignItems="center" style={{ backgroundColor: "green", height: "100%" }} flex={1}>
      <Text>임시</Text>
    </View>
  )
}

const MyRankArea = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  height: ${deviceHeight * 0.1}px;
`

const RanksArea = styled.View`
  width: 100%;
  align-items: center;
  background-color: navy;
  height: ${deviceHeight * 0.24}px;
`

const PaperBack = styled.View`
  border-radius: 10px;
  width: 100%;
  background-color: white;
  flex: 1;
`

function UserRankScreen() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[`${ColorSet.paleBlueColor(1)}`, `${ColorSet.yellowColor(1)}`]}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={{ position: "relative" }}>
        <TitleArea>
          <AppText color="navy" size="4%" style={{ fontWeight: "bold" }}>
            유저 랭킹
          </AppText>
        </TitleArea>
        <TopRankArea>
          {TopClass(1)}
          {TopClass(2)}
          {TopClass(3)}
        </TopRankArea>
        {/* 내 랭크 정보를 보여주는 영역 */}
        <MyRankArea>
          <PaperBack>
            <View>
              <Text>132위</Text>
            </View>
            <View>
              <Text>사진</Text>
            </View>
            <View>
              <Text>뱃지</Text>
            </View>
            <View>
              <Text>닉네임</Text>
            </View>
            <View>
              <Text>점수</Text>
            </View>
          </PaperBack>
        </MyRankArea>

        <RanksArea>
          <ScrollView style={{ width: "100%" }}>
            {[
              [...Array(20).keys()].map((n, ind) => {
                return <UserRankCard key={ind} />
              }),
            ]}
          </ScrollView>
        </RanksArea>
      </View>
    </LinearGradient>
  )
}
export default UserRankScreen
