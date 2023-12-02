import moment from "moment";
import LogoImg from "@/public/assets/common/img_logo.png";
import {
  CardContainer,
  CardImgContainer,
  CardWrapper,
  ContentContainer,
  OptionMenuContainer,
} from "./cardStyled";
import OptionIcon from "@/public/assets/card/img_option.png";
import StarIcon from "@/public/assets/card/img_star.png";
import { useState } from "react";
import Image from "next/image";

const calculateTimeAgo = (createdAt: string) => {
  const createdDate = moment(createdAt, "YYYY-MM-DDTHH:mm:ss[Z]");
  const currentDate = moment();
  const diff = currentDate.diff(createdDate, "seconds");

  if (diff < 120) {
    return "1 minute ago";
  } else if (diff <= 3540) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 3600) {
    return "1 hour ago";
  } else if (diff <= 82800) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff < 86400) {
    return "1 day ago";
  } else if (diff <= 2592000) {
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff <= 28512000) {
    return `${Math.floor(diff / 2592000)} months ago`;
  } else if (diff <= 31536000) {
    return "1 year ago";
  } else {
    return `${Math.floor(diff / 31536000)} years ago`;
  }
};

interface ICardProp {
  cardData: any;
  onClickDelete?: any;
  onClickAdd?: any;
  isFolder: boolean;
}

const Card = ({ cardData, onClickDelete, onClickAdd, isFolder }: ICardProp) => {
  const ago = calculateTimeAgo(cardData.created_at || cardData.createdAt);
  const createdAtFormat = moment(
    cardData.created_at || cardData.createdAt
  ).format("YYYY.MM.DD");
  const [isOpenOption, setIsOpenOption] = useState(false);

  const openUrl = () => {
    window.open(cardData.url, "__blank");
  };

  return (
    <CardWrapper>
      <CardContainer onClick={openUrl}>
        {cardData.image_source || cardData.imageSource ? (
          <CardImgContainer>
            <Image
              className="cardImage"
              src={cardData.image_source || cardData.imageSource}
              alt="cardImg"
              fill
            />
            {isFolder && (
              <Image
                src={StarIcon}
                className="starIcon"
                alt="starIcon"
                width="34"
                height="34"
              />
            )}
          </CardImgContainer>
        ) : (
          <CardImgContainer>
            <Image
              src={LogoImg}
              alt="logoImg"
              className="noImgLogo"
              width="133"
              height="24"
            />
            {isFolder && (
              <Image
                src={StarIcon}
                className="starIcon"
                alt="starIcon"
                width="34"
                height="34"
              />
            )}
          </CardImgContainer>
        )}

        <ContentContainer>
          <div className="contentOptionContainer">
            <div className="contentAgo">{ago}</div>
            {isFolder && (
              <Image
                className="optionBtn"
                src={OptionIcon}
                alt="optionIcon"
                width="21"
                height="17"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpenOption(!isOpenOption);
                }}
              />
            )}
          </div>
          <div className="content">{cardData.description}</div>
          <div className="contentAt">{createdAtFormat}</div>
        </ContentContainer>
      </CardContainer>

      {isOpenOption && (
        <OptionMenu
          onClickDelete={onClickDelete}
          onClickAdd={onClickAdd}
          content={{ id: cardData.id, title: cardData.url }}
        />
      )}
    </CardWrapper>
  );
};

export default Card;

interface IOptionMenuProp {
  onClickDelete: any;
  onClickAdd: any;
  content: {
    id: number;
    title: string;
  };
}

const OptionMenu = ({
  onClickDelete,
  onClickAdd,
  content,
}: IOptionMenuProp) => {
  return (
    <OptionMenuContainer>
      <div
        className="optionMenuItem"
        onClick={() => onClickDelete("linkDelete", content)}
      >
        삭제하기
      </div>
      <div className="optionMenuItem" onClick={() => onClickAdd()}>
        폴더에 추가
      </div>
    </OptionMenuContainer>
  );
};
