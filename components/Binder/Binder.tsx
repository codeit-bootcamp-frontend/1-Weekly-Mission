import styles from "./Binder.module.css";
import Card from "../Card/Card";
import { Dispatch, FormEvent, MouseEvent, SetStateAction, useCallback, useEffect, useState } from "react";
import { Linkinfo } from "@/API/getLinksByFolderID";

interface Props {
  cards: Linkinfo[];
  shared?: Boolean;
  handleClick?: (e: MouseEvent | FormEvent) => void;
  setTarget?: Dispatch<SetStateAction<string | null | undefined>>;
  setTargetURL?: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

function Binder({ cards, shared = false, value: searchValue, handleClick, setTarget, setTargetURL }: Props) {
  const [links, setLinks] = useState(cards);

  const handleButtonClick = (e: MouseEvent | FormEvent, targetName: string) => {
    if (handleClick && setTarget) {
      handleClick(e);
      setTarget(targetName);
    }
  };

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
          <li className={styles.cardContainer} key={card.id}>
            <Card
              card={card}
              setTargetURL={setTargetURL}
              shared={shared}
              deleteLink={(e) => handleButtonClick(e, "deleteLink")}
              addLinkToFolder={(e) => handleButtonClick(e, "AddLinkToFolderFromCard")}
            />
          </li>
        );
      })}
    </article>
  );
}
export default Binder;
