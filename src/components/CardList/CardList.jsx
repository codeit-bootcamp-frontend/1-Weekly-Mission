import { useEffect, useState } from "react";
import Card from "components/Card";
import { getFolder } from "api";
import "./CardList.css";

function CardList() {
  const [items, setItems] = useState();

  const handleLoad = async () => {
    const data = await getFolder();
    setItems(data.folder?.links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {items && (
        <ul className="CardList">
          {items.map((item) => {
            return (
              <li className="Card" key={item.id}>
                <Card item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default CardList;
