import './Main.css';
import noImage from './img/no-image.svg';

export default function Card(item) {
  let image = {};
  if (item.item.imageSource === undefined) {
    image = {
      backgroundImage: `url(${noImage})`,
    };
  } else {
    image = {
      backgroundImage: `url(${item.item.imageSource})`,
    };
  }
  let apiDate = new Date(item.item.createdAt);

  function dateCalculator(apiDate) {
    let myDate = new Date();
    let elapsedMinute = Math.floor((myDate - apiDate) / 1000 / 60);
    let elapsedHour = Math.floor((myDate - apiDate) / 1000 / 60 / 60);
    let elapsedDays = Math.floor((myDate - apiDate) / 1000 / 60 / 60 / 24);
    let elapsedMonth = Math.floor(
      (myDate - apiDate) / 1000 / 60 / 60 / 24 / 31
    );
    let elapsedYear = Math.floor(
      (myDate - apiDate) / 1000 / 60 / 60 / 24 / 31 / 12
    );

    if (elapsedMinute < 60) {
      if (elapsedMinute < 2) {
        return `${elapsedMinute} minute ago`;
      }
      return `${elapsedMinute} minutes ago`;
    }
    if (elapsedHour < 24) {
      if (elapsedHour < 2) {
        return `${elapsedHour} hour ago`;
      }
      return `${elapsedHour} hours ago`;
    }
    if (elapsedDays < 31) {
      if (elapsedDays < 2) {
        return `${elapsedDays} day ago`;
      }
      return `${elapsedDays} days ago`;
    }
    if (elapsedMonth < 12) {
      if (elapsedMonth < 2) {
        return `${elapsedMonth} month ago`;
      }
      return `${elapsedMonth} months ago`;
    }
    if (elapsedYear) {
      if (elapsedYear < 2) {
        return `${elapsedYear} year ago`;
      }
      return `${elapsedYear} years ago`;
    }
  }
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();
  return (
    <a href={item.item.url} className="card-wrapper">
      <div className="card-box">
        <div className="card-image" style={image}></div>
        <div className="card-text">
          <div>{elapsedTime}</div>
          <div className="text-description">{item.item.description}</div>
          <div>{`${year}. ${month}. ${days}`}</div>
        </div>
      </div>
    </a>
  );
}
