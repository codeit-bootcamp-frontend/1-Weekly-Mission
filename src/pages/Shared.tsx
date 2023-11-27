import React, { useContext } from "react";
import BookMark from "../components/BookMark";
import Search from "../components/Search";
import Cards from "../components/Cards";
import { AccountContext } from "../contexts/AccountContext";
import { useFetch, useQueryFetch } from "../hooks/useFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import { folders } from "../dataType/dataType";

interface SharedType {
  setSearchResult: React.Dispatch<React.SetStateAction<string>>;
}

const Shared = ({ setSearchResult }: SharedType) => {
  const { account, errorMessage, searchResult } = useContext(AccountContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = Number(searchParams.get("user"));
  const folderNumber = searchParams.get("folder");

  const { data: folderDataObject } = useFetch(
    `users/${userId}/folders`,
    userId
  );
  if (!folderNumber) {
    alert("공유할 링크가 없습니다");
    navigate("/folder");
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
    useQueryFetch(`users/${userId}/links`, getBookmarkNumber()?.id, userId);

  if (!getBookmarkNumber()?.link.count) return;
  return (
    <div className="shared">
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
          <h3 className="noLink">저장된 링크가 없습니다</h3>
        )
      ) : (
        <div className="section-title section-title-third">
          {linksErrorMessage}
        </div>
      )}
    </div>
  );
};

export default Shared;
