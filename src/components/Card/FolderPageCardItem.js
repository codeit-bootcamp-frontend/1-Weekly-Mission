import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "../../utils/utils";
import styles from "./CardItem.module.css";
import logoImg from "../../assets/emptyImg.svg";
import starImg from "../../assets/star.svg";
import kebabImg from "../../assets/kebab.svg";

function FolderPageCardItem({ item }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { created_at, url, title, description, image_source } = item;
  const formattedCreatedAt = formatDate(created_at);
  const timeDiff = getTimeDiff(created_at);
  const formatTimeDiff = prettyFormatTimeDiff(timeDiff);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.cardItem}>
      <Link className={styles.imgContainer} to={url} target="_blank" rel="noopener noreferrer">
        <img className={styles.img} src={image_source === null ? logoImg : image_source} alt={title} />
      </Link>
      <button className={styles.bookmarkButton}>
        <img src={starImg} alt="즐겨찾기 이미지" />
      </button>
      <div className={styles.contentContainer}>
        <div className={styles.container}>
          <p className={styles.timeDiff}>{formatTimeDiff}</p>
          <button onClick={handleToggleMenu}>
            <img src={kebabImg} alt="케밥 이미지" />
          </button>
          {isMenuOpen && (
            <div className={styles.menu}>
              <button>삭제하기</button>
              <button>폴더에 추가</button>
            </div>
          )}
        </div>
        <p className={styles.description}>
          {title}
          <br />
          {description}
        </p>
        <p className={styles.createdAt}>{formattedCreatedAt}</p>
      </div>
    </div>
  );
}

export default FolderPageCardItem;
