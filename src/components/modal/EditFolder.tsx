import styled from "styled-components";
import ModalButton from "components/button/ModalButton";
import ModalTitle from "components/title/ModalTitle";

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
  font-size: 1rem;

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;

interface EditFolderProps {
  currentFolderName: string;
}

export default function EditFolder({ currentFolderName }: EditFolderProps) {
  return (
    <>
      <ModalTitle label="폴더 이름 변경" />
      <Contents>
        <Input placeholder="내용 입력" defaultValue={currentFolderName} />
        <ModalButton action="change" label="변경하기" />
      </Contents>
    </>
  );
}
