import styled from "styled-components";

import ModalTitle from "components/title/ModalTitle";
import ModalButton from "components/button/ModalButton";

const Container = styled.div`
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

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Options = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: var(--color-primary-varient);
  }
`;

const Title = styled.span`
  color: var(--color-gray-30);

  &:hover {
    background: var(--color-primary);
  }
`;

const SubTitle = styled.div`
  font-size: 0.875rem;
  color: var(--color-gray);
`;

export default function AddLink({ link }) {
  return (
    <Container>
      <Description>
        <ModalTitle label="폴더 추가" />
        <Info>{link}</Info>
      </Description>
      <Contents>
        <Options>
          <Title>코딩팁</Title>
          <SubTitle>7개 링크</SubTitle>
        </Options>
        <Options>
          <Title>코딩팁</Title>
          <SubTitle>7개 링크</SubTitle>
        </Options>
      </Contents>
      <ModalButton action="change" label="추가하기" />
    </Container>
  );
}
