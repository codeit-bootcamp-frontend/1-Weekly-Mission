import * as S from './Card.styled';
import cardImage from '@/public/images/cardImg.png';
import starIcon from '@/public/images/starIcon.svg';
import Image from 'next/image';
import kebabIcon from '@/public/images/kebabIcon.svg';
import{ useEffect, useState } from 'react';

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectMenu = () => {
    setIsOpen((prev)=>!prev);
  }

  useEffect(() => {
    setIsOpen((prev)=>!prev);
  },[]);

  return (
    <S.CardContainer>
      <S.CardImageContainer>
        <S.CardImage
          fill
          src={cardImage}
          alt="카드 이미지" 
        />
      <S.StarButton>
        <Image src={starIcon} alt="별" />
      </S.StarButton>
      </S.CardImageContainer>
      <S.CardInfo>
        <S.TimeAgo>10 minutes ago</S.TimeAgo>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu nunc. Nunc viverra lobortis nibh, in condimentum elit.
        </S.Description>
        <S.Date>2023.12.01</S.Date>
        <S.KebabButton onClick={handleSelectMenu}>
          <Image src={kebabIcon} fill alt="케밥 버튼" />
          <S.SelectMenu style={{ display : isOpen ? "block" : "none"}}>
            <S.SelectButton>삭제하기</S.SelectButton>
            <S.SelectButton>폴더에 추가</S.SelectButton>
          </S.SelectMenu>
        </S.KebabButton>
      </S.CardInfo>
    </S.CardContainer>
  )
}
