import { useState, useEffect } from "react";
import { getSampleFolder } from "@/src/api/sampleFolder";
import Search from "@/src/components/Search/Search";
import SharedPageCards from "@/src/components/Cards/SharedPageCards";
import style from "./shared.module.css";
import FolderInfo from "@/src/components/FolderInfo/FolderInfo";

function SharedPage() {
  const [folderInfo, setFolderInfo] = useState({});
  const [cards, setCards] = useState([]);
  // const [isLoading, loadingError, getSampleFolderAsync] =
  //   useAsync(getSampleFolder);

  useEffect(() => {
    const loadLink = async () => {
      const {
        folder,
        folder: { links },
      } = await getSampleFolder();

      setCards(() => {
        return [...links];
      });
      setFolderInfo(() => ({ ...folder }));
    };
    loadLink();
  }, []);

  return (
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
  );
}
export default SharedPage;
