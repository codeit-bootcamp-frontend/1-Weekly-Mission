import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./PassWordInput.module.css";
import { useState } from "react";
import React from "react";
import Input from "./Input";

export default function PassWordInput() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className={styles.container}>
      <Input TYPE type={isShow ? "text" : "password"} />;
      <div onClick={handleShow}>
        {!isShow ? (
          <FontAwesomeIcon icon={faEyeSlash} />
        ) : (
          <FontAwesomeIcon icon={faEye} />
        )}
      </div>
    </div>
  );
}
