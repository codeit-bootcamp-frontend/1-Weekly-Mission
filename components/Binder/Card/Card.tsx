import styles from "./Card.module.css";
import clsx from "clsx";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";
import { formatDate, formatTimeAgo } from "@/util/formatDate";
import { Link } from "@/types/server.type";
import Kebab from "./Kebab/Kebab";
import unifyURL from "@/util/unifyURL";
import CardModal from "./CardModal/CardModal";

interface Props {
  card: Link;
  shared: Boolean;
}

function Card({ card, shared }: Props) {
  const hover = useToggle();
  const deleteButton = useToggle();
  const addButton = useToggle();

  const imageStyle = clsx(styles.image, hover.state && styles.hoverImage);
  const bgColorStyle = clsx(styles.root, hover.state && styles.hoverBgColor);
  const bgImg = {
    backgroundImage: `url(${card.image_source || "/images/icon/common-icons/no-image.svg"})`,
  };

  return (
    <>
      <div className={bgColorStyle} onMouseOver={hover.handleToggle} onMouseOut={hover.handleToggle}>
        <a href={unifyURL(card.url)} target="_blank">
          <div className={imageStyle} style={bgImg}>
            {!shared && <Image width={34} height={34} className={styles.star} src="/icons/star.svg" alt="즐겨찾기" />}
          </div>

          <div className={styles.explanation}>
            <div className={styles.header}>
              <div>{formatTimeAgo(card.created_at)}</div>
              {!shared && <Kebab handleDelete={deleteButton.handleToggle} handleAdd={addButton.handleToggle} />}
            </div>

            <div className={styles.text}>
              <div>{card.title}</div>
              <div>{card.description}</div>
            </div>

            <div className={styles.footer}>{formatDate(card.created_at)}</div>
          </div>
        </a>
      </div>

      <CardModal card={card} deleteButton={deleteButton} addButton={addButton} />
    </>
  );
}

export default Card;
