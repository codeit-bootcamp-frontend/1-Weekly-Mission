import styles from "./Binder.module.css";
import Card from "../Card/Card";
import { MouseEvent } from "react";

type CardDataA = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

type CardDataB = {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
};

interface Props {
  cards: CardDataA[] | CardDataB[];
  shared: Boolean;
  deleteLinkModalControl?: (e: MouseEvent) => void;
  addLinkModalControl?: (e: MouseEvent) => void;
  setTargetURL?: React.Dispatch<React.SetStateAction<string>>;
}

function Binder({ cards, shared, deleteLinkModalControl, addLinkModalControl, setTargetURL }: Props) {
  return (
    <article className={styles.root}>
      {cards.map((card) => {
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
