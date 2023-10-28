import CardList from "../../components/Card/CardList"
import FolderNavbar from "../../components/Folder/FolderNavbar"
import FolderMenubar from "../../components/Folder/FolderMenubar"
import Searchbar from "../../components/Searchbar/Searchbar"
import * as S from "./styles.js"

const FolderContainer = ({ folderData }) => {
  return (
    <>
      <S.CardContainerBox>
        <Searchbar />
        <S.FolderContainerBox>
          <FolderNavbar folderData={folderData} />
        </S.FolderContainerBox>

        <S.FolderNameBox>
          <FolderMenubar />
        </S.FolderNameBox>

        {/* <CardList cards={folderData} /> */}
      </S.CardContainerBox>
    </>
  )
}

export default FolderContainer
