import "../css/Card.css";
import noImage from "../../Assets/noImage.png";
import getTimeDiff from "../../utils/utilTimeDiff";

/* 각 카드 컴포넌트 */
function CardItem({ item, key }) {
  /* 이미지 스타일 함수 */
  const imgStyle = {
    backgroundImage: `URL(${item.imageSource})`,
  };

  const nowDate = getTimeDiff(new Date(item.createdAt));
  const createdDate = item.createdAt.split("T")[0].split("-").join(".");

  return (
    <a href={item.url}>
      <div key={key} className="card">
        <div className="card-img-wrap">
          {!item.imageSource ? (
            <img className="logoImg" src={noImage} alt={noImage} />
          ) : (
            <div className="card-img" style={imgStyle}></div>
          )}
        </div>
        <div className="card-information">
          <div className="time">{nowDate}</div>
          <p>{item.description}</p>
          <div className="day">{createdDate}</div>
        </div>
      </div>
    </a>
  );
}

/* 카드리스트들 컴포넌트 */
function CardList({ folderLinks }) {
  console.log(folderLinks);
  return (
    <div className="section-title section-title-third">
      <div className="section-title-third-inner">
        {folderLinks &&
          folderLinks.map((item) => {
            return <CardItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}
export default CardList;
