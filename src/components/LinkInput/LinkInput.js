import React, { useState } from "react";
import "./LinkInput.css";

const LinkInput = () => {
  const [link, setLink] = useState("");

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleAddLink = () => {
    console.log("Link added:", link);
    setLink("");
  };

  return (
    <div className="link-input-container">
      <input
        type="text"
        placeholder="링크를 추가해 보세요."
        value={link}
        onChange={handleLinkChange}
      />
      <button onClick={handleAddLink}>추가하기</button>
    </div>
  );
};

export default LinkInput;
