import linkImg from "../assets/images/link.svg";
import "./AddLink.css";

function AddLink() {
  return (
    <div className="link-add-box">
      <input className="link-add" placeholder="링크를 추가해 보세요">
        <img
          className="link-add-icon"
          src={linkImg}
          alt="연결고리 이미지"
        ></img>
      </input>
      <a className="link-add-button" href="/">
        추가하기
      </a>{" "}
      {/*추후 Link로 변경*/}
    </div>
  );
}

export default AddLink;
