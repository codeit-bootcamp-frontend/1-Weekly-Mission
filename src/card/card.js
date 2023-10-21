import CardImage from "./cardImage";
import CardTime from "./cardTime";
import CardContent from "./cardContent";
import CardDate from "./cardDate";
import catImg from "../image/cat.svg";
import "./card.css";

const Card = () => {
  return (
    <div className="card_block">
      <div className="image_area">
        <CardImage src={catImg} />
      </div>
      <div className="description_area">
        <CardTime>10 minutes ago</CardTime>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
          consequat. Tldkd
        </CardContent>
        <CardDate>2023. 3. 15</CardDate>
      </div>
    </div>
  );
};

export default Card;
