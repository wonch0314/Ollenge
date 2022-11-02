import * as React from "react"
import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"
import { Button, View } from "react-native"

WebBrowser.maybeCompleteAuthSession()

function GoogleLoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "740839938048-b0tlrmtd14uuvrb37agu1nunshvmcf49.apps.googleusercontent.com",
    iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    androidClientId: "740839938048-1ed9e84qce1d0hkplkv80cd78m99bngm.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  })

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response
    }
    console.log(response)
  }, [response])

  return (
    <View style={{ marginTop: 100 }}>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync()
        }}
      />
    </View>
  )
}
export default GoogleLoginScreen
