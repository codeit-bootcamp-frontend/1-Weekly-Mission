import { useState } from 'react';
import styles from '../components/SignInput/SignInput.module.css';

function useEyesValue() {
  const [eyesValue, setEyesValue] = useState(false);

  function handleEyesClick() {
    if (eyesValue) {
      setEyesValue(false);
    } else {
      setEyesValue(true);
    }
  }

  const eyesStyle = `${styles.eyes} ${
    eyesValue ? styles.eyesOn : styles.eyesOff
  }`;

  return [eyesValue, handleEyesClick, eyesStyle];
}

export default useEyesValue;
