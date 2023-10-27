import Folder from "./Folder"
import * as S from "./styles"
import IMAGES from "../../assets/images"

const FolderList = ({ data }) => {
  const allData = {
    name: "전체",
    user_id: null,
  }
  return (
    <>
      <Folder data={allData} />
      {data.map((item) => (
        <Folder key={item.id} data={item} />
      ))}
    </>
  )
}

const FolderAddBtn = () => {
  return (
    <S.FolderAddBox>
      <S.FolderAddText>폴더 추가</S.FolderAddText>
      <S.FolderAddImage src={IMAGES.folderAdd} />
    </S.FolderAddBox>
  )
}

const FolderFirstFrame = ({ folderData }) => {
  if (folderData) {
    return (
      <>
        <S.FolderListBox>
          <S.FolderListInnerBox>
            <FolderList data={folderData} />
          </S.FolderListInnerBox>
        </S.FolderListBox>
        <FolderAddBtn />
      </>
    )
  }
}

export default FolderFirstFrame
