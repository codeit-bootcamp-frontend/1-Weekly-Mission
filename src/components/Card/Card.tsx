import React, { MouseEvent, ReactNode, useState } from "react";
import moment from "moment";
import LogoImg from "../../assets/card-logo.png";
import StarIcon from "../../assets/star.png";
import * as S from "./CardStyle";
import KebabIcon from "../../assets/kebab.svg";
import { ModalMaker } from "../Modal/Modal";
import { Link1 } from "../../api";

function calculateTimeAgo(createdAt: string | undefined) {
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
}

function Card({ link }: { link: Link1 }) {
  const [isOpenKebab, setIsOpenKebab] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState<ReactNode>(null);

  const handleModal =
    ({ link, feature }: { link: Link1; feature: string }) =>
    (e: MouseEvent<HTMLOptionElement>) => {
      const url = link.url;
      e.preventDefault();

      setModal(ModalMaker({ url, feature, setIsModalOpen }));
      setIsModalOpen(true);
    };

  const isOpenKebabHandle = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsOpenKebab(!isOpenKebab);
  };

  return (
    <>
      <S.CardContainer href={link.url}>
        <S.CardImageContainer>
          <S.CardImage
            className={link.imageSource ? "Card-image" : "no-img-logo"}
            src={link.imageSource ? link.imageSource : LogoImg}
            alt="카드 사진"
          />
          <img src={StarIcon} className="star-icon" />
        </S.CardImageContainer>

        <S.CardContentContainer>
          <S.CardContentAgo>
            {calculateTimeAgo(link.createdAt)}
          </S.CardContentAgo>
          <img
            src={KebabIcon}
            className="kebab-button"
            onClick={isOpenKebabHandle}
          />
          {isOpenKebab && (
            <S.OptionContainer>
              <option
                onClick={(e) => handleModal({ link, feature: "삭제하기" })(e)}
              >
                삭제하기
              </option>
              <option
                onClick={(e) =>
                  handleModal({ link, feature: "폴더에 추가" })(e)
                }
              >
                폴더에 추가
              </option>
            </S.OptionContainer>
          )}
          <S.CardContent>{link.description}</S.CardContent>
          <S.CardContentAt>
            {moment(link.createdAt).format("YYYY.MM.DD")}
          </S.CardContentAt>
        </S.CardContentContainer>
      </S.CardContainer>
      {isModalOpen && modal}
    </>
  );
}

export default Card;
