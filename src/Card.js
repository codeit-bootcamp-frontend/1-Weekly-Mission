import React from "react";
import "./CardStyles.css";
import { timeDifference } from "./utils/timeUtils";

const Card = ({ link }) => {
  const currentTime = new Date().getTime();
  const createdAt = new Date(link.createdAt).getTime();

  return (
    <div className="card" onClick={() => window.open(link.url, "_blank")}>
      {link.imageSource ? (
        <img src={link.imageSource} alt={link.title} />
      ) : (
        <div className="no-image">이미지가 없습니다.</div>
      )}
      <div className="card-text">
        <span className="date">{timeDifference(currentTime, createdAt)}</span>
        <h3 className="title">{link.title}</h3>
        <p className="description">{link.description}</p>
      </div>
    </div>
  );
};

export default Card;
