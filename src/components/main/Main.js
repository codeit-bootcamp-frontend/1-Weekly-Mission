import "./Main.css";
import CardList from "../card/CardList";
import { useCallback, useEffect, useState } from "react";
import { getResponse } from "../../api";

const Main = () => {
  const [cards, setCards] = useState([]);

  const handleLoad = useCallback(async () => {
    const result = await getResponse("folder");
    if (!result) {
      return;
    }

    const { links } = result.folder;
    setCards(links);
  }, []);

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <main>
      <div className="content_wrapper">
        <form>
          <input
            id="search"
            name="search"
            type="search"
            placeholder="링크를 검색해 보세요."
          />
        </form>
        <CardList items={cards} />
      </div>
    </main>
  );
};

export default Main;
