import { ChangeEvent, SyntheticEvent, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import StyledButton from "./StyledButton";

export default function LinkAdderButton() {
  const [newLink, setNewLink] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewLink(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("폼 제출!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <Image src="/images/addLink.svg" width={20} height={20} alt="" />
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

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 80rem;
  height: fit-content;
  padding: 1.6rem 2rem;
  margin-right: 32rem;
  margin-left: 32rem;

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
    outline: none;
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
  cursor: pointer;
`;
