import Search from "./Search";
import Cards from "./Cards";
import style from "../css/Main.module.css";
import { useState, useEffect } from "react";
import { getFolder } from "../api";
function Main() {
  const [cards, setCards] = useState([]);

  const loadLink = async () => {
    const {
      folder: { links },
    } = await getFolder();

    setCards(() => {
      return [...links];
    });
  };

  useEffect(() => {
    loadLink();
  }, []);

  return (
    <main className={style.root}>
      <Search />
      <Cards cards={cards} />
    </main>
  );
}
export default Main;
