import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import { getSharedFolder, getSharedUser } from "@/api";
import { SearchBar, CardList } from "@/components/common";
import { ShareHeader } from "@/components/shared";
import { SharedFolderInterface, SharedUserInterface } from "@/types";
import styles from "./SharedPage.module.scss";

export default function SharedPage() {
  const [sharedUser, setSharedUser] = useState<SharedUserInterface>();
  const [sharedFolder, setSharedFolder] = useState<SharedFolderInterface>();
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
