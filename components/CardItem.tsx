import React from "react";
import logoImg from "@/public/img/svg/noImgLogo.svg";
import starImg from "@/public/img/svg/star.svg";
import kebabImg from "@/public/img/svg/kebab.svg";
import mobileAddImg from "@/public/img/svg/mobileAdd.svg";
import { getTimeDiff } from "../utils/postTime";
import { isLocation } from "../utils/location";
import { Links } from "../dataType/dataType";
import Image from "next/image";
import styles from "./cardItem.module.css";

/* folder페이지는 props가 있고 shared페이지에는 없음 클릭함수타입지정 any */
interface CardItemType {
  item: Links;
  prevKey?: number | null;
  handleCebabClick?: any;
  handleListClick?: any;
  iscebabClick?: boolean;
}

const cebabOption = [
  { option: "삭제하기", name: "링크 삭제" },
  { option: "폴더에 추가", name: "폴더에 추가" },
];

const CardItem = ({
  item,
  prevKey,
  handleCebabClick,
  iscebabClick,
  handleListClick,
}: CardItemType) => {
  const imgStyle = {
    backgroundImage: `URL(${item.image_source})`,
  };
  const nowDate = getTimeDiff(new Date(item.created_at));
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrap}>
        {!item.image_source ? (
          <Image
            width={133}
            height={24}
            className={styles.logoImg}
            src={logoImg}
            alt="로고이미지"
          />
        ) : (
          <div className={styles.cardImg} style={imgStyle}></div>
        )}
        {isLocation() ? (
          <Image
            width={34}
            height={34}
            className={styles.starImg}
            src={starImg}
            alt="별모양 버튼"
          />
        ) : null}
      </div>
      <div className={styles.cardInpormation}>
        <div className={styles.cardInpormationFirstLine}>
          <div className={styles.time}>{nowDate}</div>
          {isLocation() ? (
            <Image
              width={21}
              height={17}
              className={styles.KebabBotton}
              src={kebabImg}
              alt="케밥이미지"
              onClick={(event) => handleCebabClick(event, item.id)}
            />
          ) : null}
        </div>
        <p className={styles.cardInpormationP}>
          {item.description ? item.description : "데이터가 없습니다"}
        </p>
        <div className={styles.day}>{item.created_at.split("T")[0]}</div>
        <ul
          className={styles.folderBotton}
          style={{
            display: prevKey === item.id && iscebabClick ? "flex" : "none",
          }}
        >
          {cebabOption.map((list, index) => {
            return (
              <li
                className={styles.folderBottonLi}
                key={index}
                onClick={(event) => {
                  handleListClick(event, list.name, list.option, item.url);
                }}
              >
                {list.option}
              </li>
            );
          })}
        </ul>
        <h4 className={styles.cardInpormationH4}>
          <span>폴더 추가</span>
          <Image width={16} height={17} src={mobileAddImg} alt="추가이미지" />
        </h4>
      </div>
    </div>
  );
};

export default CardItem;
