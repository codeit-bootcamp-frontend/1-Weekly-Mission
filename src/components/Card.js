import "../styles/Card.css";
import CardList from "./CardList";

const Card = ({ folderData }) => {
  return (
    <div className="Card">
      <CardList folderData={folderData} />
    </div>
  );
};

export default Card;
