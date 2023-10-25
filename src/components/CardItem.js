import noImg from "../assets/images/noImage.png";
import getTimeDiff from "../utils/getTimeDiff";
import "../styles/cardItem.css";

function CardItem({ item }) {
  const imgStyle = {
    backgroundImage: `URL(${item.imageSource})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: `100%`,
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };

  const nowDate = getTimeDiff(new Date(item.createdAt));

  return (
    <div className="card">
      <div className="card-img-wrap">
        {!item.imageSource ? (
          <img className="noImg" src={noImg} alt="no image" />
        ) : (
          <div className="card-img" style={imgStyle}></div>
        )}
      </div>
      <div className="card-information">
        <div className="time">{nowDate}</div>
        <p>{item.description}</p>
        <div className="day">{item.createdAt.split("T")[0]}</div>
      </div>
    </div>
  );
}

export default CardItem;
