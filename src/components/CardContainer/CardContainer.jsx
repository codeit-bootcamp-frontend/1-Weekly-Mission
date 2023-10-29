import "./CardContainer.css";
import Card from "./Card";
import { useEffect, useState, createContext } from "react";
import requestData from "../../services/api";
import ShareImg from "../../assets/image/share.svg";
import PenImg from "../../assets/image/pen.svg";
import TrashcanImg from "../../assets/image/Group 36.svg";

function CardTitleText({ text }) {
  return (
    <div className="card-title_text">
      <h2 className="tagName_text">{text}</h2>
      <div className="card-title_icon_container">
        <div className="card-title_icon">
          <h5 className="card-title_icon_text">공유</h5>
          <img src={ShareImg} alt="share icon" />
        </div>
        <div className="card-title_icon">
          <h5 className="card-title_icon_text">이름 변경</h5>
          <img src={PenImg} alt="pen icon" />
        </div>
        <div className="card-title_icon">
          <h5 className="card-title_icon_text">삭제</h5>
          <img src={TrashcanImg} alt="trash can icon" />
        </div>
      </div>
    </div>
  );
}

function CardContainer({ showTitle, cardListData, cardTitleText }) {
  return (
    <>
      {showTitle && <CardTitleText text={cardTitleText} />}
      <section className="cards">
        {cardListData.map((cardData) => (
          <Card cardData={cardData} />
        ))}
      </section>
    </>
  );
}

export default CardContainer;
