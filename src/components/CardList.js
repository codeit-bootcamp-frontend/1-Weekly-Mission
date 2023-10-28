import Card from "./Card";
import SearchBar from "./SearchBar";
import "./CardList.css";

const CardList = ({ cards }) => {
  return (
    <div className="main-container">
      <SearchBar />
      <div className="card-list-wrapper">
        <div className="card-list">
          {cards.map((card) => (
            <Card value={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardList;
