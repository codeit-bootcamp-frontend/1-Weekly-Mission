import "./FolderPage.css";
import AddLink from "../components/AddLink";
import { getFolderLinks, getFolderCategory } from "../utils/api";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Category from "../components/Category";

function Folder() {
  const [state, setState] = useState([]);
  const [folderData, setFolderData] = useState([]);
  const [linkData, setLinkData] = useState([]);

  const userData = {
    userId: "1",
    userSaveData: "folders",
  };

  async function handleList() {
    const { data } = await getFolderLinks();
    if (!data) return;
    setState(data);
  }

  async function getFolderData() {
    const { data: folderData } = await getFolderCategory();
    setFolderData(folderData);
  }

  async function handleClick(id) {
    const { data: linksData } = await getFolderLinks(id);
    const linkUrl = linksData?.map((linkData, idx) => linkData?.[idx]);
    setLinkData(linksData);

    console.log(linksData);
  }

  useEffect(() => {
    handleList();
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
          <div className="cards">
            {linkData?.length ? (
              linkData.map((cardInfo) => {
                return <Cards cardInfo={cardInfo} key={cardInfo.id} />;
              })
            ) : (
              <div>저장된 링크가 없습니다.</div>
            )}
          </div>
        </ul>
      </section>
    </>
  );
}

export default Folder;
