import "./Cards.css";
import logoImg from "../img/noImgLogo.svg";
import GetTimeDiff from "./GetTimeDiff";

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

  const nowDate = GetTimeDiff(new Date(item.createdAt));

  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      <div key={id} className="card">
        <div className="card-img-wrap">
          {!item.imageSource ? (
            <img className="logoImg" src={logoImg} alt="logoImg" />
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

const Cards = ({ personalfolder }) => {
  const { links } = personalfolder;

  return (
    <div className="section-title cardlist">
      <div className="cardlist-inner">
        {links && links.map((item) => <CardItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Cards;
