import styled from "styled-components";
import noImage from "../images/noimage.svg";
import star from "../images/star.svg";
import KebabButton from "../components/Kebab";
import { timeForToday, formatDate } from "../date";
import Image from "next/image";
import React from "react";
import { FolderLinkData, SampleLinkData } from "@/type";
interface FolderCardProps {
  item: FolderLinkData;
  openMAF: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface SharedCardProps {
  item: SampleLinkData;
  openMAF: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface SampleCardProps {
  item: SampleLinkData;
}

export function Card({ item, openMAF }: FolderCardProps | SharedCardProps) {
  const { url, imageSource = noImage, title, createdAt, description } = item;
  const { image_source, created_at } = item;
  return (
    <>
      <a href={url}>
        <CardContainer>
          <CardImageWrapper>
            <CardImage>
              <Image
                width={340}
                height={200}
                src={image_source || imageSource}
                alt={title}
              />
            </CardImage>
            <button className="star-button">
              <img className="start" src={star} alt="" />
            </button>
          </CardImageWrapper>

          <CardBox>
            <CardCreatedTime>
              {timeForToday(createdAt || created_at)}
              <KebabButton openMAF={openMAF} url={url} />
            </CardCreatedTime>
            <CardText>{description}</CardText>
            <CardCreatedAt>{formatDate(createdAt || created_at)}</CardCreatedAt>
          </CardBox>
        </CardContainer>
      </a>
    </>
  );
}

export function SampleCard({ item }: SampleCardProps) {
  const { url, imageSource = noImage, title, createdAt, description } = item;
  return (
    <>
      <a href={url}>
        <CardContainer>
          <CardImageWrapper>
            <CardImage>
              <Image
                width={340}
                height={200}
                src={item.image_source || imageSource}
                alt={title}
              />
            </CardImage>
            <button className="star-button">
              <img className="start" src={star} alt="" />
            </button>
          </CardImageWrapper>

          <CardBox>
            <CardCreatedTime>
              {timeForToday(createdAt || item.created_at)}
            </CardCreatedTime>
            <CardText>{description}</CardText>
            <CardCreatedAt>
              {formatDate(createdAt || item.created_at)}
            </CardCreatedAt>
          </CardBox>
        </CardContainer>
      </a>
    </>
  );
}

const CardContainer = styled.div`
  width: 340px;
  height: 334px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.2s linear;
  overflow: hidden;
  position: relative;
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 200px;
  overflow: hidden;
  object-fit: cover;
`;

const CardImage = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 15px, 15px, 0px, 0px;
  &:hover {
    transform: scale(1.3);
  }
`;

const CardBox = styled.div`
  display: flex;
  width: 340px;
  padding: 15px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 0px 0px 15px 15px;
  background: #fff;
`;

const CardCreatedTime = styled.span`
  color: #666;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
`;

const CardText = styled.span`
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  height: 49px;
  align-self: stretch;
  word-break: break-all;
`;

const CardCreatedAt = styled.span`
  height: 19px;
  align-self: stretch;
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StarButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
