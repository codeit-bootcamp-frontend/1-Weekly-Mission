import React from "react";
import "./landing.css";
import Card from "./Card";

const Cards = () => {
  const cardRendering = () => {
    const result = [];
    for (let i = 1; i <= 9; i++) {
      result.push(<Card cardImage={`images/card${i}.png`} />);
    }
    return result;
  };

  return (
    <div className="card-area">
      <div
        style={{
          fontSize: "1.6rem",
          width: "100%",

          backgroundColor: "#bada55",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {cardRendering()}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
