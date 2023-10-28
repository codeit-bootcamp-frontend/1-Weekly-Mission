import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import CardList from "../../components/Card/CardList"
import FolderNavbar from "../../components/Folder/FolderNavbar"
import FolderMenubar from "../../components/Folder/FolderMenubar"
import Searchbar from "../../components/Searchbar/Searchbar"
import { useFetchUserLinks } from "../../apis/fetch"
import { fetchGet } from "../../apis/api"
import NoLink from "./NoLink"
import * as S from "./styles.js"

const FolderContainer = ({ folderData, userId }) => {
  const [isSelectedFolder, setIsSelectedFolder] = useState(undefined)
  const [selectedFolderName, setSelectedFolderName] = useState("전체")
  const [searchParams, setSearchParams] = useSearchParams()

  const [userLinks, refetchUserLinks] = useFetchUserLinks(
    userId,
    isSelectedFolder
  )
  const { loading, data } = userLinks

  const [cards, setCards] = useState(data?.data)
  const currentFolderId = searchParams.get("folderId")

  useEffect(() => {
    setCards(data?.data)
  }, [loading])

  const handleFolderSelect = async (folderId, folderName) => {
    setIsSelectedFolder(folderId)
    setSelectedFolderName(folderName)
    setSearchParams(folderId !== 0 ? { folderId } : {})
    refetchUserLinks(userId, folderId)
    if (folderId !== 0) {
      const a = await fetchGet(
        `/api/users/${userId}/links?folderId=${folderId}`
      )

      setCards(a.data)
    } else {
      const b = await fetchGet(`/api/users/${userId}/links`)
      console.log(b)
      setCards(b.data)
    }
  }

  useEffect(() => {
    refetchUserLinks(userId, currentFolderId)
  }, [currentFolderId])

  console.log(currentFolderId)

  return (
    <>
      <S.CardContainerBox>
        <Searchbar />

        {cards && cards.length === 0 ? (
          <NoLink />
        ) : (
          cards && (
            <>
              <S.FolderContainerBox>
                <FolderNavbar
                  folderData={folderData}
                  handleFolderSelect={handleFolderSelect}
                />
              </S.FolderContainerBox>

              <S.FolderNameBox>
                <FolderMenubar selectedFolderName={selectedFolderName} />
              </S.FolderNameBox>

              <CardList cards={cards} />
            </>
          )
        )}
      </S.CardContainerBox>
    </>
  )
}

export default FolderContainer
