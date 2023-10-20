import { useEffect, useState } from "react";
import Card from "./Card";
import { getFolder } from "../api";

export default function CardList() {
  const [items, setItems] = useState("");

  const handleLoad = async () => {
    const data = await getFolder();
    setItems(data.folder.links);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {items && (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <Card item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}