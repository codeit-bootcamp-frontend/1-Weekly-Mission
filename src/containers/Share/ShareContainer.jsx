import Searchbar from "../../components/Searchbar/Searchbar.jsx"
import CardList from "../../components/Card/CardList.jsx"
import * as S from "./styles.js"

const Owner = ({ items }) => {
  const { name, owner } = items

  return (
    <S.OwnerContainerBox>
      <S.OwnerInnerContainerBox>
        <img src={owner.profileImageSource} alt="User Profile" />
        <S.OwnerNameParagraph>@{owner.name}</S.OwnerNameParagraph>
        <S.OwnerFolderParagraph>{name}</S.OwnerFolderParagraph>
      </S.OwnerInnerContainerBox>
    </S.OwnerContainerBox>
  )
}

const ShareContainer = ({ shareData }) => {
  const { folder } = shareData
  return (
    <>
      <Owner items={folder} />
      <S.ShareBox>
        <Searchbar />
        <CardList cards={folder?.links} />
      </S.ShareBox>
    </>
  )
}

export default ShareContainer
