import { useState } from "react";
import { getFolderData } from "../api";
import { useEffect } from "react";
import './CardList.css';

function formatDate(value) {
	const date = new Date(value);
	return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ createdAt, description, imageSource }) {

  function getTimeAgo(value) {
    const now = new Date();
    const createdDate = new Date(value);
    const timeDifference = now - createdDate;
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

  return (
    <div className="card">
      <img className="card-img" src={imageSource} />
      <div className="card-content">
        <div className="createdAt">{getTimeAgo(createdAt)}</div>
        <div className="description">{description}</div>
        <div>{formatDate(createdAt)}</div>
      </div>
    </div>
  );
  }

export function CardList() {
  const [folderData, setFolderData] = useState([]);

  const handleLoad = async () => {
    let result;
    try {
      result = await getFolderData();
      result = result.folder.links;
      setFolderData(result);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="cardList-container">
      <div className="search-input">
        <input type="text" />
        <img  className="searchImg" src="searchImg" alt="이미지"/> 
      </div>
      <div className="card-container">
        {folderData.map((item) => {
          const { id, createdAt, description, imageSource, title, url } = item;
          return (
            <Card key={id} createdAt={createdAt} description={description} imageSource={imageSource} title={title} url={url} />
          );
        })}
      </div>
    </div>
  );
}