import { ChangeEvent, useState } from "react";

interface SignInputProps {
  type: string;
  label: string;
  htmlFor: string;
}
const ERRORMESSAGE = {
  email: {
    empty: "이메일을 입력해주세요.",
    wrongEmail: "올바른 이메일 주소가 아닙니다.",
  },
  password: {
    empty: "비밀번호를 입력해주세요",
  },
};

const REGEMAIL = /^[A-Za-z0-9\-]+@[A-Za-z0-9]+\.[a-z]/;
const REGPWD = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}/;

const SignIpnut = ({ type, label, htmlFor }: SignInputProps) => {
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnBlur = () => {
    if (inputValue == "") setIsError(true);
    else setIsError(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={htmlFor}
        type={type}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      ></input>
      {isError && <p>{ERRORMESSAGE.email.empty}</p>}
    </>
  );
};

export default SignIpnut;
