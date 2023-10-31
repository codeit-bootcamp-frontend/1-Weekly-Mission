import add from "../images/add.svg";
import share from "../images/share.svg";
import change from "../images/pen.svg";
import deleting from "../images/delete.svg";
import "../styles/SelectPart.css";
import SelectItem from "./SelectItem";
import { useRef, useState } from "react";

function SelectPart({
  selectItems,
  handleClickUpdate,
  folderName,
  nowFolderId,
}) {
  const [activeAllBtn, setActiveAllBtn] = useState(false);

  const toggleActive = () => {
    setActiveAllBtn((prev) => {
      return !prev;
    });
  };
  const linkRef = useRef("");
  const buttonRef = useRef("");
  const onClick = () => {
    handleClickUpdate();
    toggleActive();
    toggleDisplay();
  };

  const toggleDisplay = () =>
    buttonRef.current.className.includes("active")
      ? (linkRef.current.className = "displayOn")
      : (linkRef.current.className = "displayNo");
  return (
    <div className="SelectPart">
      <div className=" selectList-info">
        <div className="selectList-wrapper">
          <button
            ref={buttonRef}
            onClick={onClick}
            className={"SelectItem" + (activeAllBtn ? " active" : "")}
            id={""}
            name="전체"
          >
            전체
          </button>

          {selectItems.map((item) => {
            return (
              <SelectItem
                key={item.id}
                item={item}
                handleClickUpdate={handleClickUpdate}
                toggleDisplay={toggleDisplay}
              />
            );
          })}
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
        <span className="folder-name">{folderName ? folderName : "전체"}</span>
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
