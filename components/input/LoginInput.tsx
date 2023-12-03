import React, { useState, useEffect } from "react";
import Input from "./Input";
import styles from "./LoginInput.module.css";

const minLength = (value: string) => value.length > 3;

const checkSpecialCharacters = (value: string): boolean => {
  const re = /[^a-zA-Z0-9ㄱ-힣]/gm;
  return re.test(value) ? false : true;
};

const checkAreCombined = (value: string): boolean => {
  const re = /^(?=.*\d)(?=.*[a-zA-Z]).+$/gm;
  return re.test(value);
};

// 정규식이 false 이면은 검증 실패 true이면은 검증 성공으로 통일
export default function LoginInput() {
  const [value, setValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length > 0) {
      if (
        !minLength(value) ||
        !checkSpecialCharacters(value) ||
        !checkAreCombined(value)
      ) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  }, [value]);

  return (
    <div className={styles.container}>
      <Input
        value={value}
        onChange={handleValueChange}
        isvalid={value.length ? (isValid ? "true" : "false") : undefined}
      ></Input>
      {value.length > 0 && (
        <span className={styles.validText}>
          {isValid ? "유효한 아이디입니다" : "유효하지 않은 아이디 입니다"}
        </span>
      )}
    </div>
  );
}
