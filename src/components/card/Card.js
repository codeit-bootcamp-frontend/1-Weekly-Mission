import CardImage from "./CardImage";
import CardTime from "./CardTime";
import Kebab from "./Kebab";
import CardContent from "./CardContent";
import CardDate from "./CardDate";
import { getTimeDiff, formatDate } from "./getTime";

import noImg from "../../image/noimg.svg";

const Card = ({ item }) => {
  const {
    id,
    createdAt,
    created_at,
    url,
    description,
    imageSource,
    image_source,
  } = item;
  const get_time = getTimeDiff(createdAt || created_at);
  const get_date = formatDate(createdAt || created_at);

  return (
    <div className="card_block" key={id}>
      <div className="image_area">
        <CardImage src={imageSource || image_source || noImg} />
      </div>
      <div className="description_area">
        <div className="time_wrapper">
          <CardTime set_time={get_time} />
          <Kebab />
        </div>
        <CardContent url={url}>{description}</CardContent>
        <CardDate set_date={get_date} />
      </div>
    </div>
  );
};

export default Card;
