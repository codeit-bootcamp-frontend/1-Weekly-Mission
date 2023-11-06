import noImg from "../assets/images/noImage.png";
import { getTimeDiff } from "../utils/getTimeDiff";
import kebabImg from "../assets/images/kebab.svg";
import "../styles/cardItem.css";
import { styled } from "styled-components";

const kebabButton = styled.button`
  background-color: transparent;
  border: none;
`;
function CardItem({ item = {} }) {
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
          <kebabButton>
            <img className="kebab" src={kebabImg} alt="" />
          </kebabButton>
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
