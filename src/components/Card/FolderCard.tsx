import Image from "next/image";
import Link from "next/link";
import { NO_CARD_IMAGE } from "src/constants/common";
import theme from "src/styles/Theme/theme";
import formatDate from "src/utils/formatDate";
import formatPeriod from "src/utils/formatPeriod";
import styled from "styled-components";

function FolderCard({ url, description, imageSource, createdAt }: FolderLinks) {
  return (
    <Link href={url}>
      <StyledWrapper>
        <StyledCardImgWrapper>
          <StyledCardImg
            src={imageSource ? imageSource : NO_CARD_IMAGE}
            width={100}
            height={100}
            alt="cardImg"
          />
        </StyledCardImgWrapper>
        <StyledContentWrapper>
          <StyledTime>{formatPeriod(createdAt)}</StyledTime>
          <StyledDescription>{description}</StyledDescription>
          <span>{formatDate(createdAt)}</span>
        </StyledContentWrapper>
      </StyledWrapper>
    </Link>
  );
}

export default FolderCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 34rem;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.08);
  border-radius: 0.9375rem;

  overflow: hidden;
  font-weight: ${theme.fontWeight.normal};
`;

const StyledCardImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const StyledCardImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  :hover {
    transform: scale(1.3);
    transition: 0.2s;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.color.white};
  height: 13rem;
  padding: 1.5rem 1rem;
  gap: 10px;
`;

const StyledTime = styled.span`
  color: #666666;
  line-height: 17px;
`;

const StyledDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  line-height: 24px;
  overflow: hidden;
`;
