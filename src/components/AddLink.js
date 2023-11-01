import "../css/addlink.css";
import addlinkImg from "../images/link.svg";

function AddLink() {
  return (
    <div className="addLinkContainer">
      <div className="addlinkContainer">
        <input className="addlinkInput" placeholder="링크를 추가해 보세요." />
        <img className="addlinkImg" src={addlinkImg} alt="링크 이미지" />
        <button className="addlinkButton">추가하기</button>
      </div>
    </div>
  );
}

export default AddLink;
