import { useState } from "react";

import FolderMaker from "@/components/folder/FolderMaker/FolderMaker";
import FolderTagList from "@/components/folder/FolderTagList/FolderTagList";
import Layout from "@/components/Layout/Layout";
import LinkAddBar from "@/components/LinkAddBar/LinkAddBar";
import SearchBar from "@/components/SearchBar/SearchBar";

import styles from "./FolderPage.module.scss";
import CardList from "@/components/CardList/CardList";

export default function FolderPage() {
  const [keyword, setKeyword] = useState("");

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

        <FolderTagList />
        <FolderMaker />
        <div className={styles["card-list-section"]}>
          <CardList keyword={keyword} />
        </div>
      </div>
    </Layout>
  );
}
