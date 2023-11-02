import * as S from "./Card.style";
import noImage from "images/no-image.svg";
import star from "images/star.svg";
import kebab from "images/kebab.svg";
import { formatDate, formatTimeDiff } from "utils";
import { Popover } from "react-tiny-popover";
import { useState } from "react";
import Modal from "components/Modal";
import { ModalAddLink, ModalDeleteLink } from "components/Modal/Modal";

function Card({ item }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { image_source, created_at, title, description, url } = item;
  const timeDiff = formatTimeDiff(created_at);
  const date = formatDate(created_at);

  const popoverOpen = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    setIsPopoverOpen(!isPopoverOpen);
  };

  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const openModal1 = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    setIsModalOpen1(true);
  };

  const closeModal1 = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    setIsModalOpen1(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    setIsModalOpen2(true);
  };

  const closeModal2 = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    setIsModalOpen2(false);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <S.ImageContainer>
        <S.Image src={image_source ?? noImage} alt={title} />
        <S.StarButton src={star} alt="별모양 버튼" />
      </S.ImageContainer>
      <S.Info>
        <Popover
          isOpen={isPopoverOpen}
          positions={"bottom"}
          onClickOutside={() => setIsPopoverOpen(false)}
          content={
            <S.PopoverContainer>
              <S.PopoverButton onClick={openModal1}>삭제하기</S.PopoverButton>
              {isModalOpen1 && <Modal close={closeModal1}><ModalDeleteLink url={url} /></Modal>}
              <S.PopoverButton onClick={openModal2}>폴더에 추가</S.PopoverButton>
              {isModalOpen2 && <Modal close={closeModal2}><ModalAddLink url={url} /></Modal>}
            </S.PopoverContainer>
          }>
          <S.KebabButton onClick={popoverOpen}>
            <img src={kebab} alt="케밥 버튼" />
          </S.KebabButton>
        </Popover>
        <S.TimeDiff>{timeDiff}</S.TimeDiff>
        <S.Description>{description}</S.Description>
        <S.Date>{date}</S.Date>
      </S.Info>
    </a>
  );
}

export default Card;
