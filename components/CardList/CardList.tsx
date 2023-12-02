// import Card from './Card';
import * as S from "./CardList.styled";
import Image from "next/image";
import cardImg from "@/src/assets/images/cardImg.png";
import noImg from "@/src/assets/images/noImg.svg";

export default function CardList() {
  return (
    <S.CardList>
      <S.Card>
        <S.ImageContainer>
          <Image src={cardImg ?? noImg} width={340} height={200} alt="카드 이미지" />
        </S.ImageContainer>
        <S.Content>
          <S.TimeDiff></S.TimeDiff>
          <S.Description></S.Description>
          <S.Date></S.Date>
        </S.Content>
      </S.Card>
    </S.CardList>
  );
}
