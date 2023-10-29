import { useQuery } from "@tanstack/react-query";
import ButtonList from "components/button/serviceWithIcon/buttonList";
import LinkCardList from "components/card/link/LinkCardList";
import LinkCardListAll from "components/card/link/LinkCardListAll";
import AddLinkBar from "components/link/AddLinkBar";
import SearchBar from "components/search/SearchBar";
import { getUserFolderList } from "libs/apis/folder";
import { MouseEvent, useState } from "react";
import styles from "styles/modules/folder.module.css";

function Folder() {
  const { data } = useQuery<UserFolder>({
    queryKey: ["folder"],
    queryFn: getUserFolderList,
  });

  const [content, setContent] = useState<string>("전체");
  const [folderById, setFolderById] = useState<number>(0);

  const handleFolderList = (e: MouseEvent<HTMLButtonElement>) => {
    setContent(e.currentTarget.innerText);
  };

  const handleFolderById = (id: number) => {
    setFolderById(id);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.headerInWrapper}>
          <AddLinkBar />
        </div>
      </header>
      <div className={styles.itemWrapper}>
        <div className={styles.itemInWrapper}>
          <SearchBar />
          <div className={styles.categoryWrapper}>
            <button
              className={
                content === "전체"
                  ? `${styles.selectEachCategoryWrapper}`
                  : `${styles.eachCategoryWrapper}`
              }
              onClick={(e) => {
                handleFolderList(e);
              }}
            >
              <span className={`${styles.content}`}>전체</span>
            </button>

            {data?.data.map((item) => (
              <button
                className={
                  content === item.name
                    ? `${styles.selectEachCategoryWrapper}`
                    : `${styles.eachCategoryWrapper}`
                }
                key={item.id}
                onClick={(e) => {
                  handleFolderById(item.id);
                  handleFolderList(e);
                }}
              >
                <span className={`${styles.content}`}>{`${item.name}`}</span>
              </button>
            ))}
          </div>
          <div className={styles.cardTitleWrapper}>
            <span className={styles.cardTitle}>{content}</span>
          </div>
          {content === "전체" ? (
            <div className={styles.buttonListWrapper}>
              <ButtonList />
            </div>
          ) : (
            ""
          )}
          <div>
            <div className={styles.cardListWrapper}>
              {/* {정보가 없을 경우 ? (
                <span className={styles.content}>저장된 링크가 없습니다</span>
              ) : (
                <LinkCardList folderId={folderById} />
              )} */}
              {content === "전체" ? (
                <>
                  <LinkCardListAll />
                </>
              ) : (
                <LinkCardList folderId={folderById} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
