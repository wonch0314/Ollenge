import React, { Dimensions, Image } from "react-native"
import AppCard from "../common/AppCard"
import styled from "styled-components"
import AppBoldText from "../../components/common/AppBoldText"
import AppText from "../../components/common/AppText"
import defaultImage from "../../assets/images/default-image.png"
import { CommentIcon } from "../../assets/images"
const windowWidth = Dimensions.get("window").width

const FeedItem = (props) => {
  const defaultImageUri = Image.resolveAssetSource(defaultImage).uri
  return (
    <FeedDistrict>
      <CardView>
        <AppCard>
          <InnerCard>
            <ContentCard>
              <TitleRow>
                <UserImageView elevation={3}>
                  <Image
                    source={{ uri: defaultImageUri }}
                    style={{ width: "100%", height: "100%", borderRadius: 45 }}
                    resizeMode="cover"
                  />
                </UserImageView>
                <UserView>
                  <UserNameView>
                    <AppBoldText align={"left"} pxSize={20}>
                      차노차노
                    </AppBoldText>
                  </UserNameView>
                  <DateTimeView>
                    <AppBoldText align={"left"} pxSize={15}>
                      차노차노
                    </AppBoldText>
                  </DateTimeView>
                </UserView>
              </TitleRow>
              <ImageRow>
                <FeedImage elevation={7}>
                  <Image
                    source={{ uri: defaultImageUri }}
                    style={{ width: "100%", height: "100%", borderRadius: 20 }}
                    resizeMode="cover"
                  />
                </FeedImage>
              </ImageRow>
              <TextRow>
                <FeedTextRow>
                  <AppText
                    style={{
                      width: "100%",
                    }}
                    pxSize={18}
                    lineNumber={1}
                    align={"left"}
                  >
                    오늘 챌린지 인증 완료!
                  </AppText>
                </FeedTextRow>
                <FeedCommentRow>
                  <CommentImage>
                    <CommentIcon />
                  </CommentImage>
                  <AppText pxSize={14} color="lightBlue">
                    댓글 2개 모두 보기
                  </AppText>
                </FeedCommentRow>
              </TextRow>
            </ContentCard>
          </InnerCard>
        </AppCard>
      </CardView>
    </FeedDistrict>
  )
}

export default FeedItem

const FeedDistrict = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 350px;
`
const CardView = styled.View`
  width: 90%;
  height: 90%;
`

const InnerCard = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const ContentCard = styled.View`
  width: 90%;
  height: 90%;
  justify-content: space-between;
  align-items: center;
`
const TitleRow = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`
const UserImageView = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`

const UserView = styled.View`
  height: 90%;
  width: ${windowWidth * 0.9 * 0.9 - 60}px;
  left: 10px;
`
const UserNameView = styled.View`
  justify-content: flex-end;
`

const DateTimeView = styled.View`
  justify-content: flex-start;
`

const ImageRow = styled.View`
  height: 170px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const FeedImage = styled.View`
  height: 170px;
  border-radius: 20px;
  width: 100%;
`

const TextRow = styled.View`
  padding-left: 5px;
  padding-right: 5px;
  height: 40px;
  width: 100%;
  justify-content: space-between;
`

const FeedTextRow = styled.View`
  flex: 5;
  justify-content: center;
`

const FeedCommentRow = styled.View`
  top: 3px;
  width: 100%;
  flex: 5;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const CommentImage = styled.View`
  width: 20px;
  height: 100%;
`
