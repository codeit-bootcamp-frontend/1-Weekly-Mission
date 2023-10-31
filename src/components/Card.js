import { useState, useEffect } from "react";

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
    <div className="CardContainer">
      <img className="CardImg" src={props.imageSource} alt="이미지"></img>
      <div className="CardContentBox">
        <div className="CardTime">{message}</div>
        <div className="CardExpl">{props.description}</div>
        <div className="CardCreatedDate">{formattedDate}</div>
      </div>
    </div>
  );
};

export default Card;
