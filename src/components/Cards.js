import "./Cards.css";
import logoImg from "../img/noImgLogo.svg";
import GetTimeDiff from "../utils/GetTimeDiff";

function CardItem({ item, id }) {
  const imgStyle = {
    backgroundImage: `URL(${item.imageSource})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: `100%`,
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };

  const noImgStyle = {
    backgroundImage: `URL(${logoImg})`,
    backgroundColor: "#DDDFFF",
    backgroundRepeat: "no-repeat",
    backgroundSize: "none",
    backgroundPosition: "center center",
  };

  const nowDate = GetTimeDiff(new Date(item.createdAt));

  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      <div key={id} className="card">
        <div className="card-img-wrap">
          {!item.imageSource ? (
            <div className="card-img" style={noImgStyle}></div>
          ) : (
            <div className="card-img" style={imgStyle}></div>
          )}
        </div>
        <div className="card-information">
          <div className="time">{nowDate}</div>
          <p>{item.description}</p>
          <div className="date">{item.createdAt.split("T")[0]}</div>
        </div>
      </div>
    </a>
  );
}

const Cards = ({ folderInfo }) => {
  const { links } = folderInfo;

  return (
    <div className="section-title cardlist">
      <div className="cardlist-inner">
        {links && links.map((item) => <CardItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Cards;
