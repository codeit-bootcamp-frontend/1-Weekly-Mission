import { useEffect, useState, useCallback } from "react";
import styles from "./SharedPage.module.scss";
import ShareHeader from "./container/ShareHeader";
import { getSharedFolder, getSharedUser } from "@/api";
import { SharedFolderInterface, SharedUserInterface } from "@/types";
import { SearchBar, CardList } from "@/components";
import { useKeywordInput } from "@/hooks";
import Head from "next/head";

export default function SharedPage() {
  const [sharedUser, setSharedUser] = useState<SharedUserInterface>();
  const [sharedFolder, setSharedFolder] = useState<SharedFolderInterface>();
  // const { keyword, handleKeywordInput: setKeyword } = useKeywordInput("", null);
  const [keyword, setKeyword] = useState("");

  const getSharedFiles = useCallback(async () => {
    const userResult = await getSharedUser();
    const folderResult = await getSharedFolder();
    if (userResult && folderResult) {
      setSharedUser(() => {
        return { ...userResult };
      });
      setSharedFolder(() => {
        return { ...folderResult };
      });
    }
  }, []);

  useEffect(() => {
    getSharedFiles();
  }, [getSharedFiles]);

  return (
    <>
      <Head>
        <title>shared</title>
      </Head>
      <ShareHeader sharedUser={sharedUser} sharedFolder={sharedFolder} />

      <div className={styles["folder-content"]}>
        <SearchBar onChange={setKeyword} keys={keyword} />
        {keyword && (
          <div className={styles["result-section"]}>
            <h1>
              <span>{keyword}</span>으로 검색한 결과입니다.
            </h1>
          </div>
        )}
      </div>
      <div className={styles["card-list-section"]}>
        <CardList cardList={sharedFolder?.folder.links} keyword={keyword} />
      </div>
    </>
  );
}
