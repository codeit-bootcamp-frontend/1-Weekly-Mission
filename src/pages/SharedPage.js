import { useState, useEffect } from "react";
import { getsampleFolder } from "../api/sampleFolder";
import Search from "../component/Search";
import Cards from "../component/Cards";
import style from "./SharedPage.module.css";
import FolderInfo from "../component/FolderInfo";
function SharedPage() {
  const [cards, setCards] = useState([]);

  const loadLink = async () => {
    const {
      folder: { links },
    } = await getsampleFolder();

    setCards(() => {
      return [...links];
    });
  };

  useEffect(() => {
    loadLink();
  }, []);

  return (
    <div className={style.root}>
      <FolderInfo />
      <div className={style.section}>
        <Search />
        <Cards cards={cards} />
      </div>
    </div>
  );
}
export default SharedPage;
