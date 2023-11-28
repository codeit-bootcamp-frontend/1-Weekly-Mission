import * as S from './Card.style';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import TimeAgo from 'react-timeago';
import useModal, { ModalsKey } from '@hooks/useModal';
import { Link } from '@pages/Folder/Folder.types';
import DEFAULT_IMAGE from '@assets/images/default-link-img.svg';
import STAR from '@assets/icons/star.svg';
import KEBAB from '@assets/icons/kebab.svg';
import ModalPortals from '@components/Modal/ModalPortals';

interface Props {
  data: Link;
  userId: number;
}

function Card({ data, userId }: Props) {
  const {
    url,
    title,
    description,
    created_at: baseCreateAt,
    createdAt,
    image_source,
    imageSource,
  } = data;

  const createdDate = new Date(baseCreateAt ?? createdAt ?? '');

  const reduceText = (text: string, length: number) => {
    if (!text) return;
    if (text.length > length) {
      return `${text.slice(0, length)}...`;
    } else {
      return text;
    }
  };

  const reducedTitle = reduceText(title, 70);
  const reducedDescription = reduceText(description, 100);

  const [modal, setModal] = useModal({ url: url, userId: userId });

  const setKebabModal = (modalKey?: ModalsKey) => {
    setModal(modalKey);
  };

  const [kebab, setKebab] = useState(false);

  const kebabRef = useRef<HTMLButtonElement>(null);

  const closePopup: EventListener = (e: Event) => {
    if (
      kebabRef.current &&
      !kebabRef.current.contains(e.target as HTMLElement)
    ) {
      setKebab(false);
    }
  };

  const toggleKebab = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setKebab((curr) => !curr);
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, []);

  return (
    <>
      <S.CardContainer href={url} target='_blank' rel='noreferrer noopener'>
        <S.CardImgContainer>
          <S.CardImg
            src={imageSource ?? image_source ?? DEFAULT_IMAGE}
            alt='링크 이미지'
          />
          <S.StarButton type='button'>
            <img src={STAR} alt='즐겨찾기 버튼' />
          </S.StarButton>
        </S.CardImgContainer>
        <S.CardTextContainer>
          <S.TimeAgo>
            <TimeAgo date={createdDate} />
            <S.KebabButton type='button' onClick={toggleKebab} ref={kebabRef}>
              <img src={KEBAB} alt='케밥 버튼' />
            </S.KebabButton>
            {kebab && <KebabPopup setKebabModal={setKebabModal} />}
          </S.TimeAgo>
          <S.Title>{reducedTitle}</S.Title>
          <S.Description>{reducedDescription}</S.Description>
          <S.Date>{createdDate.toLocaleDateString()}</S.Date>
        </S.CardTextContainer>
      </S.CardContainer>
      <ModalPortals>{modal}</ModalPortals>
    </>
  );
}

export default Card;

interface KebabPopupProps {
  setKebabModal: (modalKey?: ModalsKey) => void;
}

function KebabPopup({ setKebabModal }: KebabPopupProps) {
  const setDeleteLinkModal = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setKebabModal('deleteLink');
  };

  const setAddToFolderModal = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setKebabModal('addToFolder');
  };

  return (
    <S.KebabPopup>
      <S.KebabInnerButton onClick={setDeleteLinkModal}>
        삭제하기
      </S.KebabInnerButton>
      <S.KebabInnerButton onClick={setAddToFolderModal}>
        풀더에 추가
      </S.KebabInnerButton>
    </S.KebabPopup>
  );
}
