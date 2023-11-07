import { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";

import addLinkImg from "../assets/images/addLink.svg";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 1.6rem 2rem;

  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: #ffffff;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-left: 1.2rem;
  border: none;
  &:focus {
    border: none;
  }

  &::placeholder {
    color: var(--linkbrary-gray-60, #9fa6b2);
  }
`;

const Button = styled(StyledButton)`
  padding: 1rem 1.6rem;
  width: 8.5rem;
  height: fit-content;
  font-size: 1.4rem;
  border: none;
`;

function LinkAdderButton() {
  const [newLink, setNewLink] = useState("");

  const handleChange = (e) => {
    setNewLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("폼 제출!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <img src={addLinkImg} alt="" />
        <Input
          name="newLinkInput"
          value={newLink}
          type="text"
          placeholder="링크를 추가해 보세요"
          onChange={handleChange}
        ></Input>
      </Div>
      <Button type="submit">추가하기</Button>
    </Form>
  );
}

export default LinkAdderButton;
