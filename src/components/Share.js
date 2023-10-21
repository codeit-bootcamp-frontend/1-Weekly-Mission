import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Searchbar from "./Searchbar/Searchbar";

const Share = () => {
  const [cards, setCards] = useState([]);

  const getSampleFolder = async () => {
    try {
      const result = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      const { folder } = await result.json();
      setCards(folder.links);
    } catch (err) {
      console.log("ERROR 입니다", err);
    }
    // Data -> 상위 정보들, 카드 리스트 정보들
  };

  useEffect(() => {
    getSampleFolder();
  }, []);
  return (
    <>
      <Searchbar />
      <div>{/* 상위 정보들 넣기*/}</div>
      {cards &&
        cards.map((card) => (
          <Card
            key={card.id}
            className={"Card"}
            createdAt={card.createdAt}
            description={card.description}
            id={card.id}
            imgUrl={card.imageSource}
            title={card.title}
            url={card.url}
          />
        ))}
    </>
  );
};

export default Share;
