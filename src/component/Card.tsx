import { useState } from "react";
import moment from "moment";
import Star from "./Star";
import Kebab from "./Kebab";
import noImageIMG from "../assets/img/img-linkthumb-noimg.svg";
import * as Styled from "../style/Card";

function Card({ data, onClick }) {
  /*---star---*/
  const [star, setStar] = useState(false);

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (star) {
      setStar(false);
    } else {
      setStar(true);
    }
  };

  /*--card clik--*/
  const handleCardClick = () => {
    onClick(data.url);
  };

  /*--format date--*/
  const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  function timeForToday(createdAt) {
    const today = moment();
    const createdTime = moment(createdAt);

    today.format();

    const diffYears = today.diff(createdTime, "years");
    const diffMonths = today.diff(createdTime, "months");
    const diffDays = today.diff(createdTime, "days");
    const diffHours = today.diff(createdTime, "hours");
    const diffMins = today.diff(createdTime, "minutes");

    if (diffMins < 2) return "1 minute ago";
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (60 <= diffMins && diffHours < 2) return "1 hour ago";
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (24 <= diffHours && diffDays < 2) return "1 day ago";
    if (diffMonths < 1) return `${diffDays} days ago`;
    if (1 <= diffMonths && diffMonths < 2) return "1 month ago";
    if (diffYears < 1) return `${diffMonths} months ago`;
    if (1 <= diffYears) return "1 year ago";
    return `${diffYears} years ago`;
  }

  /*========= JSX =========*/
  return (
    <>
      <Styled.CardContainer onClick={handleCardClick}>
        <Star isStared={star} onClick={handleStarClick} />
        <Styled.ImageBox>
          <Styled.Image
            className="thumbnail"
            src={data.image_source || noImageIMG}
            alt={data.image_source ? "카드 이미지" : "이미지 없음"}
          />
        </Styled.ImageBox>

        <Styled.InfoContainer>
          <Styled.AdditionalInfo>
            <Styled.TimeSpan>{timeForToday(data.created_at)}</Styled.TimeSpan>
            <Kebab />
          </Styled.AdditionalInfo>

          <Styled.Description>
            {data.description || data.title}
          </Styled.Description>
          <Styled.DateSpan>{formatDate(data.created_at)}</Styled.DateSpan>
        </Styled.InfoContainer>
      </Styled.CardContainer>
    </>
  );
}

export default Card;
