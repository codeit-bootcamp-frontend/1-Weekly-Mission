import Image from "next/image";
import {
  Dispatch,
  FocusEvent,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import styled from "styled-components";

interface InputProps {
  name: string;
  type: string;
  placeHolder?: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export default function Input({
  name,
  type,
  placeHolder = "내용 입력",
  setValue,
}: InputProps) {
  const [eyeOn, setEyeOn] = useState(false);

  const handleFocusOut = (e: FocusEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      <StyledInput
        name={name}
        type={eyeOn ? "text" : type}
        placeholder={placeHolder}
        onBlur={handleFocusOut}
      />
      {type === "password" && (
        <EyeIcon
          src={eyeOn ? "/images/eye-on.svg" : "/images/eye-off.svg"}
          width={16}
          height={16}
          alt=""
          onClick={() => {
            setEyeOn(!eyeOn);
          }}
        ></EyeIcon>
      )}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  background-color: white;

  width: 100%;
  height: 6rem;
  padding: 1.8rem 1.5rem;
  margin-bottom: 0.6rem;

  border: 0.1rem solid #ccd5e3;
  border-radius: 8px;
  outline: none;

  font-size: 1.6rem;
  color: black;

  &:focus {
    border: 0.1rem solid #6d6afe;
  }
`;

const EyeIcon = styled(Image)`
  position: absolute;
  bottom: 3rem;
  right: 2rem;
`;
