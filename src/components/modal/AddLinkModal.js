import styled from 'styled-components';
import { ModalButton, SubTitle } from './ModalStyle';

export default function AddLinkModal({ link, userFolder }) {
  console.log(userFolder);
  return (
    <>
      <SubTitle>{link}</SubTitle>
      <Container>
        {userFolder.map((el) => (
          <Box key={`${el.id}1`}>
            <span>{el.name}</span>
            <Count>{el.link.count}개 링크</Count>
          </Box>
        ))}
      </Container>
      <ModalButton type='추가하기'></ModalButton>
    </>
  );
}

const Container = styled.div`
  margin-bottom: 24px;
  width: 280px;
`;

const Box = styled.div`
  padding: 8px;
  line-height: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  &:hover {
    background-color: var(--linkbrary-bg);
    color: var(--linkbrary-primary-color);
  }
`;

const Count = styled.span`
  color: var(--linkbrary-gray-60);
  font-size: 14px;
  margin-left: 8px;
`;
