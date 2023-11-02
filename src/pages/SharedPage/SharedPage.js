import { useEffect, useState } from "react";

import ShareHeader from "./components/ShareHeader/ShareHeader";
import { SearchBar, CardList } from "commons/components/index";
import useAsync from "apis/useAsync";
import { getAllCards } from "apis/getAllCards";
import "./SharedPage.css";

const INITIAL_FOLDER = {
  folderName: "",
  folderOwnerrName: "",
  folderOwnerProfileImage: "",
};

function SharedPage() {
  const [folderValues, setFolderValues] = useState(INITIAL_FOLDER);
  const [isFolderLoading, folderLoadingError, getFolderAsync] =
    useAsync(getAllCards);

  const [cardList, setCardList] = useState([]);

  const loadUser = async () => {
    const folderResult = await getFolderAsync();
    if (!folderResult) return;
    if (!folderResult.folder) return;
    const { name = "", owner = null, links = "" } = folderResult.folder;
    setFolderValues((prevValues) => {
      const newValues = {
        folderName: name,
        folderOwnerName: owner?.name,
        folderOwnerProfileImage: owner?.profileImageSource,
      };
      return { ...prevValues, ...newValues };
    });
    setCardList(links);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <ShareHeader
        folderOwnerProfile={folderValues.folderOwnerProfileImage}
        folderName={folderValues.folderName}
        folderOwnerName={folderValues.folderOwnerName}
      />

      <section className="section">
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

export default SharedPage;
