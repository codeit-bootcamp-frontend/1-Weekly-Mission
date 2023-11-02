import "../TagBtn/TagBtnContainer.css";
import AddImg from "../../../assets/image/icon-add.svg";

const tagBtnStyle = {
  width: "16px",
  height: "16px",
};

function TagBtnContainer({ folderTagBtnList, selectedTag, handleOnClick }) {
  return (
    <>
      <div className="tag_div">
        <div className="tag_container">
          {folderTagBtnList.map((data) => {
            const TagBtnClass = data.id === selectedTag ? "tag checked" : "tag";

            return (
              <button
                className={TagBtnClass}
                id={data?.id}
                onClick={() => handleOnClick(data?.id, data?.name)}
              >
                {data?.name}
              </button>
            );
          })}
        </div>

        <div className="tag-InnerText">
          <h4 className="tag-InnerText_text">폴더 추가</h4>
          <img src={AddImg} style={tagBtnStyle} alt="add icon" />
        </div>
      </div>
    </>
  );
}

export default TagBtnContainer;
