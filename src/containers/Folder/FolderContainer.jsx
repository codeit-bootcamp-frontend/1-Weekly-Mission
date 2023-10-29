import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import CardList from "../../components/Card/CardList"
import FolderNavbar from "../../components/Folder/FolderNavbar"
import FolderMenubar from "../../components/Folder/FolderMenubar"
import Searchbar from "../../components/Searchbar/Searchbar"
import NoLink from "./NoLink"
import { fetchGet } from "../../apis/api"
import { DEFAULT_FOLDER } from "../../utils/utils"
import * as S from "./styles.js"

const FolderContainer = ({ folderData, userId, userLinks }) => {
  const [isSelectedFolder, setIsSelectedFolder] = useState(undefined)
  const [selectedFolderName, setSelectedFolderName] = useState(
    DEFAULT_FOLDER.name
  )
  const [searchParams, setSearchParams] = useSearchParams()

  const [cards, setCards] = useState(userLinks)
  const currentFolderId = searchParams.get("folderId")

  const handleFolderSelect = async (folderId, folderName) => {
    setIsSelectedFolder(folderId)
    setSelectedFolderName(folderName)
    setSearchParams(folderId !== 0 ? { folderId } : {})

    let query
    if (folderId !== 0) {
      query = `/api/users/${userId}/links?folderId=${folderId}`
    } else query = `/api/users/${userId}/links`
    const fetchedData = await fetchGet(query)
    setCards((prev) => fetchedData.data)
  }

  const handleSearchParam = () => {
    if (currentFolderId === null) {
      setCards(userLinks)
      setSelectedFolderName(DEFAULT_FOLDER.name)
    } else {
      const selectedCards = userLinks
        .filter((card) => String(card.folder_id) === currentFolderId)
        .map((card) => card)
      setCards((prev) => selectedCards)

      const selectedFolder = folderData.find(
        (folder) => String(folder.id) === currentFolderId
      )
      setSelectedFolderName(selectedFolder.name)
      setIsSelectedFolder(currentFolderId)
    }
  }

  useEffect(() => {
    handleSearchParam()
  }, [currentFolderId])

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
                  currentFolderId={currentFolderId}
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
