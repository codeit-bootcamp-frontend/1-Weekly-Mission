import { useState, MouseEvent } from "react";
import { PopOver } from "@/components";
import noImg from "@/src/assets/noImg.svg";
import kebabMenuImg from "@/src/assets/kebab.svg";
import PastTime from "@/public/date";
import * as S from "./Card.style";
import { Link } from "@/pages/shared";

interface Props {
  link: Link;
}

export default function Card({ link } : Props) {
  const { image_source, imageSource, description, url, createdAt, created_at } =
    link;
  const { message, cardDate } = PastTime(createdAt || created_at);
  const [selected, setSelected] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleStarClick = (e : MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
  };

  const starStyle = {
    fill: selected ? "#6D6AFE" : "#000",
    "fill-opacity": selected ? "1" : "0.2",
  };

  const handleKebabClick = (e : MouseEvent) => {
    e.preventDefault();
    setVisible(!visible ? true : false);
  };

  return (
    <S.StyledLink href={url}>
      <S.ImageContainer>
        <S.CardImage src={imageSource || image_source || noImg} alt="사진" />
        <S.Star
          fill={starStyle.fill}
          fillOpacity={starStyle["fill-opacity"]}
          onClick={handleStarClick}
        />
      </S.ImageContainer>
      <S.Container>
        <S.Option>
          <span>{message}</span>
          <img src={kebabMenuImg} alt="option" onClick={handleKebabClick}></img>
          {visible && (
            <S.PopOver>
              <PopOver url={url}/>
            </S.PopOver>
          )}
        </S.Option>
        <S.Description>{description}</S.Description>
        <span>{cardDate}</span>
      </S.Container>
    </S.StyledLink>
  );
}
