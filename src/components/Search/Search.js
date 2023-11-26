import React, { useEffect, useRef, useState } from "react";
import "../../styles/landing.css";
import CloseButton from "../../images/close-button.svg";
const Search = ({ getInputValue }) => {
  const [inputSearch, setInputSearch] = useState("");
  const mounted = useRef(false);
  function handleChange(e) {
    setInputSearch(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setInputSearch("");
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      getInputValue(inputSearch);
    }
  }, [inputSearch]);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }
  return (
    <div
      style={{
        marginTop: "4rem",
        marginBottom: "4rem",
      }}
    >
      <form className="search-area" style={{ position: "relative" }}>
        <input
          onChange={(e) => handleChange(e)}
          onKeyPress={handleKeyPress}
          value={inputSearch}
          placeholder="링크를 검색해 보세요."
          style={{
            height: "5rem",
            width: "100%",
            backgroundColor: "#CCD5E3",
            borderRadius: "1rem",
            display: "flex",
            padding: "1.5rem 4.5rem",
            justifyContent: "space-between",
            alignItems: "flex-start",
            alignSelf: "stretch",
            fontSize: "1.6rem",
            color: "#666",
            backgroundImage: `url("/images/Search.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 1.7rem bottom 50%",
          }}
        ></input>
        <button
          onClick={(e) => handleClick(e)}
          style={{ position: "absolute", top: "1.6rem", right: "4rem" }}
        >
          <img src={CloseButton} />
        </button>
      </form>
    </div>
  );
};

export default Search;
