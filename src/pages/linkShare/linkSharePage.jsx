import { useEffect, useState } from "react";
import * as S from "./linkSharePage.style.js";
import { getSampleUserFolder } from "pages/linkShare/linkSharePage.js";
import LinkSearchBar from "components/linkSearchBar/LinkSearchBar.jsx";
import useAsync from "hooks/useAsync.js";
import { useUserProfileContext } from "contexts/UserProfileContext";
import LinkCardList from "components/linkCardList/LinkCardList.jsx";

export default function LinkSharePage() {
  const { userProfile } = useUserProfileContext();

  const [folder, setFolder] = useState([]);

  const [isLoadingFolder, loadingErrorFolder, getSampleUserFolderAsync] =
    useAsync(getSampleUserFolder);

  async function handleFolder() {
    const folder = await getSampleUserFolderAsync();

    if (!folder) return;
    setFolder(folder);
  }

  useEffect(() => {
    handleFolder();
  }, []);

  return (
    <>
      {userProfile && (
        <S.FolderInfoContainer>
          <S.ProfileImage
            src={userProfile.image_source}
            alt="유저 프로필 이미지"
            width="60px"
            height="60px"
          />

          <S.ProfileName>@{userProfile.name}</S.ProfileName>

          <S.FolderName>{folder.name}</S.FolderName>
        </S.FolderInfoContainer>
      )}

      <S.FolderContentsContainer>
        <LinkSearchBar />
        {folder?.links && (
          <LinkCardList linkList={folder.links} page={"linkShare"} />
        )}
      </S.FolderContentsContainer>
    </>
  );
}
