import { useState } from "react";
import { Link } from "react-router-dom";
import { timeForToday } from "utils/moment";
import kebab from "assets/kebab.svg";
import noImageIMG from "assets/noImage.svg";
import starIMG from "assets/star.svg";
import chosenStarIMG from "assets/chosenStar.svg";
import * as Styled from "./StyledCard";

const Card = ({ data }) => {
  const CREATED_AT = data.createdAt ? data.createdAt : data.created_at;
  const IMG_SRC = data.imageSource ? data.imageSource : data.image_source;
  const URL = data.url;
  const DESCRIPTION = data.description;
  const [star, setStar] = useState(false);

  const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  const handleKebabClick = (e) => {
    e.stopPropagation();
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (star) {
      setStar(false);
    } else {
      setStar(true);
    }
  };

  return (
    <Styled.CardContainer>
      <Link to={URL} target="_blank">
        <Styled.CardImgBox>
          <Styled.CardImg
            src={IMG_SRC ? IMG_SRC : noImageIMG}
            alt={IMG_SRC ? "카드 이미지" : "이미지 없음"}
          />
        </Styled.CardImgBox>
        <Styled.InfoContainer>
          <Styled.AdditionalInfo>
            <span>{timeForToday(CREATED_AT)}</span>
            <Styled.Kebab
              src={kebab}
              alt="카드 설정 더보기"
              onClick={handleKebabClick}
            />
          </Styled.AdditionalInfo>
          <Styled.Description>{DESCRIPTION}</Styled.Description>
          <span>{formatDate(CREATED_AT)}</span>
        </Styled.InfoContainer>
        <Styled.Star
          onClick={handleStarClick}
          src={star ? chosenStarIMG : starIMG}
          alt="즐겨찾기 버튼"
        />
      </Link>
    </Styled.CardContainer>
  );
};

export default Card;
