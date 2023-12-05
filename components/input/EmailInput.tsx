import { useState } from "react";
import { Input, InputContainer } from "./userInputStyled";

const EmailInput = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [value, setValue] = useState("");

  const handleBlur = () => {
    if (value === "") {
      setErrorMsg("이메일을 입력해주세요.");
      return;
    }
    setErrorMsg("");
  };

  return (
    <InputContainer>
      <label htmlFor="email">이메일</label>
      <div className="inputBox">
        <Input
          $isError={errorMsg !== ""}
          type="text"
          id="email"
          placeholder="이메일을 입력해주세요."
          onBlur={handleBlur}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {errorMsg !== "" && <div className="errorMsg">{errorMsg}</div>}
    </InputContainer>
  );
};

export default EmailInput;
