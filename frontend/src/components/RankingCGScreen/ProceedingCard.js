import React from "react-native"
import { View, Dimensions, Image, Pressable } from "react-native"
import { Modal, Portal } from "react-native-paper"
import { useState } from "react"

import AppBoldText from "../common/AppBoldText"
import AppCard from "../common/AppCard"

import styled from "styled-components"
import ProceedingRank from "./ProceedingRank"
import { dh } from "./../../style/DeviceInfo"
import ColorSet from "../../style/ColorSet"
import { BoyIcon } from "../../assets/images/RankingCGScreen/RankingCGScreen"
export default function ProceedingCard(props) {
  const windowWidth = Dimensions.get("window").width
  // 카드 정보
  const startDate = props.startDate.replace(/-/g, ".").slice(2)
  const endDate = props.endDate.replace(/-/g, ".").slice(2)

  const challengeInfo = props.challengeInfo
  const presetTopic = challengeInfo.presetTopic
  const presetImg = challengeInfo.presetImg
  const participated = challengeInfo.participated
  // 레이아웃 정보
  const spaceHeight = 180
  const cardHeight = spaceHeight * 0.9
  // 카드 높이 * 70%(상단높이) * 상단높이 위쪽 깎기 * 보다 약간 작게
  // const circleHeightWidth = 200 * 0.7 * 0.95 * 0.75
  const pxSize = windowWidth * 0.05

  const [visible, setVisible] = useState(false)

  function showModal() {
    setVisible(true)
  }

  function hideModal() {
    setVisible(false)
  }

  const containerStyle = {
    backgroundColor: `${ColorSet.paleBlueColor(1)}`,
    width: "100%",
    height: dh * 1.1,
  }

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
          style={{ alignItems: "center", paddingHorizontal: "0%", paddingVertical: "0%" }}
        >
          <ProceedingRank challengeInfo={challengeInfo} hideModal={hideModal} />
        </Modal>
      </Portal>
      <View
        style={{
          height: spaceHeight,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: cardHeight,
            width: "90%",
          }}
        >
          <AppCard>
            <Pressable
              onPress={showModal}
              style={{
                flexDirection: "row",
                height: "100%",
                width: "100%",
              }}
            >
              {/* 왼쪽 => 글이 들어갈곳 */}
              <View
                style={{
                  flex: 5,
                  justifyContent: "center",
                  left: 30,
                }}
              >
                <View
                  style={{
                    height: "70%",
                  }}
                >
                  <TextRow
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <AppBoldText align={"left"} lineNumber={1} pxSize={pxSize} color="navy">
                      {presetTopic}
                    </AppBoldText>
                  </TextRow>
                  <TextRow
                    style={{
                      justifyContent: "center",
                      top: 5,
                    }}
                  >
                    <AppBoldText align={"left"} pxSize={pxSize * 0.65} color="navy">
                      {startDate} - {endDate} (한달)
                    </AppBoldText>
                  </TextRow>
                  {/* 얜 안씀 */}
                  <TextRow></TextRow>
                  <TextRow
                    style={{
                      position: "relative",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      left: -5,
                    }}
                  >
                    {/* 버튼 자체 => styled component */}
                    {/* <Button
                      style={{
                        backgroundColor: ColorSet.navyColor(1),
                      }}
                    >
                      <ButtonInner>
                        <View
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: "40%",
                          }}
                        >
                          <BoyIcon />
                        </View>
                        <View
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: "60%",
                            right: 3,
                          }}
                        >
                          <AppBoldText color="white" pxSize={65 * 0.18}>
                            몇명
                          </AppBoldText>
                        </View>
                      </ButtonInner>
                    </Button> */}
                    {participated && (
                      <Button
                        style={{
                          backgroundColor: ColorSet.orangeColor(0.7),
                        }}
                      >
                        <ButtonInner
                          style={{
                            justifyContent: "center",
                          }}
                        >
                          <AppBoldText color="white" pxSize={65 * 0.18}>
                            참여 중
                          </AppBoldText>
                        </ButtonInner>
                      </Button>
                    )}
                  </TextRow>
                </View>
              </View>
              {/* 오른쪽 => 이미지만 들어갈곳 */}
              {/* 각 이미지는, 사이즈 설정을 다르게 해야 해서, 이미지 모듈 파일에서 직접 조정 */}
              <View
                style={{
                  flex: 3.5,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    opacity: 0.5,
                  }}
                >
                  <Image
                    source={{ uri: presetImg }}
                    style={{ width: "100%", height: "100%", position: "absolute" }}
                    resizeMode={"contain"}
                  ></Image>
                </View>
              </View>
            </Pressable>
          </AppCard>
        </View>
      </View>
    </>
  )
}

const TextRow = styled.View`
  height: 25%;
`

const Button = styled.View`
  width: 65px;
  border-radius: 20px;
  height: 100%;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
`

const ButtonInner = styled.View`
  width: 65%;
  height: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
