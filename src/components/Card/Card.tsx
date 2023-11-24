import TimeAgo from 'react-timeago';
import * as S from './Card.style';
import DEFAULT_IMAGE from '@assets/images/default-link-img.svg';
import STAR from '@assets/icons/star.svg';
import KEBAB from '@assets/icons/kebab.svg';
import { CardProps } from '@components/CardsContainer/CardsContainer';

function Card({ data }: { data: CardProps }) {
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

  return (
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
          <S.KebabButton type='button'>
            <img src={KEBAB} alt='케밥 버튼' />
          </S.KebabButton>
        </S.TimeAgo>
        <S.Title>{reduceText(title, 70)}</S.Title>
        <S.Description>{reduceText(description, 100)}</S.Description>
        <S.Date>{createdDate.toLocaleDateString()}</S.Date>
      </S.CardTextContainer>
    </S.CardContainer>
  );
}

export default Card;
