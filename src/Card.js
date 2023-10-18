import React from "react";
import "./CardStyles.css";

const timeDifference = (current, previous) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return "1 minute ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    const years = Math.floor(elapsed / msPerYear);
    if (years === 1) {
      return "1 year ago";
    } else {
      return years + " years ago";
    }
  }
};

const Card = ({ link }) => {
  const currentTime = new Date().getTime();
  const createdAt = new Date(link.createdAt).getTime();

  return (
    <div className="card" onClick={() => window.open(link.url, "_blank")}>
      <img src={link.imageSource} alt={link.title} />
      <div className="card-text">
        <span className="date">{timeDifference(currentTime, createdAt)}</span>
        <h3 className="title">{link.title}</h3>
        <p className="description">{link.description}</p>
      </div>
    </div>
  );
};

export default Card;
