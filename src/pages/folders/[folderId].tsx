import { useRouter } from "next/router";
import { useState } from "react";

import FolderTagList from "@/components/folder/FolderTagList/FolderTagList";
import Layout from "@/components/Layout/Layout";
import LinkAddBar from "@/components/LinkAddBar/LinkAddBar";
import SearchBar from "@/components/SearchBar/SearchBar";

import styles from "./FolderPage.module.scss";

export default function CustomFolderPage() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { folderId } = router.query;
  console.log(folderId);

  return (
    <Layout>
      <LinkAddBar />
      <div className={styles["folder-content"]}>
        <SearchBar onChange={setKeyword} keys={keyword} />
        {keyword && (
          <div className={styles["result-section"]}>
            <h1>
              <span>{keyword}</span>으로 검색한 결과입니다.
            </h1>
          </div>
        )}
        <FolderTagList currentId={folderId} />
      </div>
    </Layout>
  );
}
