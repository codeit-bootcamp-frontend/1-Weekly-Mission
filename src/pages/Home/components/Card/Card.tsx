import * as S from './Card.style';

interface Props {
  data: {
    id: number;
    layout: string;
    title: JSX.Element;
    description: string;
    imgSrc: string;
    imgAlt: string;
    gradient: string;
  };
}

function Card({ data }: Props) {
  const { layout, title, description, imgSrc, imgAlt, gradient } = data;

  return (
    <S.CardContainer $layout={layout}>
      <S.Title $gradient={gradient}>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.ImgContainer>
        <img src={imgSrc} alt={imgAlt} />
      </S.ImgContainer>
    </S.CardContainer>
  );
}

export default Card;
