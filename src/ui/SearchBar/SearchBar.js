import "./SearchBar.css";
import "../../reset.css";
import { useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");
  const handleTitleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <form className="search-form">
      <img
        className="search-icon"
        src="images/search-icon.png"
        alt="search icon"
      />
      <input
        className="search-bar"
        value={text}
        placeholder="검색어를 입력하세요."
        onChange={handleTitleChange}
      ></input>
    </form>
  );
}
