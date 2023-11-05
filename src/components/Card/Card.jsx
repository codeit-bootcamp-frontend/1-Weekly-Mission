import { convertCreatedAt, formatDate } from '../../utils/utils';
import useToggle from '../../hooks/useToggle';
import IMAGES from '../../assets/images.js';
import * as S from './styles.js';
import { useRef, useState } from 'react';
import { mapCardData } from '../../utils/mapFetch';

import useOnClickOutside from '../../hooks/useOnClickOutside';

const SelectMenuModal = ({
  modalRef,
  setCardModalState,
  handleModalCardDelete,
  handleModalCardAdd,
}) => {
  return (
    <S.SelectMenuBox ref={modalRef}>
      <S.SelectMenuInnerBox>
        <S.SelectMenuButtonBox
          onClick={(e) => {
            e.preventDefault();
            setCardModalState(false);
            handleModalCardDelete(e, 'deleteLink');
          }}>
          <p>삭제하기</p>
        </S.SelectMenuButtonBox>
        <S.SelectMenuButtonBox
          onClick={(e) => {
            e.preventDefault();
            setCardModalState(false);
            handleModalCardAdd(e, 'add');
          }}>
          <p>폴더에 추가</p>
        </S.SelectMenuButtonBox>
      </S.SelectMenuInnerBox>
    </S.SelectMenuBox>
  );
};

const CardInfo = ({ createdAt, description, setCardModalState }) => {
  const text = description || '내용 없음';

  const handleKebabClick = (e) => {
    e.preventDefault();
    setCardModalState((prev) => !prev);
  };

  return (
    <S.CardInfoBox>
      <S.CardInfoInnerBox>
        <S.CardTimeDiffParagraph>
          {convertCreatedAt(createdAt)}
        </S.CardTimeDiffParagraph>
        <S.CardKebabImage
          src={IMAGES.kebab}
          alt="더보기"
          onClick={handleKebabClick}
        />
      </S.CardInfoInnerBox>
      <S.CardDescriptionParagraph>{text}</S.CardDescriptionParagraph>
      <S.CardCreatedAtParagraph>
        {formatDate(createdAt)}
      </S.CardCreatedAtParagraph>
    </S.CardInfoBox>
  );
};

const CardImage = ({ imgUrl }) => {
  const [isLiked, setIsLiked] = useToggle(false);

  const handleStarClick = (e) => {
    e.preventDefault();
    setIsLiked(isLiked);
  };
  return (
    <S.CardImageContainerBox>
      <S.CardStyledImage src={imgUrl || IMAGES.noImage} alt="카드" />
      <S.CardStarImage
        src={isLiked ? IMAGES.filledStar : IMAGES.emptyStar}
        alt="star"
        onClick={handleStarClick}
      />
    </S.CardImageContainerBox>
  );
};

const Card = ({ items, handleModalCardDelete, handleModalCardAdd }) => {
  const { image_source, created_at, description, url } = mapCardData(items);
  const modalRef = useRef();
  const [cardModalState, setCardModalState] = useState(false);
  useOnClickOutside(modalRef, () => setCardModalState(false));

  return (
    <S.CardHref href={url} target="_blank" rel="noreferrer">
      <CardImage imgUrl={image_source} />
      <CardInfo
        createdAt={created_at}
        description={description}
        setCardModalState={setCardModalState}
      />
      {cardModalState ? (
        <SelectMenuModal
          cardModalState={cardModalState}
          modalRef={modalRef}
          setCardModalState={setCardModalState}
          handleModalCardDelete={handleModalCardDelete}
          handleModalCardAdd={handleModalCardAdd}
        />
      ) : null}
    </S.CardHref>
  );
};

export default Card;
