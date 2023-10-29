import React, { useState } from "react";
import noImg from "../../images/defaultLinkImage.png";
import styled from "styled-components";
import getCardTimes from "../../utils/getCardTime";
import StarIcon from "../atoms/StarIcon";
import CardTitleLink from "../atoms/CardTitleLink";
import CardCreatedDate from "../atoms/CardCreatedDate";
import CardKebabMenus from "./CardKebabMenus";
import kebab from "../../images/kebab.png";
import DeviceSizes from "../../utils/DeviceSizes";

const CardImageWrap = styled.div`
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem 1.5rem 0 0;
    transform-origin: center center;
    transition: all 0.3s ease-in-out;
  }
  ${StarIcon} {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }
`;

const CardTextWrap = styled.div`
  padding: 1.5rem 2rem;
  display: grid;
  gap: 1rem;
  grid-template-rows: 1.7rem 4.9rem 1.9rem;
`;

const CardWrap = styled.div`
  max-width: 34rem;
  text-decoration: none;
  color: #000;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem 1.5rem 0 0;
  display: grid;
  grid-template-rows: 20rem 1fr;
  overflow: visible;
  transform-origin: center center;
  ${DeviceSizes.mobile} {
    width: 100%;
    max-width: 32.5rem;
    grid-template-rows: 19.2rem 1fr;
  }
  &:hover {
    ${CardTextWrap} {
      background-color: var(--linkbrary-zircon);
    }
    ${CardImageWrap} {
      & img {
        transform: scale(1.3);
        overflow: hidden;
      }
    }
  }
`;

const CardTimeInfo = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  & p {
    font-size: 1.3rem;
    color: #666;
  }
  & img {
    cursor: pointer;
  }
`;

const Card = ({ link }) => {
  const { created_at, createdAt: sampleCreatedAt, url, title, imageSource: sampleImageSource, image_source } = link;
  const imageSource = sampleImageSource || image_source || noImg;

  const { fromNow, formattedDate } = getCardTimes(sampleCreatedAt || created_at);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <CardWrap>
      <CardImageWrap>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imageSource} alt={title} />
        </a>
        <StarIcon />
      </CardImageWrap>
      <CardTextWrap>
        <CardTimeInfo>
          <p>{fromNow}</p>
          <img src={kebab} alt="메뉴 열기" onClick={toggleMenu} />
          <CardKebabMenus isOpen={isOpen} />
        </CardTimeInfo>
        <CardTitleLink href={url} target="_blank" rel="noopener noreferrer">
          {title ?? "제목 없는 링크"}
        </CardTitleLink>
        <CardCreatedDate>{formattedDate}</CardCreatedDate>
      </CardTextWrap>
    </CardWrap>
  );
};

export default Card;
