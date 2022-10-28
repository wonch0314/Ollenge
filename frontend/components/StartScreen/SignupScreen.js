import { View, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import ColorSet from "../../style/ColorSet"
import AppText from "../common/AppText"
import AppBoldText from "../common/AppBoldText"
import ImagePickerContainer from "../common/ImagePicker"

function SignupScreen() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["white", `${ColorSet.paleBlueColor(100)}`]}>
      <View>
        <AppBoldText>회원 정보 설정</AppBoldText>
        <ImagePickerContainer />
      </View>
    </LinearGradient>
  )
}
export default SignupScreen

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: "center",
    alignItems: "center",
  },
})
