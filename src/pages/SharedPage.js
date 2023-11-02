import { useState, useEffect } from "react";
import { getSampleFolder } from "../api/sampleFolder";
import Search from "../component/Search";
import Cards from "../component/Cards";
import style from "./SharedPage.module.css";
import FolderInfo from "../component/FolderInfo";
import useAsync from "../hooks/useAsync";
import LoadingPage from "./LoadingPage";
function SharedPage() {
  const [folderInfo, setFolderInfo] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, loadingError, getSampleFolderAsync] =
    useAsync(getSampleFolder);
  const loadLink = async () => {
    const {
      folder,
      folder: { links },
    } = await getSampleFolderAsync();

    setCards(() => {
      return [...links];
    });
    setFolderInfo(() => ({ ...folder }));
  };

  useEffect(() => {
    loadLink();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className={style.root}>
          <FolderInfo folderInfo={folderInfo} />
          <div className={style.section}>
            <Search />
            <Cards cards={cards} />
          </div>
        </div>
      )}
      {loadingError && <span>{loadingError.message}</span>}
    </>
  );
}
export default SharedPage;
