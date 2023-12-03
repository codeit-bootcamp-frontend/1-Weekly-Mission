import { SetStateAction, useEffect, useRef, useState } from "react";
import eyesOffImg from "@/public/eye-off.svg";
import eyesOnImg from "@/public/eye-on.svg";
import * as Styled from "./StyledSign";

interface Props {
  placeholder: string;
  type: string;
  first: boolean;
  errMsg: string;
  label: string;
  setValue: (value: SetStateAction<string>) => void;
}

const Input = ({
  placeholder,
  type,
  first,
  errMsg,
  label,
  setValue,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [eyeToggle, setEyeToggle] = useState(false);

  const HandleEyesClick = () => {
    if (inputRef.current?.getAttribute("type") === "text") {
      inputRef.current?.setAttribute("type", "password");
      setEyeToggle(!eyeToggle);
    } else {
      inputRef.current?.setAttribute("type", "text");
      setEyeToggle(!eyeToggle);
    }
  };

  useEffect(() => {
    if (first) {
      inputRef.current?.focus();
    }
    // dependency depth
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
          onBlur={(e) => setValue(e.target.value)}
          $err={errMsg}
        />
      ) : (
        <Styled.InputTag
          placeholder={placeholder}
          type={type}
          ref={inputRef}
          id={type}
          onBlur={(e) => setValue(e.target.value)}
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
