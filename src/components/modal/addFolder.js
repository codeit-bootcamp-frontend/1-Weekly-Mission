import styled from "styled-components";

import ModalTitle from "components/title/ModalTitle";
import ModalButton from "components/button/ModalButton";

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.125rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray-20);
  outline-style: none;

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

export default function AddFolder() {
  return (
    <>
      <ModalTitle label="폴더 추가" />
      <Contents>
        <Input placeholder="내용 입력" />
        <ModalButton action="change" label="추가하기" />
      </Contents>
    </>
  );
}
