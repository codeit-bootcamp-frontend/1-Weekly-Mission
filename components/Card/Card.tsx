import Link from 'next/link';
import * as S from './Card.Style';

// data의 타입을 어떻게 정해줘야할지 의문 ...
const Card = data => {
  // props로 전달한 데이터는 무조건 data 안에 다시 담겨져서 전송되는건가...??
  const { title, description, url, imageSource, createdAt } = data.data;
  console.log(data);
  return (
    <>
      <Link href={url} style={{ textDecoration: 'none', color: 'black' }}>
        <S.Container>
          <S.PrevImg src={imageSource} alt='PrevImg' />
          <S.CardContainer>
            <S.Time>{createdAt}</S.Time>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Date>{createdAt}</S.Date>
          </S.CardContainer>
        </S.Container>
      </Link>
    </>
  );
};

export default Card;
