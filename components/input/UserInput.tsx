import Image from "next/image";
import styled from "styled-components";
import EyeOn from "@/public/assets/common/img_eyeOn.png";
import EyeOff from "@/public/assets/common/img_eyeOff.png";
import { useState } from "react";

const obj = {
  email: {
    label: "이메일",
    type: "email",
  },
  password: {
    label: "비밀번호",
    type: "password",
  },
  passwordConfirm: {
    label: "비밀번호 확인",
    type: "password",
  },
};

interface ILabelProps {
  label: "email" | "password" | "passwordConfirm";
}

const UserInput = (props: ILabelProps) => {
  const { label } = props;
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <InputContainer>
      <label htmlFor={label}>{obj[label].label}</label>
      <div className="inputBox">
        <Input
          type={isOn ? "text" : obj[label].type}
          id={label + "Input"}
          placeholder={"내용 입력"}
        />
        {label !== "email" && (
          <Image
            src={isOn ? EyeOn : EyeOff}
            width="16"
            height="16"
            alt="eyeImg"
            onClick={() => setIsOn(!isOn)}
          />
        )}
      </div>
    </InputContainer>
  );
};

export default UserInput;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 40rem;

  label {
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
  }

  .inputBox {
    position: relative;

    img {
      position: absolute;
      top: 2rem;
      right: 1.5rem;
      cursor: pointer;
    }
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 0.8rem;
  padding: 1.8rem 1.5rem;
  background: var(--white);
  border: 1px solid var(--gray20);
  width: 40rem;
  height: 6rem;
  margin-bottom: 2.4rem;
  color: var(--gray100);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  &:focus {
    border: 1px solid var(--primary);
    outline: none;
  }
`;
