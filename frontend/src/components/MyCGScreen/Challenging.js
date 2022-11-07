import React from "react-native"
import { View, ScrollView, Image, Dimensions } from "react-native"
import AppText from "../common/AppText"
import AppBoldText from "../common/AppBoldText"
import styled from "styled-components"
import ChallengingCard from "./ChallengingCard"
import {
  RankingChallengeIcon,
  NormalChallengeIcon,
} from "../../assets/images/MyCGScreen/MyCGScreen"
import { useState, useEffect } from "react"
import AppModal from "../common/AppModal"
import Feed from "./Feed"
import API from "../../api/index"
import { AuthorizationInstance } from "../../api/settings"

const Challenging = () => {
  const instance = AuthorizationInstance()
  const [rankingCGList, setRankingCGList] = useState([])
  const [userCGList, setUserCGList] = useState([])

  const tempRankingCGList = [
    {
      challengeId: 34,
      challengeImg: "https://picsum.photos/200",
      challengeName: "찬호와 아이들",
      challengeTopic: "하루 3잔 물마시기",
      startDate: new Date(2022, 10, 26),
      endDate: new Date(2022, 11, 5),
      peopleCnt: 4,
    },
  ]

  const tempUserCGLisg = [
    {
      challengeId: 34,
      challengeImg: "https://picsum.photos/200",
      challengeName: "찬호와 아이들",
      challengeTopic: "하루 3잔 물마시기",
      startDate: new Date(2022, 10, 26),
      endDate: new Date(2022, 11, 5),
      peopleCnt: 4,
    },
  ]

  // console.log(tempRankingCGList[0].startDate)
  // 여기 함수를 넣자
  const myFunc = () => {
    console.log("앙냥냥")
  }

  useEffect(() => {
    const getChallenge = async () => {
      try {
        const res = await instance.get("/api/user/ongoing")
        const NewRankingCGList = res.data.rankingChallengeList
        const NewUserCGList = res.data.userChallengeList
        // console.log(res.data.rankingChallengeList)
        // console.log(res.data.userChallengeList)
        setRankingCGList(NewRankingCGList)
        setUserCGList(NewUserCGList)
      } catch (err) {
        console.log(err.response.data)
      }
    }
    getChallenge()
  }, [])

  // const [openModal, setOpenModal] = useState(false)
  // const openAndClose = () => {
  //   setOpenModal(!openModal)
  // }

  return (
    <ScrollBackground>
      {/* {openModal && (
        <AppModal openAndClose={openAndClose} title={myFunc}>
          <Feed />
        </AppModal>
      )} */}
      <DivideView>
        <IconView>
          <RankingChallengeIcon />
        </IconView>
        <AppBoldText>랭킹 챌린지</AppBoldText>
      </DivideView>
      {/* {tempList
        .filter((listItem) => listItem.isChallenge)
        .map((challengeInfo, idx) => (
          // <ChallengingCard key={idx} challengeInfo={challengeInfo} func={openAndClose} />
          <ChallengingCard key={idx} challengeInfo={challengeInfo} />
        ))} */}
      {tempRankingCGList.map((challengeInfo) => (
        <ChallengingCard key={challengeInfo} challengeInfo={challengeInfo} />
      ))}
      <DivideView>
        <IconView>
          <NormalChallengeIcon />
        </IconView>
        <AppBoldText>일반 챌린지</AppBoldText>
      </DivideView>
      {/* {tempList
        .filter((listItem) => !listItem.isChallenge)
        .map((challengeInfo, idx) => (
          // <ChallengingCard key={idx} challengeInfo={challengeInfo} func={openAndClose} />
          <ChallengingCard key={idx} challengeInfo={challengeInfo} />
        ))} */}
      {/* {userCGList.map((challengeInfo) => (
        <ChallengingCard key={challengeInfo.challengeId} challengeInfo={challengeInfo} />
      ))} */}
    </ScrollBackground>
  )
}

const fivePercent = (Dimensions.get("window").width * 0.05) / 2

const ScrollBackground = styled.ScrollView`
  background: #edf8ff;
`

const DivideView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px ${fivePercent}px;
`
export default Challenging

const IconView = styled.View`
  width: 15%;
  height: 50px;
`
