import add from "../images/add.svg";
import share from "../images/share.svg";
import change from "../images/pen.svg";
import deleting from "../images/delete.svg";
import "../styles/SelectPart.css";
import SelectItem from "./SelectItem";
import { useRef, useState } from "react";

function SelectPart({ selectItems, handleRenderItems, handleUserLinks }) {
  const [activeBtn, setActiveBtn] = useState(false);

  const toggleActive = () => {
    setActiveBtn((prev) => {
      return !prev;
    });
  };
  const linkRef = useRef("");
  const buttonRef = useRef("");
  const onClick = () => {
    handleUserLinks();
    toggleActive();
    toggleDisplay();
  };

  const toggleDisplay = () =>
    buttonRef.current.className === "SelectItem" + " active"
      ? (linkRef.current.className = "displayNo")
      : (linkRef.current.className = "displayOn");
  return (
    <div className="SelectPart">
      <div className=" selectList-info">
        <div className="selectList-wrapper">
          <button
            ref={buttonRef}
            onClick={onClick}
            className={"SelectItem" + (activeBtn ? " active" : "")}
          >
            전체
          </button>
          <button></button>
          {selectItems.map((item) => (
            <SelectItem
              key={item.id}
              name={item.name}
              item={item}
              handleRenderItems={handleRenderItems}
              toggleDisplay={toggleDisplay}
            />
          ))}
        </div>
        <div className="add-folder">
          <span className="add-text">폴더 추가</span>
          <img className="add" src={add} alt="" />
        </div>
        <button className="add-btn">
          <span className="add-text btn">폴더 추가</span>
          <img className="add btn" src={add} alt="" />
        </button>
      </div>

      <div className="links-info">
        <span className="folder-name">전체</span>
        <div ref={linkRef} className="displayNo">
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
