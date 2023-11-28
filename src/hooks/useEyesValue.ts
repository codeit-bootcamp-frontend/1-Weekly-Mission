import { useState } from "react";
import styles from "../components/SignInput/SignInput.module.css";
import clsx from "clsx";

function useEyesValue() {
  const [eyesValue, setEyesValue] = useState(false);

  function handleEyesClick() {
    setEyesValue((current) => !current);
  }

  const eyesStyle = clsx(styles.eyes, eyesValue ? styles.eyesOn : styles.eyesOff);

  return { eyesValue, handleEyesClick, eyesStyle };
}

export default useEyesValue;
