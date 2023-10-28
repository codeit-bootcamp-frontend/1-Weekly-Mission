import FolderOptionBtn from "./FolderOptionBtn";
import shareImg from "../assets/images/share.svg";
import changNameImg from "../assets/images/pen.svg";
import deleteImg from "../assets/images/Group 36.svg";
import "./ShowFolderName.css";

function ShowFolderName({ selectedFolder }) {
  const btnsData = [
    {
      id: "1",
      name: "공유",
      imgSrc: shareImg,
    },
    { id: "2", name: "이름 변경", imgSrc: changNameImg },
    {
      id: "3",
      name: "삭제",
      imgSrc: deleteImg,
    },
  ];

  return (
    <div className="folder-option">
      {selectedFolder || "전체"}
      <div className="folder-option-btns">
        {btnsData?.map((btn) => {
          return <FolderOptionBtn btnData={btn} key={btn.id} />;
        })}
      </div>
    </div>
  );
}

export default ShowFolderName;
