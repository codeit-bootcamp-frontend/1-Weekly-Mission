import "./FolderPage.css";
import AddLink from "../components/AddLink";
import { getFolderLinks, getFolderCategory } from "../utils/api";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Category from "../components/Category";
import NoLink from "./NoLink";
import ShowFolderName from "../components/ShowFolderName";

function FolderPage() {
  const [folderData, setFolderData] = useState([]);
  const [linkData, setLinkData] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("전체");

  async function getFolderData() {
    const { data: folderData } = await getFolderCategory();
    setFolderData(folderData);
  }

  async function handleClick(id, name) {
    const { data: linksData } = await getFolderLinks(id);
    setLinkData(linksData);
    setSelectedFolder(name);
  }

  useEffect(() => {
    handleClick();
    getFolderData();
  }, []);

  // TODO : 카테고리 컴포넌트 완성 (카테고리 컴포넌트 내부)
  // TODO : 폴더 아이디 스테이트관리
  // TODO : 폴더 아이디를 갖고 fetch
  return (
    <>
      <section className="folder-section">
        <AddLink />

        <ul className="cards-list">
          <Search />
          <Category folderData={folderData} handleClick={handleClick} />
          <ShowFolderName
            selectedFolder={selectedFolder}
            handleClick={handleClick}
          />
          <div className="cards">
            {linkData?.length ? (
              linkData.map((cardInfo) => {
                return <Cards cardInfo={cardInfo} key={cardInfo.id} />;
              })
            ) : (
              <NoLink />
            )}
          </div>
        </ul>
      </section>
    </>
  );
}

export default FolderPage;
