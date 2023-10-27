import * as S from "./styles.js"
import IMAGES from "../../assets/images.js"

const FolderOptionsItem = ({ item }) => {
  const { name, optionImg } = item
  return (
    <S.FolderOptionItemBox>
      <S.FolderOptionItemImage src={optionImg} />
      <S.FolderOptionItemParagraph>{name}</S.FolderOptionItemParagraph>
    </S.FolderOptionItemBox>
  )
}

const FolderOptions = () => {
  // "공유", "이름 변경", "삭제"
  const optionNames = [
    {
      id: 1,
      name: "공유",
      optionImg: IMAGES.share,
    },
    {
      id: 2,
      name: "이름 변경",
      optionImg: IMAGES.pen,
    },
    {
      id: 3,
      name: "삭제",
      optionImg: IMAGES.trashcan,
    },
  ]

  return (
    <S.FolderOptionsBox>
      {optionNames.map((item) => (
        <FolderOptionsItem key={item.id} item={item} />
      ))}
    </S.FolderOptionsBox>
  )
}

const FolderSecondFrame = () => {
  return (
    <>
      <S.FolderNameHeader>유용한 글 - 여기 fetch해야 함</S.FolderNameHeader>
      <FolderOptions />
    </>
  )
}

export default FolderSecondFrame
