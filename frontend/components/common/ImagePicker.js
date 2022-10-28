import { View, Button, Image } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useState } from "react"

function ImagePickerContainer() {
  const [image, setImage] = useState(undefined)
  const photoHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }
  return (
    <View>
      <Image style={{ width: 100, height: 100, backgroundColor: "blue" }} source={{ uri: image }} />
      <Button title="이미지 가져오기" onPress={photoHandler} />
    </View>
  )
}
export default ImagePickerContainer
