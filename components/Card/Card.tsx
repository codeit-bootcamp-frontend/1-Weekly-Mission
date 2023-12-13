import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import { PopOver } from '@/components';
import PastTime from '@/public/date';
import noImg from '@/src/assets/noImg.svg';
import kebabMenuImg from '@/src/assets/kebab.svg';
import starImg from '@/src/assets/Star.svg';
import chooseStarImg from '@/src/assets/chooseStar.svg';
import * as Style from './Card.style';

interface CardProps {
  link: Link;
}

export default function Card({ link }: CardProps) {
  const { image_source, imageSource, description, url, createdAt, created_at } =
    link;
  const { message, cardDate } = PastTime(createdAt || created_at);
  const [selected, setSelected] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleStarClick = (e: MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
  };

  const handleKebabClick = (e: MouseEvent) => {
    e.preventDefault();
    setVisible(!visible ? true : false);
  };

  return (
    <Style.StyledLink href={url}>
      <Style.ImageContainer>
        <Style.CardImage
          src={imageSource || image_source || noImg}
          alt="사진"
          fill
        />
        <Style.Star
          src={selected ? chooseStarImg : starImg}
          alt="즐겨찾기"
          onClick={handleStarClick}
        />
      </Style.ImageContainer>
      <Style.Container>
        <Style.Option>
          <span>{message}</span>
          <Image
            src={kebabMenuImg}
            alt="option"
            onClick={handleKebabClick}
            width={21}
            height={17}
          ></Image>
          {visible && (
            <Style.PopOver>
              <PopOver url={url} />
            </Style.PopOver>
          )}
        </Style.Option>
        <Style.Description>{description}</Style.Description>
        <span>{cardDate}</span>
      </Style.Container>
    </Style.StyledLink>
  );
}
