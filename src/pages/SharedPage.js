import "./SharedPage.css";
import Cards from "../components/Cards";
import Search from "../components/Search";
import { getUserFolder } from "../utils/api";
import { useEffect, useState } from "react";
import FolderInfo from "../components/FolderInfo";

function Shared() {
  const [state, setState] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);

  async function handleList() {
    const { links } = await getUserFolder();
    setState(links);
    const folderData = await getUserFolder();
    setFolderInfo(folderData);
  }

  useEffect(() => {
    handleList();
  }, []);

  return (
    <>
      <section className="shared-section">
        <FolderInfo folderInfo={folderInfo} />
        <ul className="cards-list">
          <Search />
          <div className="cards">
            {state.map((cardInfo) => {
              return <Cards cardInfo={cardInfo} key={cardInfo.id} />;
            })}
          </div>
        </ul>
      </section>
    </>
  );
}

export default Shared;
