import Searchbar from "../../components/Searchbar/Searchbar.jsx"
import CardList from "../../components/Card/CardList.jsx"
import {
  OwnerContainerBox,
  OwnerFolderParagraph,
  OwnerImage,
  OwnerInnerContainerBox,
  OwnerNameParagraph,
  ShareBox,
} from "./styles.js"

const Owner = ({ items }) => {
  const { name, owner } = items

  return (
    <OwnerContainerBox>
      <OwnerInnerContainerBox>
        <OwnerImage src={owner.profileImageSource} alt="사용자 이미지" />
        <OwnerNameParagraph>@{owner.name}</OwnerNameParagraph>
        <OwnerFolderParagraph>{name}</OwnerFolderParagraph>
      </OwnerInnerContainerBox>
    </OwnerContainerBox>
  )
}

const Share = ({ shareData }) => {
  const { folder } = shareData
  return (
    <>
      <Owner items={folder} />
      <ShareBox>
        <Searchbar />
        <CardList cards={folder?.links} />
      </ShareBox>
    </>
  )
}

export default Share
