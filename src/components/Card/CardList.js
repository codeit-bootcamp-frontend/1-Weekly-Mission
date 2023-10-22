import { useEffect, useState } from "react";
import { getFolderData } from "../../APIs/api";
import "../../Global.css";
import "./CardList.css";
import nonImage from "../../assets/nonImage.png";

// 날짜를 이쁘게
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// 카드 컴포넌트
function Card({ createdAt, description, imageSource, title, url }) {
  // 얼마전에 등록했는지?
  function getFolderCreatedAgo(value) {
    const currentDate = new Date();
    const createdDate = new Date(value);
    const timeDifference = currentDate - createdDate;
    const secondDifference = Math.floor(timeDifference / 1000);

    if (secondDifference < 120) {
      return "1 minute ago";
    }

    const minuteDifference = Math.floor(secondDifference / 60);
    if (minuteDifference < 60) {
      return `${minuteDifference} minutes ago`;
    }

    const hourDifference = Math.floor(minuteDifference / 60);
    if (hourDifference < 24) {
      return `${hourDifference} hours ago`;
    }

    const dayDifference = Math.floor(hourDifference / 24);
    if (dayDifference < 30) {
      return `${dayDifference} days ago`;
    }

    const monthDifference = Math.floor(dayDifference / 30);
    if (monthDifference < 12) {
      return `${monthDifference} months ago`;
    }

    const yearDifference = Math.floor(monthDifference / 12);
    return `${yearDifference} years ago`;
  }

  function handleSiteMoveClick() {
    window.open(url);
  }

  return (
    <div className="card" onClick={handleSiteMoveClick}>
      <div className="folder-img-container" href={url} target="_blank">
        <img className="folder-img" src={imageSource || nonImage} alt={title} />
      </div>

      <div className="folder-contents-container">
        <div className="folder-createdAgo">
          {getFolderCreatedAgo(createdAt)}
        </div>
        <div className="folder-description">{description}</div>
        <div className="folder-createdAt">{formatDate(createdAt)}</div>
      </div>
    </div>
  );
}

// 카드리스트 컴포넌트
function CardList() {
  const [cardInfos, setCardInfos] = useState([]);

  const handleFolderLoad = async () => {
    const { folder } = await getFolderData();
    const { links } = folder;
    setCardInfos(links);
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <div className="card-container">
      {cardInfos.map((cardInfo) => {
        const { id, createdAt, description, imageSource, title, url } =
          cardInfo;
        return (
          <Card
            key={id}
            createdAt={createdAt}
            description={description}
            imageSource={imageSource}
            title={title}
            url={url}
          />
        );
      })}
    </div>
  );
}

export { Card, CardList };
