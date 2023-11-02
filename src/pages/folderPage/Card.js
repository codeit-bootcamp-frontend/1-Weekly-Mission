import React, { useState } from "react";
import { getTimePassed } from "../../utils/formatTimePassed";
import Kebab from "../../components/kebab/Kebab";
import KebabDelete from "../../components/kebab/KebabDelete";
import KebabAdd from "../../components/kebab/KebabAdd";

const Card = ({ data }) => {
  const {
    created_at,
    description,
    folder_id,
    id,
    image_source,
    title,
    updated_at,
    url,
  } = data;
  const timePassed = getTimePassed(url, description, created_at, image_source);
  const [isClicked, setIsClicked] = useState(false);

  function handleKebabClick(e) {
    e.preventDefault();
    setIsClicked(!isClicked);
  }

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
          src={image_source}
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
            style={{
              position: "absolute",
              right: "2rem",
              top: "1.1rem",
              zIndex: "999",
            }}
            onClick={handleKebabClick}
          >
            <img src="images/kebab.svg" />
          </button>
          {isClicked ? (
            <Kebab>
              <KebabDelete>삭제하기</KebabDelete>
              <KebabAdd>폴더에 추가</KebabAdd>
            </Kebab>
          ) : null}
          <span>{description}</span>
          <span>{created_at.substring(0, 10)}</span>
        </div>
      </a>
    </li>
  );
};

export default Card;
