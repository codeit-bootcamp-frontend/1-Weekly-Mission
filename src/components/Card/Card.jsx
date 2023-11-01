import { convertCreatedAt, formatDate } from '../../utils/utils';
import useToggle from '../../hooks/useToggle';
import IMAGES from '../../assets/images.js';
import * as S from './styles.js';
import { useState } from 'react';
import { mapCardData } from '../../utils/mapFetch';

const SelectMenu = () => {
  // 이 부분 Hover는 CSS로 하는게 더 좋을 것 같다
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  let boxStyle = {
    color: isHover ? 'var(--linkbrary-primary-color)' : '#000',
    background: isHover
      ? 'var(--linkbrary-gray-10)'
      : 'var(--gray-light-gray-00)',
  };
  return (
    <S.SelectMenuBox>
      <S.SelectMenuInnerBox>
        <S.SelectMenuButtonBox
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <p>삭제하기</p>
        </S.SelectMenuButtonBox>
        <S.SelectMenuButtonBox
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <p>폴더에 추가</p>
        </S.SelectMenuButtonBox>
      </S.SelectMenuInnerBox>
    </S.SelectMenuBox>
  );
};

const CardInfo = ({ createdAt, description }) => {
  const text = description || '내용 없음';

  const handleKebabClick = (e) => {
    e.preventDefault();
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
        {/* 삭제하기/폴더 추가 Modal 제작 중 */}
        {null && <SelectMenu />}
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

const Card = ({ items }) => {
  const { image_source, created_at, description, url } = mapCardData(items);
  return (
    <S.CardHref href={url} target="_blank" rel="noreferrer">
      <CardImage imgUrl={image_source} />
      <CardInfo createdAt={created_at} description={description} />
    </S.CardHref>
  );
};

export default Card;
