import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import CardList from "@/components/cardList/CardList";
import FolderSearchBar from "@/components/folderSearchBar/FolderSearchBar";
import SharedFolderInfo from "@/components/folderUserInfo/SharedFolderInfo";
import useGetSharedFolder from "@/hooks/useGetSharedFolder";
import defaultProfileImage from "@/images/Avatar.png";
import * as S from "@/layouts/shared/Shared.style";
import { MappedLink } from "@/types/type";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const SharedPage = () => {
  const router = useRouter();
  const selectedFolderId = router.query.folderId as string;
  const { data, loading, error } = useGetSharedFolder(selectedFolderId);
  const [searchQuery, setSearchQuery] = useState("");
  const { folder, owner, links } = data;
  const filteredLinks: MappedLink[] = searchQuery
    ? (links ?? []).filter(
        (link) =>
          link?.url?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : links ?? [];

  return (
    <>
      <Head>
        <title>{owner && folder ? `${owner?.name}님의 ${folder?.name} 폴더 - Linkbrary` : "Linkbrary"}</title>
      </Head>
      {owner && folder ? (
        <SharedFolderInfo profileImage={owner.profileImageSource} ownerName={owner.name} folderName={folder.name} />
      ) : (
        <SharedFolderInfo
          profileImage={defaultProfileImage.src}
          ownerName="존재하지 않는 사용자"
          folderName="존재하지 않는 폴더"
        />
      )}
      <S.SharedPageWrap>
        <S.SharedPage>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <FolderSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <CardList links={filteredLinks} isShared={true} />
            </>
          )}
        </S.SharedPage>
      </S.SharedPageWrap>
    </>
  );
};

export default SharedPage;
