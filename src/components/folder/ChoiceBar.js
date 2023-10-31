import styled from 'styled-components';
import shareIcon from '../../assets/images/share.svg';
import nameModifyIcon from '../../assets/images/pen.svg';
import deleteIcon from '../../assets/images/trash.svg';

const ChoiceBox = styled.div`
  display: flex;
  gap: 12px;
`;
const ChoiceWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const ChoiceText = styled.p`
  color: var(--gray-60);
  font-size: 1.4rem;
  font-weight: 600;
`;

function ChoiceBar() {
  return (
    <ChoiceBox>
      <ChoiceWrapper>
        <img src={shareIcon} alt="공유 아이콘" />
        <ChoiceText>공유</ChoiceText>
      </ChoiceWrapper>
      <ChoiceWrapper>
        <img src={nameModifyIcon} alt="이름 변경 아이콘" />
        <ChoiceText>이름 변경</ChoiceText>
      </ChoiceWrapper>
      <ChoiceWrapper>
        <img src={deleteIcon} alt="삭제 아이콘" />
        <ChoiceText>삭제</ChoiceText>
      </ChoiceWrapper>
    </ChoiceBox>
  );
}

export default ChoiceBar;
