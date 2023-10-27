import shareImg from '../assets/images/share.svg';
import penImg from '../assets/images/pen.svg';
import deleteImg from '../assets/images/Group 36.svg';
import styled from 'styled-components';

const FlexAlign = styled.div`
  display: flex;
  align-items: center;
  color: var(--linkbrary-gray-60);
`;

const Container = styled(FlexAlign)`
  max-width: 1060px;
  justify-content: space-between;
  margin: 24px auto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: black;
`;

const OptionContainer = styled(FlexAlign)`
  gap: 12px;
`;

const OptionBox = styled(FlexAlign)`
  gap: 4px;
`;

const Img = styled.img`
  width: 18px;
  height: 18px;
`;

export default function Option({ currentFolderId }) {
  const show = currentFolderId !== '';
  return (
    <Container>
      <Title>유용한 정보</Title>
      {show ? (
        <OptionContainer>
          <OptionBox>
            <Img src={shareImg} alt='공유' />
            <div>공유</div>
          </OptionBox>
          <OptionBox>
            <Img src={penImg} alt='수정' />
            <div>이름 변경</div>
          </OptionBox>
          <OptionBox>
            <Img src={deleteImg} alt='삭제' />
            <div>삭제</div>
          </OptionBox>
        </OptionContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}
