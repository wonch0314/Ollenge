import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

const device = {
  dw: width,
  dh: height,
}

export default device
