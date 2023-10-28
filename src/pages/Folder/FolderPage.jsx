import { useState } from "react"
import {
  useFetchUserFolders,
  useFetchUserLinks,
  useFetchUserProfile,
} from "../../apis/fetch"
import Addlink from "../../components/Addlink/Addlink"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import FolderContainer from "../../containers/Folder/FolderContainer"
import * as S from "../styles.js"

const DEFAULT_USER_ID = 1

const FolderPage = () => {
  const userProfile = useFetchUserProfile(DEFAULT_USER_ID)
  const userFolders = useFetchUserFolders(DEFAULT_USER_ID)

  return (
    <>
      <S.StyledHeader>
        {userProfile?.data?.data && (
          <Navbar userData={userProfile?.data?.data} />
        )}
        <Addlink />
      </S.StyledHeader>
      {userFolders?.data?.data && (
        <FolderContainer
          folderData={userFolders?.data?.data}
          userId={DEFAULT_USER_ID}
        />
      )}
      <Footer />
    </>
  )
}

export default FolderPage
