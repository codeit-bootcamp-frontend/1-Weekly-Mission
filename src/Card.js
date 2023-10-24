import React from "react";

const Card = ({ data }) => {
  const { url, description, createdAt, imageSource } = data;

  const createdAtDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDifference = currentDate - createdAtDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);

  let timePassed = "";
  if (minutes < 2 && hours === 0) {
    timePassed = "1 minute";
  } else if (minutes >= 2 && minutes <= 59 && hours === 0) {
    timePassed = `${minutes} minutes`;
  } else if (minutes >= 60 && hours === 1) {
    timePassed = "1 hour";
  } else if (hours >= 2 && hours <= 23) {
    timePassed = `${hours} hours`;
  } else if (hours >= 24 && days === 1) {
    timePassed = "1 day";
  } else if (days >= 2 && days <= 30) {
    timePassed = `${days} days`;
  } else if (days >= 31 && months === 1) {
    timePassed = "1 month";
  } else if (months >= 2 && months <= 11) {
    timePassed = `${months} months`;
  } else if (months >= 12 && years === 1) {
    timePassed = "1 year";
  } else if (years >= 2) {
    timePassed = `${years} years`;
  }

  return (
    <li
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "1rem",
          width: "41.8rem",
        }}
      >
        <img
          src={imageSource}
          alt="card 이미지"
          style={{
            boxShadow: "0px 5px 25px 0px rgba(0, 0, 0, 0.08)",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        />
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            padding: "1rem",
          }}
        >
          <span>{timePassed} ago</span>
          <span>{description}</span>
          <span>{createdAt.substring(0, 10)}</span>
        </div>
      </a>
    </li>
  );
};

export default Card;
