import React, { useState } from "react";
import linkImg from "../img/svg/link.svg";

const AddInputSection = ({ handleListClick, newLink, setNewLink }) => {
  const onAddInputChange = (event) => {
    const { value } = event.target;
    setNewLink(value);
  };
  return (
    <div className="section-title section-title-first">
      <div className="add-link">
        <img src={linkImg} alt="링크추가이미지" />
        <input
          name="addLink"
          value={newLink}
          type="text"
          onChange={onAddInputChange}
          placeholder="링크를 추가해 보세요"
        />
        <button
          type="button"
          onClick={(event) =>
            handleListClick(event, "폴더에 추가", "폴더에 추가", newLink)
          }
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default AddInputSection;
