import styled from "styled-components";
import starImg from "../../image/star.svg";

interface CardImageProps {
  className?: string;
  src: string;
}

const CardImage = ({ className = "img_loaded", src }: CardImageProps) => {
  return (
    <>
      <Image className={className} src={src} alt="이미지" />
      <FavoriteImage src={starImg} alt="별" />
    </>
  );
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const FavoriteImage = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  flex-shrink: 0;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export default CardImage;
