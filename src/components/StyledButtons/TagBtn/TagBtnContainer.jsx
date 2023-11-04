import "../TagBtn/TagBtnContainer.css";
import AddImg from "../../../assets/image/icon-add.svg";
import AddFolder from "../../../modals/contents/AddFolder";
import { useState } from "react";

const tagBtnStyle = {
  width: "16px",
  height: "16px",
};

function TagBtnContainer({ folderTagBtnList, selectedTag, handleOnClick }) {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const changeOpenState = (openState) => setOpen(openState);

  return (
    <>
      <div className="tag_div">
        <div className="tag_container">
          {folderTagBtnList.map((data) => (
            <button
              className={data.id === selectedTag ? "tag checked" : "tag"}
              id={data?.id}
              data-count={data?.link.count}
              onClick={() => handleOnClick(data?.id, data?.name)}
            >
              {data?.name}
            </button>
          ))}
        </div>

        <div className="tag-InnerText" onClick={handleClick}>
          <h4 className="tag-InnerText_text">폴더 추가</h4>
          <img src={AddImg} style={tagBtnStyle} alt="add icon" />
        </div>
        <AddFolder isOpen={isOpen} changeOpenState={changeOpenState} />
      </div>
    </>
  );
}

export default TagBtnContainer;
