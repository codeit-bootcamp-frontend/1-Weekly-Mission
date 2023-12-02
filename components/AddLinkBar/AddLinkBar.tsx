import * as S from './AddLinkBar.styled';
import Button from '../Button';
import Image from 'next/image';
import linkIcon from '@/src/assets/images/link-Img.png';

export default function AddLinkBar() {
  return (
    <S.AddLinkContainer>
    <S.AddLinkWrapper>
        <Image
          src={linkIcon}
          alt="링크 검색하기"
          width={20}
          height={20}
        />
      <S.AddLinkInput placeholder="링크를 추가해 보세요" />
      <Button>추가하기</Button>
    </S.AddLinkWrapper>
  </S.AddLinkContainer>
  );
}