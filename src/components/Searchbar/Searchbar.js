import searchIcon from "../../assets/Search.png";

import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-inner">
        <label htmlFor="search" />
        <img src={searchIcon} alt="Search" />
        <input
          className="searchbar-input"
          id="search"
          name="search"
          placeholder="링크를 검색해 보세요"
          autoFocus
        />
      </div>
      <div>X</div>
    </div>
  );
};

export default Searchbar;
