import React from "react"

import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"
import { View } from "react-native"
import styled from "styled-components/native"

import { GoogleLogo } from "../../assets/images"
import AppText from "../common/AppText"

WebBrowser.maybeCompleteAuthSession()

function GoogleButton(props) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "740839938048-b0tlrmtd14uuvrb37agu1nunshvmcf49.apps.googleusercontent.com",
    iosClientId: "740839938048-iajk03amiojgqj13so5o9tq915fli6h8.apps.googleusercontent.com",
    androidClientId: "740839938048-1ed9e84qce1d0hkplkv80cd78m99bngm.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  })

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response
      const accessToken = response.authentication.accessToken
      console.log(accessToken)
      props.startScreenChange()
    }
  }, [response])

  return (
    <ButtonContainer>
      <ButtonInnerContainer
        disabled={!request}
        onPress={() => {
          promptAsync()
        }}
      >
        <View style={{ width: 40, height: 40, flex: 1 }}>
          <GoogleLogo />
        </View>
        <View style={{ flex: 5, alignItems: "center" }}>
          <AppText color={"black"}>구글 로그인</AppText>
        </View>
      </ButtonInnerContainer>
    </ButtonContainer>
  )
}
export default GoogleButton

const ButtonContainer = styled.View`
  background: white;
  width: 70%;
  margin-bottom: 5%;
  display: flex;
  border-radius: 12px;
  padding: 7px 10px;
  z-index: 1000;
`

const ButtonInnerContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
  width: 100%;
`
