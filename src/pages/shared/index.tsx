/* 공유받은 폴더를 보여주는 shared 페이지 */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { getFolderInfo } from "@/api/getFolderCRUDApi";
import SharedCardListWrapper from "@/components/CardList/Wrapper/SharedCardListWrapper";
import Layout from "@/components/Layout/Layout";
import SharedHeader from "@/components/SharedHeader/SharedHeader";
import SearchBar from "@/components/SearchBar/SearchBar";
import useToast from "@/hooks/useToast";

import styles from "./SharedPage.module.scss";

export default function SharedPage() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { userId, folderId } = router.query;

  const { data: folderData } = useQuery({
    queryKey: ["folder-info", folderId],
    queryFn: () => getFolderInfo(folderId as string),
    enabled: !!folderId,
    retry: 3,
  });

  useEffect(() => {
    if (typeof folderId !== "string" && typeof folderId !== "undefined") {
      router.replace("/folders");
      useToast(false, "잘못된 경로입니다!");
    }
  }, [folderId, router]);

  if (typeof folderId !== "string") {
    return null;
  }

  return (
    <Layout>
      <SharedHeader
        userId={userId as string}
        folderTitle={folderData ? folderData[0].name : "전체"}
      />
      <div className={styles["folder-content"]}>
        <SearchBar onChange={setKeyword} keys={keyword} />
        {keyword && (
          <div className={styles["result-section"]}>
            <h1>
              <span>{keyword}</span>으로 검색한 결과입니다.
            </h1>
          </div>
        )}
        <DndProvider backend={HTML5Backend}>
          <div className={styles["card-list-section"]}>
            <SharedCardListWrapper
              userId={userId as string}
              folderId={folderId}
              keyword={keyword}
            />
          </div>
        </DndProvider>
      </div>
    </Layout>
  );
}
