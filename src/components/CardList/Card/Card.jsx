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
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const { image_source, created_at, title, description, url } = item;
  const timeDiff = formatTimeDiff(created_at);
  const date = formatDate(created_at);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <S.ImageContainer>
        <S.Image src={image_source ?? noImage} alt={title} />
        <S.StarButton src={star} alt="별모양 버튼" />
      </S.ImageContainer>
      <S.Info>
        <Popover
          isOpen={popoverIsOpen}
          positions={"bottom"}
          onClickOutside={() => setPopoverIsOpen(false)}
          content={
            <S.PopoverContainer>
              <S.PopoverButton
                onClick={(e) => {
                  e.preventDefault();
                  setModalIsOpen1(true);
                }}>
                삭제하기
              </S.PopoverButton>
              {modalIsOpen1 && (
                <Modal
                  close={(e) => {
                    e.preventDefault();
                    setModalIsOpen1(false);
                  }}>
                  <ModalDeleteLink url={url} />
                </Modal>
              )}
              <S.PopoverButton
                onClick={(e) => {
                  e.preventDefault();
                  setModalIsOpen2(true);
                }}>
                폴더에 추가
              </S.PopoverButton>
              {modalIsOpen2 && (
                <Modal
                  close={(e) => {
                    e.preventDefault();
                    setModalIsOpen2(false);
                  }}>
                  <ModalAddLink url={url} />
                </Modal>
              )}
            </S.PopoverContainer>
          }>
          <S.KebabButton
            onClick={(e) => {
              e.preventDefault();
              setPopoverIsOpen(!popoverIsOpen);
            }}>
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
