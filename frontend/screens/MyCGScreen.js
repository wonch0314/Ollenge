import { View, StyleSheet, ScrollView } from "react-native"
import { Text, Card } from "react-native-paper"
import { Pressable } from "react-native"
import styled, { ThemeProvider } from "styled-components/native"
import AppText from "../components/common/AppText"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import BeforeStart from "../components/MyCGScreen/BeforeStart"
import Challenging from "../components/MyCGScreen/Challenging"
import Ended from "../components/MyCGScreen/Ended"
import ColorSet from "../style/ColorSet"

function MyCGScreen() {
  const Tab = createMaterialTopTabNavigator()

  const tempRankingCgList = [
    {
      challengeImg: "tempImage",
      challengeName: "하루 3번 물마시기",
      startDate: "2022-10-21",
      endDate: "2022-10-21",
    },
    {
      challengeImg: "tempImage",
      challengeName: "하루 3번 물마시기",
      startDate: "2022-10-21",
      endDate: "2022-10-21",
    },
  ]
  const tempNormalCgList = []
  const tempFunc = () => {
    console.log("앙냥냥")
  }

  return (
    <Body>
      {/* Header부분 */}
      <Header>
        <HeaderTextView>
          <HeaderTextColumn>
            <AppText size="28" weight="900">
              내 챌린지
            </AppText>
          </HeaderTextColumn>
          <HeaderTextColumn></HeaderTextColumn>
        </HeaderTextView>
      </Header>
      <NavigationContainer>
        <Tab.Navigator
          style={{
            flex: 8,
          }}
          screenOptions={{
            tabBarLabelStyle: { fontSize: 16, fontWeight: "900" },
            // 글자색
            tabBarActiveTintColor: `${ColorSet.orangeColor(1)}`,
            tabBarInactiveTintColor: `${ColorSet.navyColor(0.5)}`,
            // 언더바색 => 대체 왜 이걸 이렇게 짜놨지?
            tabBarIndicatorStyle: {
              backgroundColor: `${ColorSet.orangeColor(1)}`,
            },
          }}
        >
          <Tab.Screen name="도전 중" component={Challenging} />
          <Tab.Screen name="시작 전" component={BeforeStart} />
          <Tab.Screen name="종료" component={Ended} />
        </Tab.Navigator>
      </NavigationContainer>
      {/* 아래부분 */}
    </Body>
  )
}

export default MyCGScreen

const styles = StyleSheet.create({})

const Body = styled.View`
  flex: 1;
  background-color: white;
  width: 100%;
`

const StatusTab = styled.Pressable`
  flex: 3;
  height: 70%;
  justify-content: center;
  align-items: center;
`

// styled-components 부분

// Header
const Header = styled.View`
  flex: 1.5;
  background-color: white;
`

const HeaderTextView = styled.View`
  flex-direction: row;
  flex: 6;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 23px;
`

const HeaderTextColumn = styled.View`
  flex: 1;
`

const HeaderTabView = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`
