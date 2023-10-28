import * as S from "./styles"
import IMAGES from "../../assets/images"
import { useState } from "react"

const DEFAULT_FOLDER = {
  name: "전체",
  id: 0,
}

const Folder = ({ data, onSelect, selected }) => {
  const { name, id } = data

  return (
    <S.FolderBox onClick={() => onSelect(id, name)} selected={selected}>
      <S.FolderBoxText>{name}</S.FolderBoxText>
    </S.FolderBox>
  )
}

const FolderList = ({ data, handleFolderSelect }) => {
  const handleFolderClick = (folderId, folderName) => {
    setSelected(folderId)
    return handleFolderSelect(folderId, folderName)
  }
  const [selected, setSelected] = useState(0)
  return (
    <>
      <Folder
        data={DEFAULT_FOLDER}
        onSelect={handleFolderClick}
        selected={selected === 0}
      />
      {data.map((item) => (
        <Folder
          key={item.id}
          data={item}
          onSelect={handleFolderClick}
          selected={selected === item.id}
        />
      ))}
    </>
  )
}

const FolderAddBtn = () => {
  return (
    <S.FolderAddBox>
      <S.FolderAddText>폴더 추가</S.FolderAddText>
      <S.FolderAddImage src={IMAGES.folderAdd} />
      <S.FolderAddWhiteImage src={IMAGES.folderAddWhite} />
    </S.FolderAddBox>
  )
}

const FolderNavbar = ({ folderData, handleFolderSelect }) => {
  if (folderData) {
    return (
      <>
        <S.FolderListBox>
          <S.FolderListInnerBox>
            <FolderList
              data={folderData}
              handleFolderSelect={handleFolderSelect}
            />
          </S.FolderListInnerBox>
        </S.FolderListBox>
        <FolderAddBtn />
      </>
    )
  }
}

export default FolderNavbar
