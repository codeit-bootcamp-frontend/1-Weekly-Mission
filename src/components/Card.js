import { useState, useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 380px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;

const CardContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 200px;
  padding: 15px 20px;
`;

const CardImg = styled.img`
  height: 60%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const CardTime = styled.div`
  color: #666;
  /* Linkbrary/caption */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CardExpl = styled.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  word-break: break-word;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardCreatedDate = styled.div``;

const Card = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // 1초마다 업데이트

    return () => {
      clearInterval(interval);
    };
  }, []);

  const createdAtDate = new Date(props.createdAt);
  const timeDiff = (currentDate - createdAtDate) / 1000; // 초 단위로 변환

  let message = "";

  if (timeDiff < 120) {
    message = "1 minute ago";
  } else if (timeDiff <= 3540) {
    message = `${Math.floor(timeDiff / 60)} minutes ago`;
  } else if (timeDiff <= 3660) {
    message = "1 hour ago";
  } else if (timeDiff <= 82800) {
    message = `${Math.floor(timeDiff / 3600)} hours ago`;
  } else if (timeDiff <= 172800) {
    message = "1 day ago";
  } else if (timeDiff <= 2592000) {
    message = `${Math.floor(timeDiff / 86400)} days ago`;
  } else if (timeDiff <= 2678400) {
    message = "1 month ago";
  } else if (timeDiff <= 31536000) {
    message = `${Math.floor(timeDiff / 2592000)} months ago`;
  } else {
    message = `${Math.floor(timeDiff / 31536000)} years ago`;
  }

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = createdAtDate
    .toLocaleDateString("en-US", options)
    .replace(/\//g, ". ");

  return (
    <CardContainer>
      <CardImg src={props.imageSource} alt="이미지" />
      <CardContentBox>
        <CardTime>{message}</CardTime>
        <CardExpl>{props.description}</CardExpl>
        <CardCreatedDate>{formattedDate}</CardCreatedDate>
      </CardContentBox>
    </CardContainer>
  );
};

export default Card;
