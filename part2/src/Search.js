import React from "react";

const Search = () => {
  return (
    <div
      style={{
        marginTop: "4rem",
        marginBottom: "4rem",
      }}
    >
      <form>
        {/* <img src="/images/Search.svg" alt="검색 이미지" /> */}
        <input
          placeholder="  링크를 검색해 보세요."
          style={{
            height: "5rem",
            width: "100%",
            backgroundColor: "#CCD5E3",
            borderRadius: "1rem",
            display: "flex",
            padding: "15px 16px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            alignSelf: "stretch",
            fontSize: "1.6rem",
            color: "#666",
            backgroundImage: `url("/images/Search.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
          }}
        ></input>
      </form>
    </div>
  );
};

export default Search;
