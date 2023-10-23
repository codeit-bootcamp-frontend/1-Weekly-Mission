import "../css/Card.css";
import logoImg from "../../Assets/noImgLogo.svg";

/* 게시물 올린 시간 함수 */
function getTimeDiff(value) {
  const milliSeconds = new Date() - value;
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60)
    return `${Math.floor(minutes)}${
      Math.floor(minutes) > 1 ? " minutes ago" : " minute ago"
    }`;
  const hours = minutes / 60;
  if (hours < 24)
    return `${Math.floor(hours)}${
      Math.floor(hours) > 1 ? " hours ago" : " hour ago"
    }`;
  const days = hours / 24;
  if (days < 7)
    return `${Math.floor(days)}${
      Math.floor(days) > 1 ? " days ago" : " day ago"
    }`;
  const weeks = days / 7;
  if (weeks < 5)
    return `${Math.floor(weeks)}${
      Math.floor(weeks) > 1 ? " weeks ago" : " week ago"
    }`;
  const months = days / 30;
  if (months < 12)
    return `${Math.floor(months)}${
      Math.floor(months) > 1 ? " months ago" : " month ago"
    }`;
  const years = days / 365;
  return `${Math.floor(years)}${
    Math.floor(years) > 1 ? " years ago" : " year ago"
  }`;
}

/* 각 카드 컴포넌트 */
function CardItem({ item, key }) {
  /* 이미지 스타일 함수 */
  const imgStyle = {
    backgroundImage: `URL(${item.imageSource})`,
  };

  const nowDate = getTimeDiff(new Date(item.createdAt));
  const createdDate = item.createdAt.split("T")[0].split("-");

  return (
    <a href={item.url}>
      <div key={key} className="card">
        <div className="card-img-wrap">
          {!item.imageSource ? (
            <img className="logoImg" src={logoImg} alt={logoImg} />
          ) : (
            <div className="card-img" style={imgStyle}></div>
          )}
        </div>
        <div className="card-information">
          <div className="time">{nowDate}</div>
          <p>{item.description}</p>
          <div className="day">{createdDate.join(".")}</div>
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
