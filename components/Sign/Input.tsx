import { useEffect, useRef, useState } from "react";
import {
  validateEmailInput,
  validatePasswordInput,
} from "@/lib/utils/checkSign";
import eyesOffImg from "@/public/eye-off.svg";
import eyesOnImg from "@/public/eye-on.svg";
import * as Styled from "./Sign.styled";

interface Props {
  placeholder: string;
  type: string;
  first: boolean;
  label: string;
}

const Input = ({ placeholder, type, first, label }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [eyeToggle, setEyeToggle] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const HandleEyesClick = () => {
    if (inputRef.current?.getAttribute("type") === "text") {
      inputRef.current?.setAttribute("type", "password");
      setEyeToggle(!eyeToggle);
    } else {
      inputRef.current?.setAttribute("type", "text");
      setEyeToggle(!eyeToggle);
    }
  };

  const HandleInputFocusOut = () => {
    const targetValue = inputRef.current?.value ? inputRef.current.value : "";

    if (type === "email") {
      if (validateEmailInput(targetValue)) {
        const errorMsg = validateEmailInput(targetValue);
        setErrMsg(errorMsg);
      } else {
        setErrMsg("");
      }
    } else if (type === "password") {
      if (validatePasswordInput(targetValue)) {
        const errorMsg = validatePasswordInput(targetValue);
        setErrMsg(errorMsg);
      } else {
        setErrMsg("");
      }
    }
  };

  useEffect(() => {
    if (first) {
      inputRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [first]);

  return (
    <Styled.InputTagContainer>
      <Styled.InputLabel htmlFor={type}>{label}</Styled.InputLabel>
      {type === "email" ? (
        <Styled.InputTag
          placeholder={placeholder}
          type={type}
          ref={inputRef}
          id={type}
          onBlur={HandleInputFocusOut}
          $err={errMsg}
        />
      ) : (
        <Styled.InputTag
          placeholder={placeholder}
          type={type}
          ref={inputRef}
          id={type}
          onBlur={HandleInputFocusOut}
          $err={errMsg}
        />
      )}
      {type === "email" ||
        (eyeToggle ? (
          <Styled.EyesOn
            src={eyesOnImg}
            alt="비밀번호 토글"
            onClick={HandleEyesClick}
          />
        ) : (
          <Styled.EyesOff
            src={eyesOffImg}
            alt="비밀번호 토글"
            onClick={HandleEyesClick}
          />
        ))}
      {errMsg && <Styled.ErrMsg>{errMsg}</Styled.ErrMsg>}
    </Styled.InputTagContainer>
  );
};

export default Input;
