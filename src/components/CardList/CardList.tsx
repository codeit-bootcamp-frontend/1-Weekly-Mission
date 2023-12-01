import { CardInterface, FolderInterface, ModalInterface } from "@/types";
import Card from "../Card/Card";
import styles from "./CardList.module.scss";

interface CardListProps {
  cardList?: CardInterface[];
  folderList?: FolderInterface[];
  onClick?: (m: ModalInterface) => void;
  keyword?: string;
}

function CardList({
  cardList,
  onClick,
  folderList,
  keyword = "",
}: CardListProps) {
  if (!cardList || cardList.length === 0) {
    return (
      <div className={styles["no-card-list"]}> 저장된 링크가 없습니다.</div>
    );
  }
  if (keyword) {
    const searchTerm = keyword.toLowerCase().split(" ").join("");

    cardList = cardList.filter((card) => {
      const searchText = `${card.description}${card.url}${card.title}`
        .toLowerCase()
        .split(" ")
        .join("");
      return searchText.includes(searchTerm);
    });
  }
  return (
    <section className={styles["card-section"]}>
      {cardList?.map((card) => {
        return (
          <Card
            card={card}
            key={card.id}
            folderList={folderList}
            onClick={onClick}
          />
        );
      })}
    </section>
  );
}

export default CardList;
