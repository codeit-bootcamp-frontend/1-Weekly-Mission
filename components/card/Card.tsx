import moment from "moment";
import LogoImg from "@/public/assets/common/img_logo.png";
import {
  CardContainer,
  CardImgContainer,
  CardWrapper,
  ContentContainer,
} from "./cardStyled";
import OptionIcon from "@/public/assets/card/img_option.png";
import StarIcon from "@/public/assets/card/img_star.png";
import { useState } from "react";
import Image from "next/image";
import { calculateTimeElapse } from "@/utils/utility";
import Link from "next/link";
import CardOptionMenu from "./CardOptionMenu";
import { DeleteModalItem } from "../folder/folderLayout";
interface CardProps {
  cardData: any;
  onClickDelete?: (modalType: string, content: DeleteModalItem) => void;
  onClickAdd?: (content: string) => void;
  isFolder: boolean;
}

const Card = ({ cardData, onClickDelete, onClickAdd, isFolder }: CardProps) => {
  const timesElapsedText = calculateTimeElapse(
    cardData.created_at || cardData.createdAt
  );
  const createdAtFormat = moment(
    cardData.created_at || cardData.createdAt
  ).format("YYYY.MM.DD");
  const [isOpenOption, setIsOpenOption] = useState(false);

  return (
    <CardWrapper>
      <Link href={cardData.url} target="_blank">
        <CardContainer>
          <CardImgContainer>
            {cardData.image_source || cardData.imageSource ? (
              <Image
                priority
                className="cardImage"
                src={cardData.image_source || cardData.imageSource}
                alt="cardImg"
                fill
              />
            ) : (
              <Image
                priority
                src={LogoImg}
                alt="logoImg"
                className="noImgLogo"
                width="133"
                height="24"
              />
            )}

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

          <ContentContainer>
            <div className="contentOptionContainer">
              <div className="contentAgo">{timesElapsedText} ago</div>
              {isFolder && (
                <Image
                  className="optionBtn"
                  src={OptionIcon}
                  alt="optionIcon"
                  width="21"
                  height="17"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenOption(!isOpenOption);
                  }}
                />
              )}
            </div>
            <div className="content">{cardData.description}</div>
            <div className="contentAt">{createdAtFormat}</div>
          </ContentContainer>
        </CardContainer>
      </Link>

      {isOpenOption && onClickAdd && onClickDelete && (
        <CardOptionMenu
          onClickDelete={onClickDelete}
          onClickAdd={onClickAdd}
          link={cardData.url}
          content={{ id: cardData.id, title: cardData.url }}
        />
      )}
    </CardWrapper>
  );
};

export default Card;
