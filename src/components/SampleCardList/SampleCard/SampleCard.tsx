import * as S from './SampleCard.style';
import { formatDate, formatTimeDiff } from '@utils/format';

interface Props {
  item?: {
    imageSource?: string;
    createdAt: string;
    title: string;
    description: string;
    url: string;
  };
}

const SampleCard = ({ item }: Props) => {
  if (!item) return null;

  const { imageSource, createdAt, title, description, url } = item;

  const moveUrl = () => {
    window.open(url);
  };

  return (
    <div onClick={moveUrl}>
      <S.ImageContainer>
        {imageSource ? (
          <S.Image src={imageSource} alt={title} />
        ) : (
          <S.Image src='/assets/images/no-image.svg' alt={title} />
        )}

        <S.StarButton src='/assets/images/star.svg' alt='별모양 버튼' />
      </S.ImageContainer>
      <S.Info>
        <S.KebabButton src='/assets/images/kebab.svg' alt='케밥 버튼' />
        <S.TimeDiff>{createdAt ? formatTimeDiff(createdAt) : ''}</S.TimeDiff>
        <S.Description>{description}</S.Description>
        <S.Date>{createdAt ? formatDate(createdAt) : ''}</S.Date>
      </S.Info>
    </div>
  );
};

export default SampleCard;
