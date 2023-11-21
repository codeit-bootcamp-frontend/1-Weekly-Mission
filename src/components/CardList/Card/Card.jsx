import * as S from "./Card.style";

function Card() {

  return(
    <S.CardContainer>
      <S.CardImgWrapper></S.CardImgWrapper>
      <S.CardInfo>
        <S.CardCreatedAt>10 minutes ago</S.CardCreatedAt>
        <S.CardDescription>Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd</S.CardDescription>
        <S.CardDate>2023. 3. 15</S.CardDate>
      </S.CardInfo>
    </S.CardContainer>
  );
}

export default Card;