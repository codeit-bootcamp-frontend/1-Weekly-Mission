import React, { useContext } from "react";
import BookMark from "@/components/BookMark";
import Search from "@/components/Search";
import Cards from "@/components/Cards";

import { useFetch, useQueryFetch } from "@/hooks/useFetch";
import { folders } from "@/dataType/dataType";
import { AccountContext } from "@/contexts/AccountContext";
import { useRouter } from "next/router";
import styles from "./shared.module.css";

interface QueryType {
  user?: string | string[];
  folder?: string | string[];
}

const Shared = () => {
  const { account, errorMessage, searchResult, setSearchResult } =
    useContext(AccountContext);
  const router = useRouter();
  const { user: userId, folder: folderNumber }: QueryType = router.query;

  const { data: folderDataObject } = useFetch(
    `users/${userId}/folders`,
    Number(userId)
  );
  /* folderNumber 값이 없을경우 (공유하기만 가능) */
  if (!folderNumber) {
    location.replace("/folder");
  }

  /* 즐겨찾기 데이터번호만 가져오는 함수 */
  const getBookmarkNumber = () => {
    if (!folderDataObject) return;
    const { data }: { data: folders[] } = folderDataObject;

    const bookmarkNumber = data?.filter((list) => {
      if (list?.id == folderNumber) {
        return list?.id;
      }
    });
    return bookmarkNumber[0];
  };

  const { data: personalfolderData, errorMessage: linksErrorMessage } =
    useQueryFetch(
      `users/${userId}/links`,
      getBookmarkNumber()?.id,
      Number(userId)
    );

  if (!getBookmarkNumber()?.link.count) return;
  return (
    <div className={styles.shared}>
      <BookMark
        bookmarkNumber={getBookmarkNumber()}
        account={account?.data[0]}
        errorMessage={errorMessage}
      />
      <Search setSearchResult={setSearchResult} searchResult={searchResult} />
      {!linksErrorMessage ? (
        getBookmarkNumber()!.link.count > 0 ? (
          <Cards
            linkCardsData={personalfolderData}
            searchResult={searchResult}
          />
        ) : (
          <h3 className={styles.noLink}>저장된 링크가 없습니다</h3>
        )
      ) : (
        <div className={styles.sectionTitleThird}>{linksErrorMessage}</div>
      )}
    </div>
  );
};

export default Shared;
