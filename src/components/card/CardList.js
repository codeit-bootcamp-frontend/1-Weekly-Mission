import Card from "./Card";
import { Fragment } from "react";
import "./Card.css";
import { useCallback, useEffect, useState } from "react";
import { getResponse } from "../../api";

const CardList = ({ pageType, dataType, folderId }) => {
  const [cards, setCards] = useState([]);

  const handleLoad = useCallback(async () => {
    if (pageType === "shared") {
      const result = await getResponse(pageType, dataType);
      if (!result) {
        return;
      }

      const { links } = result.folder;

      setCards(links);
    } else if (pageType === "folder") {
      const result = folderId
        ? await getResponse(pageType, dataType, `?folderId=${folderId}`)
        : await getResponse(pageType, dataType);
      if (!result) {
        return;
      }

      const { data } = result;

      setCards(data);
    }
  }, [folderId, pageType, dataType]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className="card_wrapper">
      {cards.length ? (
        cards.map((item) => {
          return (
            <Fragment key={item.id}>
              <Card item={item} />
            </Fragment>
          );
        })
      ) : (
        <div className="no_link">저장된 링크가 없습니다.</div>
      )}
    </div>
  );
};

export default CardList;
