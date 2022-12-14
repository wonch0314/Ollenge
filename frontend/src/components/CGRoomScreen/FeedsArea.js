import React, { StyleSheet, View } from "react-native"
import styled from "styled-components"
import { useState, useEffect, useContext, useRef } from "react"
import { AuthorizationInstance } from "../../api/settings"
import { RoomContext } from "../../../store/room-context"
import { AuthContext } from "../../../store/auth-context"
import { useIsFocused, useNavigation } from "@react-navigation/native"
// component
import FeedItem from "./FeedItem"
import CommentArea from "./CommentArea"
import CGStartCount from "./CGStartCount"
import InviteCodeBtn from "./InviteCodeBtn"
import TodayAuthCount from "./TodayAuthCount"
import EndingReport from "./EndingReport"
import CGAuthBtn from "./CGAuthBtn"
import ImageResistBtn from "./ImageResistBtn"
const FeedsArea = ({ isStarted, roomInfo, isAuthed, isTime, isResist }) => {
  const isFocused = useIsFocused()
  const instance = AuthorizationInstance()
  const roomCtx = useContext(RoomContext)
  const authCtx = useContext(AuthContext)
  const challengeId = roomCtx.roomInfo.challengeId
  const navigation = useNavigation()

  const flatListRef = useRef()

  // 내 Id와 같으면 신고하기 버튼용
  const myId = authCtx.userInfo.userId

  const [feedsListShowed, setFeedsListShowed] = useState([])
  const [feedCount, setFeedCount] = useState(1)

  // 시작시 전체 List 불러오기
  const getRes = async () => {
    if (challengeId) {
      try {
        const res = await instance.get(`/api/feed/${challengeId}`)
        const newFeedList = res.data.feedList
        setfeedList(newFeedList)
        setFeedsListShowed(newFeedList.slice(0, 5))
      } catch (error) {
        console.log(error.response.data)
      }
    }
  }

  const [feedList, setfeedList] = useState([])

  useEffect(() => {
    getRes()
  }, [isFocused, challengeId])

  // 보이는 피드 변경
  useEffect(() => {
    const newFeedsListShowed = feedList.slice(0, feedCount * 5)
    setFeedsListShowed(newFeedsListShowed)
  }, [feedCount])

  // 피드 아이템 개체

  const feedItem = (feedInfo) => (
    <FeedItem feedInfo={feedInfo} whenClosed={getRes} myId={myId} open={open} />
  )
  // 단순히 댓글을 닫았을 때 피드가 불러오지는 않게 했다.

  const onEndReached = () => {
    setFeedCount(feedCount + 1)
  }

  const [feedInfo, setFeedInfo] = useState({})
  const [openModal, setOpenModal] = useState(false)

  const open = (feedInfo) => {
    setFeedInfo(feedInfo)
    setOpenModal(!openModal)
  }

  const close = () => {
    setOpenModal(!openModal)
  }

  return (
    <FeedBody>
      {openModal && <CommentArea feedInfo={feedInfo} close={close} />}
      <FeedList
        data={feedsListShowed}
        renderItem={feedItem}
        keyExtractor={(feedInfo) => feedInfo.feedId}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ref={flatListRef}
        extraData={[challengeId, isFocused, feedCount]}
        ListHeaderComponent={
          <View style={styles.buttonContainer}>
            {isStarted == "waiting" && (
              <>
                <CGStartCount />
                <InviteCodeBtn
                  inviteCode={roomInfo.inviteCode}
                  challengeId={roomInfo.challengeId}
                />
              </>
            )}
            {isStarted == "playing" && !isAuthed && <TodayAuthCount isTime={isTime} />}
            {isStarted == "end" && <EndingReport />}
            {isResist && isStarted == "playing" && isTime == "playing" && !isAuthed && (
              <CGAuthBtn navigation={navigation} />
            )}
            {!isResist && <ImageResistBtn navigation={navigation} roomInfo={roomInfo} />}
          </View>
        }
      ></FeedList>
    </FeedBody>
  )
}

const FeedBody = styled.View`
  margin-top: 10px;
  flex: 1;
`

const FeedList = styled.FlatList`
  flex: 1;
`

export default FeedsArea

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: "5%",
    marginBottom: 10,
  },
  buttonBox: {
    width: "100%",
    height: "15%",
    marginTop: "5%",
  },
})
