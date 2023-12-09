import * as S from './Card.style';
import { formatDate, formatTimeDiff } from '@utils/format';
import { Popover } from 'react-tiny-popover';
import { MouseEvent, useCallback, useState } from 'react';
import Modal from '@components/Modal';
import ModalDeleteLink from '@components/Modal/ModalDeleteLink';
import ModalAddLink from '@components/Modal/ModalAddLink';
import { Data } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { Folder } from '@pages/folder';

interface Props {
  folders: Folder[];
  item: Data;
}

const Card = ({ folders, item }: Props) => {
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [modalDeleteLinkIsOpen, setModalDeleteLinkIsOpen] = useState(false);
  const [modalAddLinkIsOpen, setModalAddLinkIsOpen] = useState(false);

  const { image_source, created_at, title, description, url } = item;
  const timeDiff = formatTimeDiff(created_at);
  const date = formatDate(created_at);

  const handleOpenPopover = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setPopoverIsOpen(!popoverIsOpen);
  }, []);

  const handleClosePopover = useCallback(() => {
    setPopoverIsOpen(false);
  }, []);

  const handleOpenModalDeleteLink = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setModalDeleteLinkIsOpen(true);
  }, []);

  const handleCloseModalDeleteLink = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setModalDeleteLinkIsOpen(false);
  }, []);

  const handleOpenModalAddLink = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setModalAddLinkIsOpen(true);
  }, []);

  const handleCloseModalAddLink = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setModalAddLinkIsOpen(false);
  }, []);

  return (
    <Link href={url} target='_blank' rel='noopener noreferrer'>
      <S.ImageContainer>
        <S.Image className='logo'>
          {image_source ? (
            <Image fill src={image_source} alt={String(title)} />
          ) : (
            <Image fill src='/assets/images/no-image.svg' alt={String(title)} />
          )}
        </S.Image>
        <S.StarButton src='/assets/images/star.svg' alt='별모양 버튼' />
      </S.ImageContainer>
      <S.Info>
        <Popover
          isOpen={popoverIsOpen}
          positions={'bottom'}
          onClickOutside={handleClosePopover}
          content={
            <S.PopoverContainer>
              <S.PopoverButton onClick={handleOpenModalDeleteLink}>
                삭제하기
              </S.PopoverButton>
              {modalDeleteLinkIsOpen && (
                <Modal close={handleCloseModalDeleteLink}>
                  <ModalDeleteLink url={url} />
                </Modal>
              )}
              <S.PopoverButton onClick={handleOpenModalAddLink}>
                폴더에 추가
              </S.PopoverButton>
              {modalAddLinkIsOpen && (
                <Modal close={handleCloseModalAddLink}>
                  <ModalAddLink folders={folders} url={url} />
                </Modal>
              )}
            </S.PopoverContainer>
          }>
          <S.KebabButton onClick={handleOpenPopover}>
            <img src='/assets/images/kebab.svg' alt='케밥 버튼' />
          </S.KebabButton>
        </Popover>
        <S.TimeDiff>{timeDiff}</S.TimeDiff>
        <S.Description>{description}</S.Description>
        <S.Date>{date}</S.Date>
      </S.Info>
    </Link>
  );
};

export default Card;
