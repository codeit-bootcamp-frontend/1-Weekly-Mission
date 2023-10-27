import { useState, useEffect } from "react";
import moment from "moment";
import noImg from "./image/noImg.svg";
import starImg from './image/Star.svg';
import selectedStarImg from './image/selectedStar.svg';
import kebabMenuImg from './image/kebab.svg';

export function Card({ link }) {
  const targetDate = new moment(link.createdAt).format("YYYY.M.DD");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // 1초마다 업데이트

    return () => {
      clearInterval(interval);
    };
  }, []);

  const createdAtDate = new Date(link.createdAt);
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

  const { imageSource = `${noImg}`, description, url } = link;
  const [selected, setSelected ] = useState(starImg)
  const HandleClick = (e) => {
    e.preventDefault();
    setSelected((prevSelected) => {
      if (prevSelected === starImg) {
        return selectedStarImg;
      } else {
        return starImg;
      }
    });
  }

  return (
    <a href={url} className="card">
      <div className="card-image-container">
        <img className="card-image" src={imageSource} alt="사진" />
        <img className='star' src={selected} alt={selected} onClick={HandleClick} />  
      </div>
      <div className="card-description">
        <div className="card-option">
          <span>{message}</span>  
          <img src={kebabMenuImg} alt='option'></img>
        </div>
        <span className="description">{description}</span>
        <span>{targetDate}</span>
      </div>
    </a>
  );
}
