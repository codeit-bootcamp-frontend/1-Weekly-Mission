import { useEffect, useRef } from "react";
import eyesOffImg from "@/public/eye-off.svg";
import * as Styled from "./StyledSign";

interface Props {
  placeholder: string;
  type: string;
  first: boolean;
  errMsg?: string;
}

const Input = ({ placeholder, type, first, errMsg }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const ClickEventHandler = () => {
    if (inputRef.current?.getAttribute("type") === "text") {
      inputRef.current?.setAttribute("type", "password");
    } else {
      inputRef.current?.setAttribute("type", "text");
    }
  };

  useEffect(() => {
    if (first) {
      inputRef.current?.focus();
    }

    // dependency depth
  }, [first]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <Styled.InputTag placeholder={placeholder} type={type} ref={inputRef} />
      {type === "email" || (
        <Styled.EyesOff
          src={eyesOffImg}
          alt="비밀번호 토글"
          onClick={ClickEventHandler}
        />
      )}
      <Styled.ErrMsg>{errMsg}</Styled.ErrMsg>
    </div>
  );
};

export default Input;
