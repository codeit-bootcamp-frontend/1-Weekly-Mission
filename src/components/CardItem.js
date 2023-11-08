import { styled } from "styled-components";
import { getTimeDiff } from "../utils/getTimeDiff";
import PopOver from "./PopOver";
import noImg from "../assets/images/noImage.png";
import kebabImg from "../assets/images/kebab.svg";
import "../styles/cardItem.css";
import { useState } from "react";

const kebabButton = styled.button`
  background-color: transparent;
  border: none;
`;
function CardItem({ item = {} }) {
  const [popOver, setPopOver] = useState(false);

  const imgStyle = {
    backgroundImage: `URL(${item.imageSource || item.image_source})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: `100%`,
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };

  const nowDate = getTimeDiff(new Date(item.createdAt || item.created_at));

  const handleKebabClick = () => {
    setPopOver(true);
  };

  const handleClosekebab = () => {
    setPopOver(false);
  };

  return (
    <div className="card">
      <div className="card-img-wrap">
        {item.imageSource || item.image_source ? (
          <div className="card-img" style={imgStyle}></div>
        ) : (
          <img className="noImg" src={noImg} alt="no image" />
        )}
      </div>
      <div className="card-information">
        <div className="kebab-container">
          <div className="time">{nowDate}</div>
          <kebabButton onClick={handleKebabClick}>
            <img className="kebab" src={kebabImg} alt="" />
          </kebabButton>
          {popOver && <PopOver onBlur={handleClosekebab}></PopOver>}
        </div>
        <p>{item.description}</p>
        <div className="day">
          {item.createdAt?.split("T")[0] || item.created_at?.split("T")[0]}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
