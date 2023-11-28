import React, {
  MouseEvent,
  useRef,
  useState,
  SetStateAction,
  Dispatch,
  RefObject,
} from 'react';

import { convertCreatedAt, formatDate } from '../../utils/utils';
import IMAGES from '../../assets/images';
import * as S from './styles';
import { mapCardData } from '../../utils/mapFetch';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface CardProps {
  items: {
    id: number;
    createdAt?: string;
    created_at?: string;
    updated_at?: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
    image_source?: string;
    folder_id?: number;
  };
}

interface CardImageProps {
  imgUrl: string;
}

interface CardInfoProps {
  createdAt: string;
  description: string;
  setCardModalState: Dispatch<SetStateAction<boolean>>;
}

interface SelectMenuModalProps {
  modalRef: RefObject<HTMLDivElement>;
  setCardModalState: Dispatch<SetStateAction<boolean>>;
}

const SelectMenuModal = ({
  modalRef,
  setCardModalState,
}: SelectMenuModalProps) => {
  return (
    <S.SelectMenuBox ref={modalRef}>
      <S.SelectMenuInnerBox>
        <S.SelectMenuButtonBox
          onClick={(e) => {
            e.preventDefault();
            setCardModalState(false);
          }}>
          <p>삭제하기</p>
        </S.SelectMenuButtonBox>
        <S.SelectMenuButtonBox
          onClick={(e) => {
            e.preventDefault();
            setCardModalState(false);
          }}>
          <p>폴더에 추가</p>
        </S.SelectMenuButtonBox>
      </S.SelectMenuInnerBox>
    </S.SelectMenuBox>
  );
};

const CardInfo = ({
  createdAt,
  description,
  setCardModalState,
}: CardInfoProps) => {
  const text = description || '내용 없음';

  const handleKebabClick = (e: MouseEvent<HTMLImageElement>) => {
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

const CardImage = ({ imgUrl }: CardImageProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleStarClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsLiked((prev: boolean) => !prev);
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

const Card = ({ items }: CardProps) => {
  const { image_source, created_at, description, url } = mapCardData(items);

  const modalRef = useRef<HTMLDivElement>(null);
  const [cardModalState, setCardModalState] = useState<boolean>(false);
  useOnClickOutside(modalRef, () => setCardModalState(false));

  if (image_source === undefined || created_at === undefined) return null;

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
          modalRef={modalRef}
          setCardModalState={setCardModalState}
        />
      ) : null}
    </S.CardHref>
  );
};

export default Card;
