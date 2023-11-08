import * as S from './NotFound.style';
import Button from 'components/Button';

function NotFound() {
  return (
    <S.Container>
      <S.Title>페이지가 없거나 접근할 수 없습니다.</S.Title>
      <S.Description>입력하신 주소가 맞는지 다시 확인해주세요.</S.Description>
      <S.HomeButton>
        <Button as='a' href='/'>
          홈페이지로 돌아가기
        </Button>
      </S.HomeButton>
    </S.Container>
  );
}

export default NotFound;
