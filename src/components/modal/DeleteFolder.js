import styled from "styled-components";
import ModalButton from "components/button/ModalButton";
import ModalTitle from "components/title/ModalTitle";

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Description = styled.div`
  width: 100%;
  text-align: center;
`;

const Info = styled.p`
  margin: 0;
  padding-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-gray);
`;

export default function DeleteFolder({ currentFolderName }) {
  return (
    <Contents>
      <Description>
        <ModalTitle label="폴더 삭제" />
        <Info>{currentFolderName}</Info>
      </Description>
      <ModalButton action="delete" label="삭제하기" />
    </Contents>
  );
}
