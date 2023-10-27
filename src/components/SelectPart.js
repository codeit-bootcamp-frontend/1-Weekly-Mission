import add from "../images/add.svg";
import share from "../images/share.svg";
import change from "../images/pen.svg";
import deleting from "../images/delete.svg";
import "../styles/SelectPart.css";
import SelectItem from "./SelectItem";
import { useState } from "react";

function SelectPart({ selectItems, handleRenderItems }) {
  return (
    <div className="SelectPart">
      <div className=" selectList-info">
        <div className="selectList-wrapper">
          <button className="entirety">전체 </button>
          {selectItems.map((item, index) => (
            <SelectItem
              className={"item-wrapper"}
              key={item.id}
              item={item}
              handleRenderItems={handleRenderItems}
            />
          ))}
        </div>
        <div className="add-folder">
          <span className="add-text">폴더 추가</span>
          <img className="add" src={add} alt="" />
        </div>
      </div>
      <div className="links-info">
        <span className="folder-name">유용한 글</span>
        <div className="handle-link">
          <div className="sharing">
            <img className="share" src={share} alt="" />
            <span>공유</span>
          </div>
          <div className="changing">
            <img className="change" src={change} alt="" />
            <span>이름 변경</span>
          </div>
          <div className="deleting">
            <img className="delete" src={deleting} alt="" />
            <span>삭제</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPart;
