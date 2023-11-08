import { useState } from "react";
import PopOver from "../PopOver/PopOver.js";
import noImg from "../../assets/noImg.svg";
import kebabMenuImg from "../../assets/kebab.svg";
import PastTime from "../../utils/date.js";
import * as S from "./Card.style.js"

export function Card({ link }) {
  const { image_source, imageSource, description, url, createdAt, created_at } = link;

  const { message, cardDate } = PastTime(createdAt || created_at);
  const [selected, setSelected] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleStarClick = (e) => {
    e.preventDefault();
    setSelected(!selected);
  };

  const starStyle = {
    fill: selected ? "#6D6AFE" : "#000",
    'fill-opacity': selected ? '1' : '0.2'
  };

  const handleKebabClick = (e) => {
    e.preventDefault();
    setVisible(!visible ? true : false);
  }

  return (
    <S.StyledLink to={url}>
      <S.ImageContainer>
          <S.CardImage
            src={imageSource || image_source || noImg}
            alt="사진"
          />
        <S.Star
          fill={starStyle.fill}
          fill-opacity={starStyle["fill-opacity"]}
          onClick={handleStarClick}
        />
      </S.ImageContainer>
      <S.Container>
        <S.Option>
          <span>{message}</span>
          <img src={kebabMenuImg} alt="option" onClick={handleKebabClick}></img>
          {visible && <S.PopOver>
            <PopOver/>
          </S.PopOver>}
        </S.Option>
        <S.Description>{description}</S.Description>
        <span>{cardDate}</span>
      </S.Container>
    </S.StyledLink>
  );
}