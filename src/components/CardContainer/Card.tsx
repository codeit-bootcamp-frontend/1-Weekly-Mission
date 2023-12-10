import style from "./CardContainer.module.css";
import NoCardDataImg from "/public/image/img-card--noimg.png";
import StarIcon from "/public/icon/icon-star.svg";
import ThreeDotsIcon from "/public/icon/kebab.svg";
import getTimeAgoText from "../../utils/getTimeAgoText";
import AddFolderOptionBtn from "../Buttons/AddFolderOptionBtn";
import styled from "styled-components";
import { useState } from "react";
import { ICardData } from "./types/Card.types";
import Image from "next/image";

const OptionBtnContainer = styled.div`
  position: absolute;
  right: 149px;
  bottom: 37px;
  z-index: 3;
`;

interface Props {
  cardData: ICardData;
}

function Card({ cardData }: Props) {
  const [isFloatingBtnActive, setFloatingBtnActivation] = useState(false);
  const { created_at, url, description, image_source }: ICardData = cardData;

  const timeAgoText = getTimeAgoText(created_at);
  const formulatedCreatedDate = created_at.slice(0, 10).replace(/-/gi, ". ");
  const handleAddFolderBtnClick = () => {
    setFloatingBtnActivation((prevStatus) => !prevStatus);
  };

  return (
    <div className={style.card}>
      <a className={style.link_img} href={url ? url : "#"}>
        <div className={style.div_img}>
          <Image
            className={style.cardImg}
            src={image_source ?? NoCardDataImg}
            alt="card"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <Image
          className={style.img_star}
          width={34}
          height={34}
          src={StarIcon}
          alt="star icon"
        />
      </a>
      <div className={style.div_text}>
        <div className={style.text}>
          <h5 className={style.createdTimePassed}>{timeAgoText + " ago"}</h5>
          <Image
            onClick={() => handleAddFolderBtnClick()}
            src={ThreeDotsIcon}
            alt="three dots icon"
            width={21}
            height={17}
          />
        </div>
        <p className={style.cardDesc}>{description}</p>
        <h4 className={style.createdDate}>{formulatedCreatedDate}</h4>
        <OptionBtnContainer>
          <AddFolderOptionBtn
            isFloatingBtnActive={isFloatingBtnActive}
            options={["삭제하기", "폴더에 추가"]}
          ></AddFolderOptionBtn>
        </OptionBtnContainer>
      </div>
    </div>
  );
}

export default Card;
