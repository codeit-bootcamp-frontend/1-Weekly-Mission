import Image from 'next/image';
import * as S from './Link.style';
import LinkIcon from '@/public/link.svg';
import Button from '../Button/Button';

const Link = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <Image src={LinkIcon} alt='linkIcon' />
        <S.Input placeholder='링크를 추가해 보세요.' />
      </S.InputContainer>
      <Button></Button>
    </S.Container>
  );
};

export default Link;
