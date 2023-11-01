import React, { useState } from "react";
import "./LinkInput.css";
import Link from "../../assets/icons/Link";

const LinkInput = () => {
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
        <Link />
        <input
          type="text"
          placeholder="링크를 추가해 보세요."
          value={link}
          onChange={handleLinkChange}
        />
        <button onClick={handleAddLink}>추가하기</button>
      </div>
    </div>
  );
};

export default LinkInput;
