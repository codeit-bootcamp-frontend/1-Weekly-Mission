import React from "react";
import moment from "moment";
import LogoImg from "../../assets/card-logo.png";
import * as S from "./CardStyle"; 

function calculateTimeAgo(createdAt) {
  const createdDate = moment(createdAt, "YYYY-MM-DDTHH:mm:ss[Z]");
  const currentDate = moment();
  const diff = currentDate.diff(createdDate, "seconds");

  if (diff < 120) {
    return "1 minute ago";
  } else if (diff <= 3540) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 3600) {
    return "1 hour ago";
  } else if (diff <= 82800) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff < 86400) {
    return "1 day ago";
  } else if (diff <= 2592000) {
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff <= 28512000) {
    return `${Math.floor(diff / 2592000)} months ago`;
  } else if (diff <= 31536000) {
    return "1 year ago";
  } else {
    return `${Math.floor(diff / 31536000)} years ago`;
  }
}

function Card({ link }) {
  const { createdAt, description, imageSource, title, url } = link;

  return (
    <S.CardContainer href={url}>
      <S.CardImageContainer>
        <S.CardImage
          className={imageSource ? "Card-image" : "no-img-logo"}
          src={imageSource ? imageSource : LogoImg}
          alt="카드 사진"
        />
      </S.CardImageContainer>
      <S.CardContentContainer>
        <S.CardContentAgo>{calculateTimeAgo(createdAt)}</S.CardContentAgo>
        <div>{title}</div>
        <S.CardContent>{description}</S.CardContent>
        <S.CardContentAt>
          {moment(createdAt).format("YYYY.MM.DD")}
        </S.CardContentAt>
      </S.CardContentContainer>
    </S.CardContainer>
  );
}

export default Card;
