import style from "./Modal.module.css";
import closeIcon from "../../assets/img/modal-close.svg";
import clsx from "clsx";
const MODAL_TYPE = {
  "폴더 이름 변경": { color: "blue", type: "input", buttonTitle: "변경하기" },
  "폴더 추가": { color: "blue", type: "input", buttonTitle: "추가하기" },
  "폴더 삭제": { color: "red", type: "data", buttonTitle: "삭제하기" },
  "링크 삭제": { color: "red", type: "data", buttonTitle: "삭제하기" },
};
function Modal({ title, data, modalFunc, onExitClick }) {
  const handleExitClick = () => {
    onExitClick(true);
  };
  return (
    <div className={style.modalWrapper}>
      <div className={style.root}>
        <button className={style.closeModal} onClick={handleExitClick}>
          <img src={closeIcon} alt="모달 닫기" />
        </button>
        <h1 className={style.title}>{title}</h1>
        {MODAL_TYPE[title].type === "input" && (
          <input className={style.modalInput} placeholder={data}></input>
        )}
        {MODAL_TYPE[title].type === "data" && <p>{data}</p>}
        <button
          className={clsx(style.button, {
            [style.blueButton]: MODAL_TYPE[title].color === "blue",
            [style.redButton]: MODAL_TYPE[title].color === "red",
          })}
          onClick={modalFunc}
        >
          {MODAL_TYPE[title].buttonTitle}
        </button>
      </div>
    </div>
  );
}
export default Modal;
