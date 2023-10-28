import Card from "./Card";
import { Fragment } from "react";
import "./Card.css";
import { useCallback, useEffect, useState } from "react";
import { getResponse } from "../../api";

const CardList = ({ pageType }) => {
  const [cards, setCards] = useState([]);

  const handleLoad = useCallback(async () => {
    // 코드 수정하기... 겹치는 코드임!
    if (pageType === "shared") {
      const result = await getResponse("shared", "folder");
      if (!result) {
        return;
      }

      const { links } = result.folder;

      setCards(links);
    } else {
      const result = await getResponse("folder", "links");
      if (!result) {
        return;
      }

      const { data } = result;

      setCards(data);
    }
  }, []);

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="card_wrapper">
      {cards.map((item) => {
        return (
          <Fragment key={item.id}>
            <Card item={item} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default CardList;
