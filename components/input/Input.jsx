import { useRef, useState } from "react";
import styles from "./Input.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Input(props) {
  const inputDom = useRef();

  const handleBlur = () => {
    console.log(inputDom.current.value);
  };
  return (
    <input
      ref={inputDom}
      onBlur={handleBlur}
      className={cx("flex-center", "input")}
      {...props}
    />
  );
}

export default Input;
