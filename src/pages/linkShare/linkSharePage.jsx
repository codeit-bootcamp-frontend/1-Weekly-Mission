import { useEffect, useState } from "react";
import * as S from "./linkSharePage.style.js";
import { getSampleUserFolder } from "pages/linkShare/linkSharePage.js";
import LinkSearchBar from "components/linkSearchBar/LinkSearchBar.jsx";
import useAsync from "hooks/useAsync.js";
import LinkCardList from "components/linkCardList/LinkCardList.jsx";

export default function LinkSharePage() {
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
      <S.FolderInfoContainer>
        {folder?.owner && (
          <>
            <S.ProfileImage
              src={folder.owner.profileImageSource}
              alt="링크 주인의 프로필 이미지"
              width="60px"
              height="60px"
            />

            <S.ProfileName>@{folder.owner.name}</S.ProfileName>
          </>
        )}
        {folder?.name && <S.FolderName>{folder?.name}</S.FolderName>}
      </S.FolderInfoContainer>

      <S.FolderContentsContainer>
        <LinkSearchBar />
        {folder?.links && (
          <LinkCardList linkList={folder.links} page={"linkShare"} />
        )}
      </S.FolderContentsContainer>
    </>
  );
}
