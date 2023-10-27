import { useFetchUserLinks } from "../../apis/fetch.js"
import * as S from "./styles.js"

const Folder = ({ data }) => {
  const { name, user_id } = data

  const fetchedLinks = useFetchUserLinks(user_id)
  console.log("이거 어떻게 옮기지?", fetchedLinks)
  return (
    <S.FolderBox>
      <S.FolderBoxText>{name}</S.FolderBoxText>
    </S.FolderBox>
  )
}

export default Folder
