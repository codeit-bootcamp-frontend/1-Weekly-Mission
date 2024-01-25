/* 전체 링크를 보여주는 folders 페이지 */

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import CardListWrapper from "@/components/CardList/Wrapper/CardListWrapper";
import FolderMaker from "@/components/folder/FolderMaker/FolderMaker";
import FolderTagList from "@/components/folder/FolderTagList/FolderTagList";
import Layout from "@/components/Layout/Layout";
import LinkAddBar from "@/components/LinkAddBar/LinkAddBar";
import SearchBar from "@/components/SearchBar/SearchBar";

import styles from "./FolderPage.module.scss";

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
        <DndProvider backend={HTML5Backend}>
          <div className={styles["card-list-section"]}>
            <CardListWrapper keyword={keyword} />
          </div>
        </DndProvider>
      </div>
    </Layout>
  );
}
