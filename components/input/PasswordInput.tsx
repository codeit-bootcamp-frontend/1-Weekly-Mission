import Image from "next/image";
import EyeOn from "@/public/assets/common/img_eyeOn.png";
import EyeOff from "@/public/assets/common/img_eyeOff.png";
import { useState } from "react";
import { Input, InputContainer } from "./userInputStyled";

const obj = {
  password: "비밀번호",
  passwordConfirm: "비밀번호 확인",
};

interface UserInputProps {
  label: "password" | "passwordConfirm";
  placeholder: string;
}

const PasswordInput = (props: UserInputProps) => {
  const { label } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [value, setValue] = useState("");

  const handleBlur = () => {
    if (value === "") {
      setErrorMsg("비밀번호를 입력해주세요.");
      return;
    }
    setErrorMsg("");
  };

  return (
    <InputContainer>
      <label htmlFor={label}>{obj[label]}</label>
      <div className="inputBox">
        <Input
          $isError={errorMsg !== ""}
          type={isPasswordVisible ? "text" : "password"}
          id={label}
          placeholder={props.placeholder}
          onBlur={handleBlur}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Image
          src={isPasswordVisible ? EyeOn : EyeOff}
          width="16"
          height="16"
          alt="eyeImg"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      </div>
      {errorMsg !== "" && <div className="errorMsg">{errorMsg}</div>}
    </InputContainer>
  );
};

export default PasswordInput;
