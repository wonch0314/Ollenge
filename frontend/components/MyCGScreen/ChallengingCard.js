import { View } from "react-native"
import ColorSet from "../../style/ColorSet"

export default function ChallengingCard() {
  return (
    // 공간
    <View
      style={{
        backgroundColor: "red",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 카드 */}
      <View
        style={{
          width: "95%",
          height: "90%",
          backgroundColor: "white",
          borderRadius: 10,
          // shadowColor: ColorSet.navyColor(1),
        }}
      >
        {/* 내부박스 */}
        <View>
          <View></View>
          <View></View>
        </View>
      </View>
    </View>
  )
}
