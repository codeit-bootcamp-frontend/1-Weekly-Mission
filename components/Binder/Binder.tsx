import styles from "./Binder.module.css";
import { Link } from "@/types/server.type";
import { Dispatch, FormEvent, MouseEvent, SetStateAction, useEffect, useState } from "react";
import Card from "./Card/Card";
import EmptyNoti from "./EmptyNoti/EmptyNoti";

interface Props {
  cards: Link[];
  shared?: Boolean;
  handleClick?: (e: MouseEvent | FormEvent) => void;
  value: string;
}

const filterLinks = (searchValue: string, setLinks: Dispatch<SetStateAction<Link[]>>, cards: Link[]) => {
  const filteredLinks = cards.filter(
    (link) =>
      link.url?.toLowerCase().includes(searchValue.toLowerCase()) ||
      link.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
      link.description?.toLowerCase().includes(searchValue.toLowerCase())
  );
  setLinks(filteredLinks);
};

function Binder({ cards, shared = false, value: searchValue }: Props) {
  const [links, setLinks] = useState(cards);

  useEffect(() => {
    filterLinks(searchValue, setLinks, cards);
  }, [searchValue, cards]);

  if (cards.length === 0) return <EmptyNoti />;

  return (
    <article className={styles.root}>
      {links.map((card) => {
        return (
          <li className={styles.cardContainer} key={card.id}>
            <Card card={card} shared={shared} />
          </li>
        );
      })}
    </article>
  );
}
export default Binder;
