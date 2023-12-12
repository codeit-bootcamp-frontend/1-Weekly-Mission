import { useState } from "react";
import Head from "next/head";
import { getSharedFolder, getSharedUser } from "@/api";
import { SearchBar, CardList } from "@/components/common";
import { ShareHeader } from "@/components/shared";
import { SharedFolderInterface, SharedUserInterface } from "@/types";
import styles from "./SharedPage.module.scss";

// TODO - 지금은 shared user id와 folder id가 정해져있어서 getServerSideProps가 받는 인자가 없지만, 나중에 확장성을 위해 context 인자를 받는 식으로도 고쳐볼 것.
export async function getServerSideProps() {
  let sharedUser: SharedUserInterface = await getSharedUser();
  let sharedFolder: SharedFolderInterface = await getSharedFolder();
  return {
    props: {
      sharedUser,
      sharedFolder,
    },
  };
}

export default function SharedPage({
  sharedUser,
  sharedFolder,
}: {
  sharedUser: SharedUserInterface;
  sharedFolder: SharedFolderInterface;
}) {
  const [keyword, setKeyword] = useState("");
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
