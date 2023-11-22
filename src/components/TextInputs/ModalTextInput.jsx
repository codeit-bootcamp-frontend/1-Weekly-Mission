import { useState } from "react";
import styled from "styled-components";

const TextInputStyle = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background: #fff;
  color: ${({ value }) => (value ? "#373740" : "#9fa6b2")};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

function ModalTextInput({ children = "" }) {
  const [InputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <TextInputStyle
      placeholder={children}
      value={InputValue}
      onChange={handleInputChange}
    />
  );
}

export default ModalTextInput;
