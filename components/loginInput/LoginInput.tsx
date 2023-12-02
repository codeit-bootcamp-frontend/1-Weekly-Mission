import { ChangeEvent, FocusEvent, useState } from "react";

// 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지를 보입니다.
// 이외의 로그인 시도의 경우, 이메일 input 아래에 “이메일을 확인해주세요.”, 비밀번호 input 아래에 “비밀번호를 확인해주세요.” 에러 메세지를 보입니다.
// 이메일 input에서 focus out 할 때, input 값이 test@codeit.com 일 경우, “이미 사용 중인 이메일입니다.” 에러 메세지를 보입니다.
// 비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 에러 메세지를 보입니다.
// 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.
interface Validate {
  [key: string]: RegExp;
}
// /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const VALIDATE: Validate = { email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, password: /^[0-9a-zA-Z]/ };

const LoginInput = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const [validation, setValidation] = useState({ email: false, password: false });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // type: string, value: string
  const validateInput = (e: FocusEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name: type, value } = target;
    setValidation((prev) => ({ ...prev, [type]: VALIDATE[type].test(value) }));
    console.log("실행됨", type, value, VALIDATE[type].test(value));
  };

  return (
    <div>
      <input type="text" value={inputValue.email} onChange={handleChange} name="email" onBlur={validateInput} />
      <input
        type="password"
        value={inputValue.password}
        onChange={handleChange}
        name="password"
        onBlur={validateInput}
      />
    </div>
  );
};

export default LoginInput;
