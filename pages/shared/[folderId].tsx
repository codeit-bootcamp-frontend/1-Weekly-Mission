import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import CardList from "@/components/cardList/CardList";
import FolderSearchBar from "@/components/folderSearchBar/FolderSearchBar";
import SharedFolderInfo from "@/components/folderUserInfo/SharedFolderInfo";
import defaultProfileImage from "@/images/Avatar.png";
import * as S from "@/layouts/shared/Shared.style";
import { getSharedFolder } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const SharedPage = () => {
  const router = useRouter();
  const selectedFolderId = router.query.folderId as string;
  const { data: sharedFolder, isPending } = useQuery({
    queryKey: ["shared", selectedFolderId],
    queryFn: () => getSharedFolder(selectedFolderId),
    enabled: !!selectedFolderId,
    staleTime: 60 * 1000 * 3,
    gcTime: 60 * 1000 * 3,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const folder = sharedFolder?.folder;
  const links = sharedFolder?.links;
  const owner = sharedFolder?.user;

  const filteredLinks = searchQuery
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
          {isPending ? (
            <LoadingSpinner />
          ) : (
            <>
              <FolderSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <CardList links={filteredLinks} isShared={true} folderId={selectedFolderId} />
            </>
          )}
        </S.SharedPage>
      </S.SharedPageWrap>
    </>
  );
};

export default SharedPage;
