import CardList from "../../components/Card/CardList"
import FolderFirstFrame from "../../components/Folder/FolderFirstFrame"
import FolderSecondFrame from "../../components/Folder/FolderSecondFrame"
import Searchbar from "../../components/Searchbar/Searchbar"
import * as S from "./styles.js"

const FolderContainer = ({ folderData }) => {
  return (
    <>
      <S.CardContainerBox>
        <Searchbar />
        <S.FolderContainerBox>
          <FolderFirstFrame folderData={folderData} />
        </S.FolderContainerBox>

        <S.FolderNameBox>
          <FolderSecondFrame />
        </S.FolderNameBox>

        {/* <CardList cards={folderData} /> */}
      </S.CardContainerBox>
    </>
  )
}

export default FolderContainer
