import React from "react";
import "../../styles/landing.css";

const Search = () => {
  return (
    <div
      style={{
        marginTop: "4rem",
        marginBottom: "4rem",
      }}
    >
      <form className="search-area" style={{}}>
        {/* <img src="/images/Search.svg" alt="검색 이미지" /> */}
        <input
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
      </form>
    </div>
  );
};

export default Search;
