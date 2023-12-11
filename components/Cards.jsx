import styles from "styles/Cards.module.css";
import DEFAULT_IMG from "../assets/images/noImg.png";
import favoritesImg from "../assets/images/star.svg";
import meatballMenuImg from "../assets/images/meatball.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import PopOver from "./PopOver";
import Image from "next/image";
dayjs.extend(relativeTime);

function FavoriteBtn() {
  return (
    <div className={styles.favorites}>
      <Image src={favoritesImg} alt="즐겨찾기 이미지" />
    </div>
  );
}

function Cards({ cardInfo }) {
  const { createdAt, url, description, imageSource, created_at, image_source } =
    cardInfo;
  const updateTimeAgo = dayjs(createdAt ?? created_at).fromNow();
  const updateDate = dayjs(createdAt ?? created_at).format("YYYY. MM. DD");
  const [popOverOn, setPopOverOn] = useState(false);

  function togglePopover() {
    setPopOverOn(!popOverOn);
  }

  function MeatballBtn({ onClick }) {
    return (
      <button onClick={() => onClick(true)}>
        <div>
          <Image src={meatballMenuImg} alt="추가메뉴 버튼" />
        </div>
      </button>
    );
  }

  function handleOpenNewTab(url) {
    window.open(url, "_blank", "noreferrer noopener");
  }

  return (
    <li className={styles.cardList}>
      <div className={styles.cardBox}>
        <div
          className={styles.cardImageBox}
          onClick={() => handleOpenNewTab(url)}
        >
          <img
            className={styles.card}
            src={imageSource ?? image_source ?? DEFAULT_IMG}
            alt="카드 이미지"
          />
          <FavoriteBtn />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.updateTime}>
            <p>{updateTimeAgo}</p>
            <MeatballBtn onClick={togglePopover} />
            {popOverOn && <PopOver />}
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.updateDate}>
            <p>{updateDate}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Cards;
