import { useState } from "react";
import noImg from "../../assets/noImg.svg";
import starImg from "../../assets/Star.svg";
import selectedStarImg from "../../assets/selectedStar.svg";
import kebabMenuImg from "../../assets/kebab.svg";
import PastTime from "../../utils/date.js";
import * as S from "./Card.style.js"

export function Card({ link }) {
  const { image_source, imageSource, description, url, createdAt, created_at } = link;

  const { message, cardDate } = PastTime(createdAt || created_at);
  const [selected, setSelected] = useState(starImg);
  const HandleClick = (e) => {
    e.preventDefault();
    setSelected((prevSelected) => {
      if (prevSelected === starImg) {
        return selectedStarImg;
      } else {
        return starImg;
      }
    });
  };

  return (
    <S.StyledLink to={url}>
      <S.ImageContainer>
        <S.CardImage
          src={imageSource || image_source || noImg}
          alt="사진"
        />
        <S.Star
          src={selected}
          alt={selected}
          onClick={HandleClick}
        />
      </S.ImageContainer>
      <S.Container>
        <S.Option>
          <span>{message}</span>
          <img src={kebabMenuImg} alt="option"></img>
        </S.Option>
        <S.Description>{description}</S.Description>
        <span>{cardDate}</span>
      </S.Container>
    </S.StyledLink>
  );
}
