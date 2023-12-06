import React, { ReactElement, useEffect, useState } from "react";
import { InputProps } from "@/types/Component";
import useToggle from "@/src/hooks/useToggle";
import useInput from "@/src/hooks/useInput";
import { IconEyeON, IconEyeOff } from "@/public/svgs";
import * as Styled from "./InputStyle";

export default function Input({ type, onBlur }: InputProps): ReactElement {
  const { isTrue, setIsTrue, toggle } = useToggle(false);
  const { value, handleInputChange } = useInput("");
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("내용을 다시 작성해주세요");

  useEffect(() => {
    if (type !== "password") setIsTrue(true);
  }, []);

  return (
    <>
      <Styled.Container $error={showError}>
        <Styled.Input
          placeholder="내용 입력"
          value={value}
          type={isTrue ? "text" : "password"}
          onChange={handleInputChange}
          onBlur={onBlur}
        />
        {isTrue
          ? type === "password" && <IconEyeON onClick={toggle} />
          : type === "password" && <IconEyeOff onClick={toggle} />}
      </Styled.Container>
      {showError && <Styled.Error>{error}</Styled.Error>}
    </>
  );
}
