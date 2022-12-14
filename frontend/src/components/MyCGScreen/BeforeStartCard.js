import React from "react-native"
import { View, Text, Dimensions, Image } from "react-native"
import ColorSet from "../../style/ColorSet"
import AppText from "../common/AppText"
import AppBoldText from "../common/AppBoldText"
import AppCard from "../common/AppCard"
import { ProgressBar, Badge } from "react-native-paper"
import { ExampleIcon, RunningIcon } from "../../assets/images/MyCGScreen/MyCGScreen"
import defaultImage from "../../assets/images/default-image.png"

export default function BeforeStartCard(props) {
  const defaultImageUri = Image.resolveAssetSource(defaultImage).uri

  const windowWidth = Dimensions.get("window").width
  const challengeInfo = props.challengeInfo

  const isChallenge = props.challengeInfo.isChallenge
  const title = props.challengeInfo.title
  const teamName = props.challengeInfo.teamName
  const memberNumber = props.challengeInfo.memberNumber
  const progress = props.challengeInfo.progress
  // const startDate = props.challengeInfo.startDate
  const endDate = props.challengeInfo.endDate
  // 카드 높이 * 70%(상단높이) * 상단높이 위쪽 깎기 * 보다 약간 작게
  const circleHeightWidth = 200 * 0.7 * 0.95 * 0.75
  const func = props.func
  const nowDate = new Date().getTime()
  const startDate = new Date(challengeInfo.startDate).getTime()
  const dDate = Math.ceil((startDate - nowDate) / 1000 / 60 / 60 / 24)

  const pxSize = windowWidth * 0.045
  return (
    <View
      style={{
        backgroundColor: "#edf8ff",
        height: parseInt(200),
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 200 * 0.9,
          width: "90%",
        }}
      >
        <AppCard func={func}>
          {/* 상단  */}
          <View
            style={{
              flex: 7,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            {/* 전체 넓이 지정 View */}
            <View
              style={{
                height: "85%",
                width: windowWidth * 0.8,
                flexDirection: "row",
              }}
            >
              {/* 왼쪽 */}
              <View
                style={{
                  flex: 3,
                }}
              >
                {/* 사진 들어가는 똥글뱅이 */}
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: circleHeightWidth,
                    // 카드 높이 * 70%(상단높이) * 상단높이 위쪽 깎기 * 보다 약간 작게
                    width: circleHeightWidth,
                    height: circleHeightWidth,
                    zIndex: 10,
                    elevation: 7,
                  }}
                >
                  {/* 나중에 여기에도 예시파일처럼 직접 borderRadius 먹여주어야 함 */}
                  <Image
                    source={
                      challengeInfo.challengeImg
                        ? { uri: challengeInfo.challengeImg }
                        : { uri: defaultImageUri }
                    }
                    style={{ height: "100%", width: "100%", borderRadius: 200 * 0.7 * 0.95 * 0.75 }}
                    resizeMode="cover"
                  />
                </View>
                {/* 사진 옆 뿔 */}
              </View>
              {/* 오른쪽 */}
              <View
                style={{
                  flex: 6,
                  // backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    paddingTop: circleHeightWidth * 0.1,
                  }}
                >
                  <AppBoldText lineNumber={1}>{challengeInfo.challengeTopic}</AppBoldText>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: circleHeightWidth * 0.1,
                  }}
                >
                  <AppText size="2">{challengeInfo.challengeName}</AppText>
                  {/* <View
                    style={{
                      width: 200 * 0.7 * 0.95 * 0.9 * 0.6 * 0.5,
                      height: 200 * 0.7 * 0.95 * 0.9 * 0.6 * 0.5,
                      borderRadius: 200 * 0.7 * 0.95 * 0.9 * 0.6 * 0.5,
                      marginLeft: 5,
                      backgroundColor: "#FCBE32",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  > */}
                  <Badge
                    size={35}
                    style={{
                      marginLeft: 5,
                      backgroundColor: ColorSet.yellowColor(1),
                    }}
                  >
                    <AppText size="2">{challengeInfo.peopleCnt}명</AppText>
                  </Badge>
                  {/* </View> */}
                </View>
              </View>
            </View>
          </View>
          {/* 하단 */}
          <View
            style={{
              flex: 3,
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  width: windowWidth * 0.8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    bottom: 4,
                  }}
                >
                  <RunningIcon
                    style={{
                      position: "absolute",
                    }}
                  />
                </View>

                <AppBoldText pxSize={15}>시작까지 D-{dDate}</AppBoldText>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                width: windowWidth * 0.8,
              }}
            >
              <ProgressBar style={{}} progress={0} color="grey" />
            </View>
          </View>
        </AppCard>
      </View>
    </View>
  )
}
