import { useState } from "react";
import style from "./AddLink.module.css";
import linkIcon from "../assets/img/link.svg";
import AddLinkModal from "./AddLinkModal";
function AddLink({ folders }) {
  const [url, setUrl] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModal(true);
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleExitClick = (isClosed) => {
    setIsModal(!isClosed);
  };
  return (
    <>
      <form className={style.root} onSubmit={handleSubmit}>
        <div className={style.section}>
          <img src={linkIcon} alt="링크 아이콘" />
          <input
            placeholder="링크를 추가해 보세요."
            onChange={handleChange}
          ></input>
        </div>
        <button className={style.button}>추가하기</button>
      </form>
      {isModal && (
        <AddLinkModal
          url={url}
          folders={folders}
          onExitClick={handleExitClick}
        />
      )}
    </>
  );
}
export default AddLink;
