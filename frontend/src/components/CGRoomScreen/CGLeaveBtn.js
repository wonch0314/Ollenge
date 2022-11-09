import React from "react"

import { IconButton } from "react-native-paper"

import ColorSet from "../../style/ColorSet"
import { RFPercentage } from "react-native-responsive-fontsize"

function CGLeaveBtn() {
  return (
    <IconButton
      icon="camera"
      size={RFPercentage(15)}
      mode="contained"
      iconColor={`${ColorSet.paleBlueColor(1)}`}
      containerColor={`${ColorSet.navyColor(1)}`}
    />
  )
}
export default CGLeaveBtn
