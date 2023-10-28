import { useEffect, useState } from "react";

import * as S from "./linkSharePage.style.js";
import LinkCardComponent from "components/linkCard/LinkCard.jsx";
import {
  getSampleUserFolder,
  getSampleUserProfile,
} from "pages/linkShare/linkSharePage.js";
import LinkSearchBarComponent from "components/linkSearchBar/LinkSearchBar.jsx";
import useAsync from "hooks/useAsync.js";

export default function LinkSharePage() {
  const [folder, setFolder] = useState([]);
  const [profile, setProfile] = useState({});
  const [isLoadingProfile, loadingErrorProfile, getSampleUserProfileAsync] =
    useAsync(getSampleUserProfile);
  const [isLoadingFolder, loadingErrorFolder, getSampleUserFolderAsync] =
    useAsync(getSampleUserFolder);

  async function handleFolder() {
    const folder = await getSampleUserFolderAsync();

    if (!folder) return;
    setFolder(folder);
  }

  async function handleProfile() {
    const profile = await getSampleUserProfileAsync();
    if (!profile) return;
    setProfile(profile);
  }

  useEffect(() => {
    handleProfile();
    handleFolder();
  }, []);

  return (
    <>
      {!loadingErrorProfile && (
        <S.FolderInfoContainer>
          <S.ProfileImage
            src={profile.profileImageSource}
            alt="유저 프로필 이미지"
            width="60px"
            height="60px"
          />

          <S.ProfileName>@{profile.name}</S.ProfileName>

          <S.FolderName>{folder.name}</S.FolderName>
        </S.FolderInfoContainer>
      )}

      <S.FolderContentsContainer>
        <LinkSearchBarComponent />
        <S.LinkCardListContainer>
          {folder?.links?.map((cardData) => {
            return (
              <LinkCardComponent
                key={cardData.id}
                cardData={cardData}
                isSelected={false}
              />
            );
          })}
        </S.LinkCardListContainer>
      </S.FolderContentsContainer>
    </>
  );
}
