import styles from "./Binder.module.css";
import Card from "../Card/Card";
import { MouseEvent, useCallback, useEffect, useState } from "react";

interface CardData {
  id: number;
  description: string;
  url: string;
  title: string;
}

interface CardDataA extends CardData {
  createdAt: string;
  imageSource: string;
}

interface CardDataB extends CardData {
  created_at: string;
  updated_at: null;
  image_source: string;
  folder_id: number;
}

interface Props {
  cards: (CardDataA | CardDataB)[];
  shared: Boolean;
  deleteLinkModalControl?: (e: MouseEvent) => void;
  addLinkModalControl?: (e: MouseEvent) => void;
  setTargetURL?: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}

function Binder({ cards, shared, searchValue, deleteLinkModalControl, addLinkModalControl, setTargetURL }: Props) {
  const [links, setLinks] = useState(cards);

  const filterLinks = useCallback(
    (searchValue: string) => {
      const filteredLinks = cards.filter(
        (link) =>
          link.url?.toLowerCase().includes(searchValue.toLowerCase()) ||
          link.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
          link.description?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setLinks(filteredLinks);
    },
    [cards]
  );

  useEffect(() => {
    filterLinks(searchValue);
  }, [searchValue, filterLinks]);

  return (
    <article className={styles.root}>
      {links.map((card) => {
        return (
          <li key={card.id}>
            <Card
              card={card}
              setTargetURL={setTargetURL}
              shared={shared}
              deleteLinkModalControl={deleteLinkModalControl}
              addLinkModalControl={addLinkModalControl}
            />
          </li>
        );
      })}
    </article>
  );
}
export default Binder;
