import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import PageBase, { fontStyles } from "./PageBase"

import { Button } from "react-native-paper"

// import { ko, TimePickerModal } from "react-native-paper-dates"

// const TimePickerPage = () => {
//   const [visible, setVisible] = React.useState(false)
//   const onDismiss = React.useCallback(() => {
//     setVisible(false)
//   }, [setVisible])

//   const onConfirm = React.useCallback(
//     ({ hours, minutes }) => {
//       setVisible(false)
//       console.log({ hours, minutes })
//     },
//     [setVisible],
//   )

//   return (
//     <>
//       <TimePickerModal
//         visible={visible}
//         onDismiss={onDismiss}
//         onConfirm={onConfirm}
//         hours={12} // default: current hours
//         minutes={14} // default: current minutes
//         label="Select time" // optional, default 'Select time'
//         uppercase={false} // optional, default is true
//         cancelLabel="Cancel" // optional, default: 'Cancel'
//         confirmLabel="Ok" // optional, default: 'Ok'
//         animationType="fade" // optional, default is 'none'
//         locale="ko" // optional, default is automically detected by your system
//       />
//       <Button onPress={() => setVisible(true)}>Pick time</Button>
//     </>
//   )
// }

export default function Page6() {
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  useEffect(() => {
    console.log(startTime)
  }, [startTime, setStartTime])
  return (
    <>
      <PageBase toNext={"Page7"}>
        {/* <Text style={fontStyles.HyeminBold({ size: 9 })}>챌린지 인증 시간 설정</Text> */}
        <Text style={fontStyles.HyeminBold({ size: 4 })}>
          챌린지 인증 시간을 입력해주세요.{"\n"}해당 B시간이 지나가면 그날 인증은 불가능합니다.
        </Text>
        <View flex={1} style={{ width: "100%" }}>
          <Text>인증 시작 시간: {startTime}</Text>
          <Text>인증 마감 시간: {endTime}</Text>
        </View>
      </PageBase>
    </>
  )
}
