import EmptyImg from "../../assets/icon/emptyImg.svg";
import KebabButton from "../KebabButton/KebabButton";
import StarButton from "../StarButton/StarButton";
import { changeDate, changeDateTime } from "../../utils/dateFormat";
import isEmpty from "../../utils/isEmpty";
import React from "react";
import { styled } from "styled-components";

function Card({ card, isCardEditable, onClick }: CardProps) {
  const { url, description, created_at, createdAt, image_source, imageSource } =
    card;

  const formatDate = changeDate(createdAt ?? (created_at || ""));
  const formatTime = changeDateTime(createdAt ?? (created_at || ""));

  return (
    <StyledWrapper>
      <StyledUrl href={url} target="_blank" rel="noopener noreferrer">
        <StyledImgWrapper>
          {!isEmpty(image_source ?? imageSource) ? (
            <StyledCardImg src={image_source ?? imageSource} alt="cardImg" />
          ) : (
            <StyledCardImg src={EmptyImg} alt="emptyImg" />
          )}
        </StyledImgWrapper>
        <StyledContentWrapper>
          <span>{formatTime}</span>
          <StyledContent>{description}</StyledContent>
          <span>{formatDate}</span>
        </StyledContentWrapper>
      </StyledUrl>
      {isCardEditable && (
        <>
          <StarButton />
          <KebabButton onClick={onClick} url={url} />
        </>
      )}
    </StyledWrapper>
  );
}

export default Card;

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.08);

  border-radius: 1.5rem;
  font-weight: 400;

  @media (max-width: 1123px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const StyledImgWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 20rem;
`;

const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
  object-fit: cover;

  &:hover {
    transform: scale(1.3);
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  height: 13.5rem;
  padding: 15px 20px;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 1);
`;

const StyledContent = styled.p`
  display: -webkit-box;
  overflow: hidden;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledUrl = styled.a`
  @media (max-width: 1123px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
