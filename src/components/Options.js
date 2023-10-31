import shareImg from '../assets/images/share.svg';
import penImg from '../assets/images/pen.svg';
import deleteImg from '../assets/images/Group 36.svg';
import styled from 'styled-components';

const SHARED = {
  src: shareImg,
  name: '공유',
};
const RENAME = {
  src: penImg,
  name: '이름 변경',
};
const DELETEFOLDER = {
  src: deleteImg,
  name: '삭제',
};

export default function Option({ currentFolder }) {
  const show = currentFolder.id !== '';
  // 나중에 함수 추가하기 위해 분리

  const options = [SHARED, RENAME, DELETEFOLDER];

  return (
    <Container>
      <Title>{currentFolder.name}</Title>
      {show ? (
        <OptionContainer>
          {options.map((option) => (
            <OptionBox>
              <Img src={option.src} alt='공유' />
              <div>{option.name}</div>
            </OptionBox>
          ))}
        </OptionContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}

const FlexAlign = styled.div`
  display: flex;
  align-items: center;
  color: var(--linkbrary-gray-60);
`;

const Container = styled(FlexAlign)`
  max-width: 1060px;
  margin: 24px auto;
  justify-content: space-between;
  @media (max-width: 767px) {
    align-items: start;
    flex-direction: column;
    gap: 12px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 100%;
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
