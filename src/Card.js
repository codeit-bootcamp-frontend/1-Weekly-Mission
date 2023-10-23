import moment from "moment/moment"
import { useState, useEffect } from "react";

export function Card({link}) {
  const targetDate = new moment(link.createdAt).format( "YYYY.M.DD");
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

  let message = '';

  if (timeDiff < 120) {
    message = '1 minute ago';
  } else if (timeDiff <= 3540) {
    message = `${Math.floor(timeDiff / 60)} minutes ago`;
  } else if (timeDiff <= 3660) {
    message = '1 hour ago';
  } else if (timeDiff <= 82800) {
    message = `${Math.floor(timeDiff / 3600)} hours ago`;
  } else if (timeDiff <= 172800) {
    message = '1 day ago';
  } else if (timeDiff <= 2592000) {
    message = `${Math.floor(timeDiff / 86400)} days ago`;
  } else if (timeDiff <= 2678400) {
    message = '1 month ago';
  } else if (timeDiff <= 31536000) {
    message = `${Math.floor(timeDiff / 2592000)} months ago`;
  } else {
    message = `${Math.floor(timeDiff / 31536000)} years ago`;
  }



  return (
    <div className="card" >
      <div className="card-image-container">
        <img className="card-image"src={link.imageSource} alt='사진'/>
      </div>
      <div className="card-description">
        <span>{message}</span>
        <span className="description">{link.description}</span>
        <span>{targetDate}</span>
      </div>
    </div>
  )
}