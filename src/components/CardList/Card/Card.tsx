import * as S from './Card.style';
import noImage from 'images/no-image.svg';
import star from 'images/star.svg';
import kebab from 'images/kebab.svg';
import { formatDate, formatTimeDiff } from 'utils/format';
import { Popover } from 'react-tiny-popover';
import { MouseEvent, useState } from 'react';
import Modal from 'components/Modal';
import ModalDeleteLink from 'components/Modal/ModalDeleteLink';
import ModalAddLink from 'components/Modal/ModalAddLink';
import { Data } from '../types';

interface Props {
  item: Data;
}

function Card({ item }: Props) {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [modalDeleteLinkIsOpen, setModalDeleteLinkIsOpen] = useState(false);
  const [modalAddLinkIsOpen, setModalAddLinkIsOpen] = useState(false);

  const { image_source, created_at, title, description, url } = item;
  const timeDiff = formatTimeDiff(created_at);
  const date = formatDate(created_at);

  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <S.ImageContainer>
        <S.Image src={image_source ?? noImage} alt={title} />
        <S.StarButton src={star} alt='별모양 버튼' />
      </S.ImageContainer>
      <S.Info>
        <Popover
          isOpen={popoverIsOpen}
          positions={'bottom'}
          onClickOutside={() => setPopoverIsOpen(false)}
          content={
            <S.PopoverContainer>
              <S.PopoverButton
                onClick={(e) => {
                  e.preventDefault();
                  setModalDeleteLinkIsOpen(true);
                }}>
                삭제하기
              </S.PopoverButton>
              {modalDeleteLinkIsOpen && (
                <Modal
                  close={(e: MouseEvent) => {
                    e.preventDefault();
                    setModalDeleteLinkIsOpen(false);
                  }}>
                  <ModalDeleteLink url={url} />
                </Modal>
              )}
              <S.PopoverButton
                onClick={(e) => {
                  e.preventDefault();
                  setModalAddLinkIsOpen(true);
                }}>
                폴더에 추가
              </S.PopoverButton>
              {modalAddLinkIsOpen && (
                <Modal
                  close={(e: MouseEvent) => {
                    e.preventDefault();
                    setModalAddLinkIsOpen(false);
                  }}>
                  <ModalAddLink url={url} />
                </Modal>
              )}
            </S.PopoverContainer>
          }>
          <S.KebabButton
            onClick={(e: MouseEvent) => {
              e.preventDefault();
              setPopoverIsOpen(!popoverIsOpen);
            }}>
            <img src={kebab} alt='케밥 버튼' />
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
