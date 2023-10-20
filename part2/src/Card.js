import React from "react";
import "./landing.css";

const Card = () => {
  return (
    <div className="card-area">
      <div
        style={{
          fontSize: "2rem",
          width: "100%",
          height: "50rem",
          backgroundColor: "#bada55",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        카드 컴포넌트 영역 페어 프로그래밍
      </div>
    </div>
  );
};

export default Card;
