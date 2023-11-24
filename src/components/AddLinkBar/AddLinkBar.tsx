import * as S from "./AddLinkBar.style";
import linkIcon from "assets/images/link-Img.png";
import Button from 'components/Button';

function AddLink() {
  return(
    <S.AddLinkContainer>
      <S.AddLinkWrapper>
          <S.AddLinkIcon src={linkIcon} alt="링크 검색하기" />
        <S.AddLinkInput placeholder="링크를 추가해 보세요" />
        <Button>추가하기</Button>
      </S.AddLinkWrapper>
    </S.AddLinkContainer>
  );
}

export default AddLink;