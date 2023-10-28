import * as S from "./styles"
import IMAGES from "../../assets/images"

const DEFAULT_FOLDER = {
  name: "전체",
  id: 0,
}

const Folder = ({ data, onSelect }) => {
  const { name, id } = data

  return (
    <S.FolderBox onClick={() => onSelect(id, name)}>
      <S.FolderBoxText>{name}</S.FolderBoxText>
    </S.FolderBox>
  )
}

const FolderList = ({ data, handleFolderClick }) => {
  return (
    <>
      <Folder data={DEFAULT_FOLDER} onSelect={handleFolderClick} />
      {data.map((item) => (
        <Folder key={item.id} data={item} onSelect={handleFolderClick} />
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

const FolderNavbar = ({ folderData, handleFolderClick }) => {
  if (folderData) {
    return (
      <>
        <S.FolderListBox>
          <S.FolderListInnerBox>
            <FolderList
              data={folderData}
              handleFolderClick={handleFolderClick}
            />
          </S.FolderListInnerBox>
        </S.FolderListBox>
        <FolderAddBtn />
      </>
    )
  }
}

export default FolderNavbar
