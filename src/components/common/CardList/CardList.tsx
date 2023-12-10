import Card from "@/components/common/Card/Card";
import { CardInterface, FolderInterface, ModalInterface } from "@/types";
import styles from "./CardList.module.scss";

function CardList({
  cardList,
  onClick,
  folderList,
  keyword = "",
}: {
  cardList?: CardInterface[];
  onClick?: (m: ModalInterface) => void;
  folderList?: FolderInterface[];
  keyword?: string;
}) {
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
