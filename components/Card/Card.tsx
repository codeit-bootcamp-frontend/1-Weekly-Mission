import Image from 'next/image';
import { useState, MouseEvent } from 'react';
import { PopOver } from '@/components';
import noImg from '@/src/assets/noImg.svg';
import kebabMenuImg from '@/src/assets/kebab.svg';
import PastTime from '@/public/date';
import * as Style from './Card.style';
import { Link } from '@/pages/shared';

interface Props {
  link: Link;
}

export default function Card({ link }: Props) {
  const { image_source, imageSource, description, url, createdAt, created_at } =
    link;
  const { message, cardDate } = PastTime(createdAt || created_at);
  const [selected, setSelected] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleStarClick = (e: MouseEvent) => {
    e.preventDefault();
    setSelected(!selected);
  };

  const starStyle = {
    fill: selected ? '#6D6AFE' : '#000',
    'fill-opacity': selected ? '1' : '0.2',
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
        />
        {/* <Style.Star
          fill={starStyle.fill}
          fillOpacity={starStyle["fill-opacity"]}
          onClick={handleStarClick}
        /> */}
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
