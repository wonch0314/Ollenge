import React from "react"
import { ScrollView, View, StatusBar, Text, StyleSheet, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import styled from "styled-components/native"
import { Dimensions } from "react-native"

import TopUserCard from "../components/UserRankScreen/TopUserCard.js"
import UserRankCard from "../components/UserRankScreen/UserRankCard.js"
import MyRankCard from "../components/UserRankScreen/MyRankCard"
import ColorSet from "../style/ColorSet"
import AppText from "../components/common/AppText"

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
  flex-direction: row;
`
const RanksArea = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 28px;
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

        {/* Top 3 보여주는 영역 */}
        <TopRankArea>
          <TopUserCard />
          <TopUserCard />
          <TopUserCard />
        </TopRankArea>

        {/* 내 랭크 정보를 보여주는 영역 */}
        <MyRankCard />

        {/* 다른 유저들 랭크 보여주는 영역 */}
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
