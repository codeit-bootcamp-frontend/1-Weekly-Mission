import "../styles/CardItem.css";
import logo from "../assets/emptyImg.svg";

const formatDate = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  const formattedCreatedAt = `${year}. ${month}. ${dayOfMonth}`;
  return formattedCreatedAt;
};

const timeDiff = (createdAt) => {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  const timeDiffInMilliseconds = currentDate - createdDate;
  const timeDiffInMinutes = Math.floor(timeDiffInMilliseconds / (1000 * 60));
  const timeDiffInHours = Math.floor(timeDiffInMinutes / 60);
  const timeDiffInDays = Math.floor(timeDiffInHours / 24);
  const timeDiffInMonths = Math.floor(timeDiffInDays / 30);
  const timeDiffInyears = Math.floor(timeDiffInMonths / 12);

  if (timeDiffInMinutes < 2) {
    return "1 minute ago";
  }
  if (timeDiffInMinutes <= 59) {
    return `${timeDiffInMinutes} minutes ago`;
  }
  if (timeDiffInMinutes <= 60) {
    return "1 hour ago";
  }
  if (timeDiffInHours <= 23) {
    return `${timeDiffInHours} hours ago`;
  }
  if (timeDiffInHours <= 24) {
    return "1 day ago";
  }
  if (timeDiffInDays <= 30) {
    return `${timeDiffInDays} days ago`;
  }
  if (timeDiffInDays <= 31) {
    return `1 month ago`;
  }
  if (timeDiffInMonths <= 11) {
    return `${timeDiffInMonths} months ago`;
  }
  if (timeDiffInDays <= 31) {
    return `1 year ago`;
  }
  return `${timeDiffInyears} years ago`;
};

function CardItem({ item }) {
  const { createdAt, url, title, description, imageSource } = item;

  const formattedCreatedAt = formatDate(createdAt);
  const timeDifference = timeDiff(createdAt);

  return (
    <a className="CardItem" href={url} target="_blank" rel="noopener noreferrer">
      <img className="CardItem__img" src={imageSource === undefined ? logo : imageSource} alt={title} />
      <div className="CardItem__container">
        <p className="CardItem__container__time-diff">{timeDifference}</p>
        <p className="CardItem__container__description">
          {title}
          <br />
          {description}
        </p>
        <p className="CardItem__container__createdAt">{formattedCreatedAt}</p>
      </div>
    </a>
  );
}

export default CardItem;
