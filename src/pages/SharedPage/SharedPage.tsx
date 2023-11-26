import { useEffect, useState, useCallback } from "react";
import styles from "./SharedPage.module.scss";
import ShareHeader from "./components/ShareHeader/ShareHeader";
import { getSharedFolder, getSharedUser } from "src/apis";
import Layout from "../Layout/Layout";
import { SharedFolderInterface, SharedUserInterface } from "src/types";
import { SearchBar, CardList } from "src/commons/components";
import { useKeywordInput } from "src/hooks";

function SharedPage() {
  const [sharedUser, setSharedUser] = useState<SharedUserInterface>();
  const [sharedFolder, setSharedFolder] = useState<SharedFolderInterface>();
  const { keyword, handleKeywordInput: setKeyword } = useKeywordInput("");

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
    <Layout isSticky={true}>
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
    </Layout>
  );
}

export default SharedPage;
