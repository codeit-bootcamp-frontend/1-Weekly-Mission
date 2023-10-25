import Card from "./Card";
import searchIcon from "../assets/svg/Search.svg";
import "./Main.css";

export function Main({ cards }) {
  return (
    <div>
      <form className="search-bar">
        <div className="search-bar-wrapper">
          <img className="search-icon" src={searchIcon} alt="검색아이콘" />
          <input
            className="search-bar-input"
            placeholder="링크를 검색해 보세요."
          />
        </div>
      </form>
      <div className="card-list-wrapper">
        <div className="card-list">
          {cards.map((card) => (
            <Card value={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
