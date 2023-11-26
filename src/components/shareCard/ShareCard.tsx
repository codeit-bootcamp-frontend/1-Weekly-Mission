import React from "react";
import "./shareCard.css";
import logo from "../../assets/common/logo.svg";
import calcCreateTime from "../../utils/calcCreateTime";

interface ShareCardProps {
  linkInfo: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  };
}

function ShareCard({ linkInfo }: ShareCardProps) {
  const createdAt = new Date(linkInfo?.createdAt);
  const formattedTime = calcCreateTime(createdAt);

  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();

  return (
    <div className="card">
      <a
        href={`${linkInfo.url}`}
        className="card-link"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            linkInfo?.imageSource
              ? "card-img-section"
              : "card-img-section card-empty"
          }
        >
          <img
            src={linkInfo?.imageSource ?? logo}
            className={linkInfo?.imageSource ? "link-img" : "link-img-empty"}
            alt="cat"
          />
        </div>
        <div className="card-text-section">
          <p className="time-stamp">{formattedTime}</p>
          <p className="introduce-text">
            Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
            consequat. Tldkd
          </p>
          <p className="created-date">{`${year}. ${month}. ${date}`}</p>
        </div>
      </a>
    </div>
  );
}

export default ShareCard;
