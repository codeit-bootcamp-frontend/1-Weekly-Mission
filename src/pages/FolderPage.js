import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import LinkAddInput from "../components/LinkAddInput/LinkAddInput";
import CardList from "../components/Card/Card";
import useAsync from "../hooks/useAsync";

import { getFolder } from "../api/api";
import "./FolderPage.css";

function FolderPage() {
  const [isFolderLoading, folderLoadingError, getFolderAsync] =
    useAsync(getFolder);

  const [cardList, setCardList] = useState([]);

  const loadUser = async () => {
    const folderResult = await getFolderAsync();
    setCardList(folderResult?.folder?.links);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <section className="folder-section">
        <div className="add-section">
          <LinkAddInput />
        </div>
        <div className="search-section">
          <SearchBar />
        </div>
        <div className="card-section">
          {isFolderLoading && <p> 유저 정보를 받아오는 중...</p>}
          {folderLoadingError?.message && (
            <span>{folderLoadingError.message}</span>
          )}
          <CardList cardList={cardList} />
        </div>
      </section>
    </>
  );
}

export default FolderPage;
