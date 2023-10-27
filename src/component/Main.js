import Search from "./Search";
import Cards from "./Cards";
import style from "../css/Main.module.css";
import { useState, useEffect } from "react";
import { getsampleFolder } from "../api/sampleFolder";
function Main() {
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
      <Search />
      <Cards cards={cards} />
    </div>
  );
}
export default Main;
