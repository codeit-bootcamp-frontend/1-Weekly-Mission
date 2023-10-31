import React, { useState } from "react";
import "../components/LinkAdd.css";
import linkImg from "../img/link.svg";

const LinkAdd = () => {
  const [link, setLink] = useState("");

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleAddLink = () => {
    setLink("");
  };

  return (
    <div className="link-add-form">
      <div>
        <img src={linkImg} alt="링크" />
        <input
          type="text"
          value={link}
          onChange={handleLinkChange}
          placeholder="링크를 추가해 보세요"
        />
        <button onClick={handleAddLink}>추가하기</button>
      </div>
    </div>
  );
};

export default LinkAdd;
