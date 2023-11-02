import React from "react";
import "./addLink.css";
const AddLink = () => {
  return (
    <form
      style={{
        position: "relative",
      }}
    >
      <input className="search-input" placeholder="링크를 추가해 보세요" />
      <button className="search-input-button">추가하기</button>
    </form>
  );
};

export default AddLink;
