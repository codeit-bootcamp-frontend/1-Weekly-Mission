import { useState } from "react";
import { Link } from "react-router-dom";
import { timeForToday } from "utils/moment";
import { DropDown } from "components";
import noImageIMG from "assets/noImage.svg";
import starIMG from "assets/star.svg";
import chosenStarIMG from "assets/chosenStar.svg";
import * as Styled from "./StyledCard";

const Card = ({ data, folderData }) => {
  const CREATED_AT = data.createdAt ? data.createdAt : data.created_at;
  const IMG_SRC = data.imageSource ? data.imageSource : data.image_source;
  const URL = data.url;
  const DESCRIPTION = data.description;
  const [star, setStar] = useState(false);

  const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  const handleStarClick = (e) => {
    e.preventDefault();
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
            <DropDown url={URL} folderData={folderData} />
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
