import kebab from './kebab.svg';

function formatDateDifference(createdAt) {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = now - createdDate;

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12));

  if (minutes < 2) {
    return "1 minute ago";
  } else if (minutes <= 59) {
    return `${minutes} minutes ago`;
  } else if (hours < 2) {
    return "1 hour ago";
  } else if (hours <= 23) {
    return `${hours} hours ago`;
  } else if (days < 2) {
    return "1 day ago";
  } else if (days <= 30) {
    return `${days} days ago`;
  } else if (months < 2) {
    return "1 month ago";
  } else if (months <= 11) {
    return `${months} months ago`;
  } else if (years < 2) {
    return "1 year ago";
  } else {
    return `${years} years ago`;
  }
}

const CardExtraInfo = ( {createdAt} ) => {

  const formattedDate = formatDateDifference(createdAt);

  return(
    <div className="card-extra-info">
      <p className="upload-time">{formattedDate}</p>
      <img src={kebab} className="kebab" alt="더보기 아이콘"></img>
    </div>
  )
}

export default CardExtraInfo;