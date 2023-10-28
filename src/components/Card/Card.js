import React from "react";
import { getTimePassed } from "../../utils/formatTimePassed";

const Card = ({ data }) => {
  const { url, description, createdAt, imageSource } = data;
  const timePassed = getTimePassed(url, description, createdAt, imageSource);

  return (
    <li
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100rem",
        height: "auto",
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
          position: "relative",
        }}
      >
        <img
          src={imageSource}
          alt="card 이미지"
          style={{
            boxShadow: "0px 5px 25px 0px rgba(0, 0, 0, 0.08)",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            height: "auto",
          }}
        />
        <button
          style={{ position: "absolute", right: "1.5rem", top: "1.5rem" }}
        >
          <img src="images/star.svg" />
        </button>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            padding: "1rem",
            position: "relative",
          }}
        >
          <span>{timePassed} ago</span>
          <button
            style={{ position: "absolute", right: "2rem", top: "1.1rem" }}
          >
            <img src="images/kebab.svg" />
          </button>
          <span>{description}</span>
          <span>{createdAt.substring(0, 10)}</span>
        </div>
      </a>
    </li>
  );
};

export default Card;
