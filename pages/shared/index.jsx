import { useState, useEffect } from "react";
import { getSampleFolder } from "@/src/api/sampleFolder";
import Search from "@/src/components/Search/Search";
import SharedPageCards from "@/src/components/Cards/SharedPageCards";
import style from "./shared.module.css";
import FolderInfo from "@/src/components/FolderInfo/FolderInfo";
import { Nav, Footer } from "@/src/containers";

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
    <>
      <Nav />

      <FolderInfo
        userName={folderInfo?.owner?.name}
        folderName={folderInfo?.name}
        profileImageSource={folderInfo?.owner?.profileImageSource}
      />
      <div className={style.root}>
        <div className={style.section}>
          <Search />
          <div className={style.folderSection}>
            <SharedPageCards cards={cards} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SharedPage;
