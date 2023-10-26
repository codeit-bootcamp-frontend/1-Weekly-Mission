import Button from 'components/Button';
import * as S from './AddLink.style';
import LINK from 'assets/icons/link.svg';

function AddLink() {
  return (
    <S.AddLinkContainer>
      <S.Img src={LINK} alt='링크 아이콘' />
      <S.Input placeholder='링크를 추가해 보세요' />
      <S.ButtonContainer>
        <Button>추가하기</Button>
      </S.ButtonContainer>
    </S.AddLinkContainer>
  );
}

export default AddLink;
