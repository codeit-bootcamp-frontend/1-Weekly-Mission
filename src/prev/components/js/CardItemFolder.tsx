import styled from "styled-components";
import noImage from "Assets/noImage.png";
import starIcon from "Assets/star.svg";
import KebabPopOver from "./KebabButtonMenu";
import { RowContainer } from "./Container";
import getTimeDiff from "prev/utils/utilTimeDiff";
import Image from "next/image";

interface Props {
  item: any;
  modal: (isOpen: boolean, modalName: string) => void;
  setLink: any;
  isOpen: boolean;
  onClick: (idx: number) => void;
  idx: number;
}

interface CardLinkItem {
  $url: string;
}

/* 각 카드 컴포넌트 */
function CardItem({ item, modal, setLink, isOpen, onClick, idx }: Props) {
  const handleCardClick = () => {
    const URL = item.url;
    window.open(URL);
  };

  const handleTogglePopOver = (e: any) => {
    e.stopPropagation();
    onClick(idx);
  };

  /* 이미지 스타일 함수 */
  const imgStyle = {
    backgroundImage: `url('${item.image_source}')`,
  };

  const nowDate = getTimeDiff(new Date(item.created_at));
  const createdDate = item.created_at.split("T")[0].split("-").join(".");

  return (
    <CardLink $url={item.url} onClick={handleCardClick}>
      <CardWrapper>
        <BookmarkButton
          src="/images/star.svg"
          width="34"
          height="34"
          alt="bookmark_icon"
        />
        {isOpen && (
          <KebabPopOver modal={modal} $url={item.url} setLink={setLink} />
        )}
        <CardImageWrapper>
          {!item.image_source ? (
            <Image className="logoImg" src={noImage} alt="빈 이미지" />
          ) : (
            <CardImage style={imgStyle}></CardImage>
          )}
        </CardImageWrapper>
        <CardInformation>
          <RowContainer>
            <Time>{nowDate}</Time>
            <KebabButton
              src="/images/kebab.svg"
              alt="kebabButton"
              width="21"
              height="17"
              onClick={handleTogglePopOver}
            />
          </RowContainer>
          <Description>{item.description}</Description>
          <Day className="day">{createdDate}</Day>
        </CardInformation>
      </CardWrapper>
    </CardLink>
  );
}

export default CardItem;

const CardLink = styled.div<CardLinkItem>`
  cursor: pointer;
  pointer-events: auto;
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 15px 20px;
`;

const Time = styled.div`
  color: #666;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Description = styled.p`
  overflow: hidden;
  height: 49px;
  /* 2줄이상 긴텍스트 생략 */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /*  */
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const Day = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  border-radius: 15px;
  width: 340px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

  &:hover ${CardImage} {
    transform: scale(130%);
    transition: 1s;
  }

  &:hover ${CardInformation} {
    background-color: var(--bg);
  }

  @media screen and (max-width: 770px) {
    width: 325px;
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;
`;

const BookmarkButton = styled(Image)`
  width: 34px;
  height: 34px;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
`;

const KebabButton = styled(Image)`
  width: 21px;
  height: 17px;
  z-index: 2;
  pointer-events: auto;
`;
