import "../styles/Main.css";
import "../styles/reset.css";
import CardCollection from "./CardCollection";
import SearchIcon from "../images/Search.svg";

function MainSpace({ items }) {
  return (
    <main>
      <div className="contents-wrapper">
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="search-bar"
            placeholder="링크를 검색해 보세요"
          />

          <img src={SearchIcon} className="search-icon-image" alt=" " />
        </div>

        <section>
          <CardCollection cardItems={items} />
        </section>
      </div>
    </main>
  );
}

export default MainSpace;
