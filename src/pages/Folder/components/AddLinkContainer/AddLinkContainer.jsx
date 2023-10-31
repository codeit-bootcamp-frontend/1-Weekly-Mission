import * as S from './AddLinkContainer.style';
import LINK from 'assets/icons/link.svg';

function AddLinkContainer() {
  return (
    <S.Container>
      <S.Inner>
        <S.Img src={LINK} alt='링크 아이콘' />
        <S.Input placeholder='링크를 추가해 보세요' />
        <S.ButtonContainer>
          <S.SmallButton>추가하기</S.SmallButton>
        </S.ButtonContainer>
      </S.Inner>
    </S.Container>
  );
}

export default AddLinkContainer;
