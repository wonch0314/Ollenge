import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import PageBase, { fontStyles } from "./PageBase"
import ImagePicker from "../common/ImagePicker"
import TextInputContainer from "../common/TextInputContainer"

export default function Page1({ info, setInfo }) {
  const [name, setName] = useState(info.challengeName)
  const [img, setImg] = useState(info.challengeImg)
  const [baseImg, setBaseImg] = useState("")
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setInfo(() => {
      return { ...info, challengeName: name }
    })
  }, [name, setName])

  useEffect(() => {
    setDisabled(!(name !== "" && img !== ""))
  }, [name, img, disabled, setDisabled])

  return (
    <PageBase toNext={"Page2"} disabled={disabled}>
      <ImagePicker imageUri={img} imageUriHandler={setImg} imageBase64Handler={setBaseImg} />
      <View style={{ width: "100%" }}>
        <Text style={frameStyles.inputArea}>팀 이름</Text>
        <View style={{ width: "100%", padding: 12 }}>
          <TextInputContainer inputText={name} inputHandler={setName} />
        </View>
      </View>
    </PageBase>
  )
}

const frameStyles = {
  inputArea: {
    ...fontStyles.HyeminBold({ size: 7 }),
    textAlign: "center",
  },
}
