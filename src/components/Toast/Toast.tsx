// import { useContext } from "react";
import style from "./Toast.module.css";
import checkImg from "../../assets/img/checkImg.svg";
import closeIcon from "../../assets/img/closeIcon.svg";
import { ReactNode } from "react";

interface ToastProp {
  children: ReactNode;
  onClick: () => void;
}

const Toast = ({ children, onClick }: ToastProp) => {
  return (
    <div className={style.root}>
      <div className={style.text}>
        <img src={checkImg} alt="checked" /> {children}
      </div>
      <button onClick={onClick}>
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
};
export default Toast;
