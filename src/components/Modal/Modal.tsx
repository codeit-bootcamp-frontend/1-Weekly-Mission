import style from "./Modal.module.css";
import closeIcon from "../../assets/img/modal-close.svg";
import clsx from "clsx";
import Image from "next/image";

// interface ModalProp {
//   color: string;
//   type: string;
//   buttonTitle: string;
// }

interface ModalType {
  [key: string]: { color: string; type: string; buttonTitle: string };
  // "폴더 이름 변경": ModalProp;
  // "폴더 추가": ModalProp;
  // "폴더 삭제": ModalProp;
  // "링크 삭제": ModalProp;
}

const MODAL_TYPE: ModalType = {
  "폴더 이름 변경": { color: "blue", type: "input", buttonTitle: "변경하기" },
  "폴더 추가": { color: "blue", type: "input", buttonTitle: "추가하기" },
  "폴더 삭제": { color: "red", type: "data", buttonTitle: "삭제하기" },
  "링크 삭제": { color: "red", type: "data", buttonTitle: "삭제하기" },
};

interface Props {
  title: string;
  data: string;
  modalFunc?: () => void;
  onExitClick: () => void;
}

function Modal({ title, data, modalFunc, onExitClick }: Props) {
  const handleExitClick = () => {
    onExitClick();
  };
  return (
    <div className={style.modalWrapper}>
      <div className={style.root}>
        <button className={style.closeModal} onClick={handleExitClick}>
          <Image src={closeIcon} alt="모달 닫기" />
        </button>
        <h1 className={style.title}>{title}</h1>
        {MODAL_TYPE[title].type === "input" && (
          <input className={style.modalInput} placeholder={data}></input>
        )}
        {MODAL_TYPE[title].type === "data" && <p className="p">{data}</p>}
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
