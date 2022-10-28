import { View, Text, ScrollView } from "react-native"
import AppText from "../common/AppText"
import styled from "styled-components"
import ChallengingCard from "./ChallengingCard"

const Challenging = () => {
  const tempList = [
    {
      title: "하루 3잔 물마시기",
      teamName: "찬호와 아이들",
      memberNumber: 4,
      progress: 50,
      startDate: "10.26",
      endDate: "11.05",
    },
  ]

  return (
    <ScrollBackground>
      {/* 랭킹 챌린지 */}
      <View>
        <DivideView></DivideView>
        {/* 리스트 렌더링 */}
        <View>
          <ChallengingCard />
          <ChallengingCard />
          <ChallengingCard />
        </View>
      </View>
      {/* 일반 챌린지 */}
      <View>
        <DivideView></DivideView>
        {/* 리스트 렌더링 */}
        <View></View>
      </View>
    </ScrollBackground>
  )
}

const ScrollBackground = styled.ScrollView`
  background: #edf8ff;
`

const DivideView = styled.View`
  width: 100;
`
export default Challenging
