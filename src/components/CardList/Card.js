import React from "react";
import "./CardStyles.css";
import { timeDifference } from "../../utils/timeUtils";
import Star from "../../assets/icons/Star";
import Kebab from "../../assets/icons/Kebab";

const Card = ({ link, isFolderPage }) => {
  if (!link) {
    return null;
  }

  const currentTime = new Date().getTime();
  const createdAt = new Date(link.createdAt).getTime();
  const timeDiffText = timeDifference(currentTime, createdAt);

  return (
    <div
      className={`card ${isFolderPage ? "folder-page" : "share-page"}`}
      onClick={() => window.open(link.url, "_blank")}
    >
      {isFolderPage && (
        <button className="star-button">
          <Star />
        </button>
      )}
      {link.imageSource ? (
        <img src={link.imageSource} alt={link.title} />
      ) : (
        <div className="no-image">이미지가 없습니다.</div>
      )}
      <div className="card-text">
        {isFolderPage && (
          <div className="card-text-top">
            <span className="date">{timeDiffText}</span>
            <button className="kebab-button">
              <Kebab />
            </button>
          </div>
        )}
        {!isFolderPage && <span className="date">{timeDiffText}</span>}
        <h3 className="title">{link.title}</h3>
        <p className="description">{link.description}</p>
      </div>
    </div>
  );
};

export default Card;
