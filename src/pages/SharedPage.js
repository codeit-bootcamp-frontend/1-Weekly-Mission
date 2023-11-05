import { useState, useEffect } from "react";
import { getSampleFolder } from "../api/sampleFolder";
import Search from "../component/Search/Search";
import SharedPageCards from "../component/Cards/SharedPageCards";
import style from "./SharedPage.module.css";
import FolderInfo from "../component/FolderInfo/FolderInfo";
import useAsync from "../hooks/useAsync";
import LoadingPage from "./LoadingPage";
function SharedPage() {
  const [folderInfo, setFolderInfo] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, loadingError, getSampleFolderAsync] =
    useAsync(getSampleFolder);

  useEffect(() => {
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
    loadLink();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className={style.root}>
          <FolderInfo
            userName={folderInfo?.owner?.name}
            folderName={folderInfo?.name}
            profileImageSource={folderInfo?.owner?.profileImageSource}
          />
          <div className={style.section}>
            <Search />
            <SharedPageCards cards={cards} />
          </div>
        </div>
      )}
      {loadingError && <span>{loadingError.message}</span>}
    </>
  );
}
export default SharedPage;
