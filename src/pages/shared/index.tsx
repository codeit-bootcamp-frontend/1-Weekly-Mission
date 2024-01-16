import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getFolderInfo } from "@/api/getFolderCRUDApi";
import Layout from "@/components/Layout/Layout";
import SharedHeader from "@/components/SharedHeader/SharedHeader";
import SearchBar from "@/components/SearchBar/SearchBar";

import styles from "./SharedPage.module.scss";
import SharedCardList from "@/components/CardList/SharedCardList";

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

  // BUG - 버그..
  //   useEffect(() => {
  //     if (!userId) {
  //       router.push("/404");
  //     }
  //   }, []);

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
        <div className={styles["card-list-section"]}>
          <SharedCardList
            userId={userId as string}
            folderId={folderId}
            keyword={keyword}
          />
        </div>
      </div>
    </Layout>
  );
}
