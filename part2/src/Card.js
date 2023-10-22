import React from "react";

const Card = ({ cardImage }) => {
  return (
    <>
      <li
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <a
          href="/"
          target="_blank"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            borderRadius: "1rem",
            width: "34rem",
          }}
        >
          <img
            src={cardImage}
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
            <span>0 minutes ago</span>
            <span>
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
              consequat...
            </span>
            <span>2023.3.15</span>
          </div>
        </a>
      </li>
    </>
  );
};

export default Card;
