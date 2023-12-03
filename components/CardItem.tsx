import React from "react";
import logoImg from "@/public/img/svg/noImgLogo.svg";
import starImg from "@/public/img/svg/star.svg";
import kebabImg from "@/public/img/svg/kebab.svg";
import mobileAddImg from "@/public/img/svg/mobileAdd.svg";
import { getTimeDiff } from "../utils/postTime";
import { isLocation } from "../utils/location";
import { Links } from "../dataType/dataType";
import Image from "next/image";

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
    <div className="card">
      <div className="card-img-wrap">
        {!item.image_source ? (
          <Image
            width={133}
            height={24}
            className="logo-img"
            src={logoImg}
            alt="로고이미지"
          />
        ) : (
          <div className="card-img" style={imgStyle}></div>
        )}
        {isLocation() ? (
          <Image
            width={34}
            height={34}
            className="star-img"
            src={starImg}
            alt="별모양 버튼"
          />
        ) : null}
      </div>
      <div className="card-inpormation">
        <div className="card-inpormation-first-line">
          <div className="time">{nowDate}</div>
          {isLocation() ? (
            <Image
              width={21}
              height={17}
              className="Kebab-botton"
              src={kebabImg}
              alt="케밥이미지"
              onClick={(event) => handleCebabClick(event, item.id)}
            />
          ) : null}
        </div>
        <p>{item.description ? item.description : "데이터가 없습니다"}</p>
        <div className="day">{item.created_at.split("T")[0]}</div>
        <ul
          className="folder-botton"
          style={{
            display: prevKey === item.id && iscebabClick ? "flex" : "none",
          }}
        >
          {cebabOption.map((list, index) => {
            return (
              <li
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
        <h4>
          <span>폴더 추가</span>
          <Image width={16} height={17} src={mobileAddImg} alt="추가이미지" />
        </h4>
      </div>
    </div>
  );
};

export default CardItem;
