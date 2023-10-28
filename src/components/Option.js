import shareImg from "../img/share.svg";
import penImg from "../img/pen.svg";
import deleteImg from "../img/delete.svg";
import "./Option.css";

const Option = ({ currentFolder }) => {
  const show = currentFolder.id !== "";

  const share = {
    src: shareImg,
    name: "공유",
  };
  const rename = {
    src: penImg,
    name: "이름 변경",
  };
  const deleteFolder = {
    src: deleteImg,
    name: "삭제",
  };

  const options = [share, rename, deleteFolder];

  return (
    <div className="option-container">
      <h1>{currentFolder.name}</h1>
      {show ? (
        <div className="option-wrapper">
          {options.map((option) => (
            <div className="option-box">
              <img src={option.src} alt="공유" />
              <div>{option.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Option;
