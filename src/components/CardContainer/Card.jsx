import "./CardContainer.css";
import NoCardDataImg from "../../assets/image/img-card--noimg.png";
import StarIcon from "../../assets/image/icon-star.svg";
import ThreeDotsIcon from "../../assets/image/kebab.svg";
import { useEffect, useState } from "react";

// < each card response Data Example >
// "id": 188,
// "created_at": "2023-06-30T05:15:37.191878+00:00",
// "updated_at": null,
// "url": "https://jasonwatmore.com/next-js-13-mongodb-user-registration-and-login-tutorial-with-example-app",
// "title": "Next.js 13 + MongoDB - User Registration and Login Tutorial with Example App | Jason Watmore's Blog",
// "description": "In this tutorial we'll go through an example of how to build a simple user registration, login and user management (CRUD) application with Next.js and MongoDB.",
// "image_source": "https://jasonwatmore.com/_content/images/jason.jpg",
// "folder_id": null

function Card({ cardData }) {
  const { id, created_at, url, title, description, image_source, folder_id } =
    cardData;

  const timeAgoText = getTimeAgoText(getMinsDiffFromNow(created_at));
  const formulatedCreatedDate = created_at.slice(0, 10).replace(/-/gi, ". ");

  function getMinsDiffFromNow(ISOInputDate) {
    const now = Date.now();
    const nowDate = new Date(now);
    const inputDate = new Date(ISOInputDate);
    const diffMSec = nowDate.getTime() - inputDate.getTime();
    const diffMin = diffMSec / (60 * 1000);
    return diffMin; // diffMin = "created_at ~ 현재"의 시간 차이. 얼마나 지났는지
  }

  function getTimeAgoText(diffMin) {
    // 주어진 조건에 맞게 "~~ ago" 텍스트 구하기
    diffMin = Math.floor(diffMin);
    const MIN_FOR_ONE_DAY = 24 * 60,
      DAY_FOR_ONE_MONTH = 31; // 정확히 주어지지 않음.
    let diffDay = 0;
    if (diffMin >= MIN_FOR_ONE_DAY) {
      diffDay = Math.floor(diffMin / MIN_FOR_ONE_DAY);
    } else {
      // 시간 차이 24시간 미만 => min 단위로 생각.
      if (diffMin < 60) {
        // 시간 차이 60분 미만일 때, (2분 미만 : 2분 이상)
        return diffMin < 2 ? "1 minute" : `${diffMin} minutes`;
      }
      // 시간 차이 60분 이상, 24시간 미만일 때, (2시간 미만 : 2시간 이상)
      return diffMin < 2 * 60 ? "1 hour" : `${Math.floor(diffMin / 60)} hours`;
    }

    // 사간 차이 24시간 이상 => 이제부턴 day 단위로 생각.
    if (diffDay >= 365) {
      // 시간 차이 1년 이상일 때, (2년 미만 : 2년 이상)
      return diffDay < 2 * 365
        ? "1 year"
        : `${Math.floor(diffDay / 365)} years`;
    }
    if (diffDay < DAY_FOR_ONE_MONTH) {
      // 시간 차이 1달 이내일 때, (2일 미만 : 2일 이상)
      return diffDay < 2 ? "1 day" : `${diffDay} years`;
    }
    // 시간 차이 1달 이상 1년 미만일 때, (2달 미만 : 2달 이상)
    return diffDay < 2 * DAY_FOR_ONE_MONTH
      ? "1 month"
      : `${Math.floor(diffDay / 31)} months`;
  }

  return (
    <a className="link-img" href={url ? url : "#"}>
      <div className="card">
        <div className="div-img">
          <img
            className="cardImg"
            src={image_source ? image_source : NoCardDataImg}
            alt="card"
          />
        </div>
        <img className="img-star" src={StarIcon} alt="star icon" />
        <div className="div-text">
          <div className="text">
            <h5 className="createdTimePassed">{timeAgoText + " ago"}</h5>
            <img src={ThreeDotsIcon} alt="three dots icon" />
          </div>
          <p className="cardDesc">{description}</p>
          <h4 className="createdDate">{formulatedCreatedDate}</h4>
        </div>
      </div>
    </a>
  );
}

export default Card;
