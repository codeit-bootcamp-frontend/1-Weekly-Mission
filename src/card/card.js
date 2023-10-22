import CardImage from "./cardImage";
import CardTime from "./cardTime";
import CardContent from "./cardContent";
import CardDate from "./cardDate";

import noImg from "../image/noimg_logo.svg";

const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

// 더 간결하게 구현해보기.. (시간 부족 관계로 이런 코드가 탄생했습니다..)
const getTimeDiff = (value) => {
  const now_time = Date.now();
  const time_created = new Date(value);
  const time_diff = (now_time - time_created) / 1000; // 차이를 초 단위로 계산

  if (time_diff < 60) {
    return "1 minute ago";
  } else if (time_diff < 3600) {
    const minutes = Math.floor(time_diff / 60);
    return `${minutes} minutes ago`;
  } else if (time_diff < 86400) {
    const hours = Math.floor(time_diff / 3600);
    return `${hours} hours ago`;
  } else if (time_diff < 2592000) {
    const days = Math.floor(time_diff / 86400);
    return `${days} days ago`;
  } else if (time_diff < 31536000) {
    const months = Math.floor(time_diff / 2592000);
    return `${months} months ago`;
  } else {
    const years = Math.floor(time_diff / 31536000);
    return years === 1 ? "1 year ago" : `${Math.floor(years)} years ago`;
  }
};

const Card = ({ item }) => {
  const { id, createdAt, url, description, imageSource } = item;
  const get_time = getTimeDiff(createdAt);
  const get_date = formatDate(createdAt);

  // const yes_img = "card_img";

  return (
    <a className="card_block" href={url} key={id}>
      {/* <div className="image_area"> */}
      {imageSource ? (
        <CardImage src={imageSource} />
      ) : (
        <CardImage className="img_not_loaded" src={noImg} />
      )}
      {/* </div> */}
      <div className="description_area">
        <CardTime set_time={get_time} />
        <CardContent>{description}</CardContent>
        <CardDate set_date={get_date} />
      </div>
    </a>
  );
};

export default Card;
