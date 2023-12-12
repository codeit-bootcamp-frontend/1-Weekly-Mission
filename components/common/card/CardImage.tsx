import styled from "styled-components";
import starImg from "@/src/image/star.svg";
import Image from "next/image";

interface CardImageProps {
  className?: string;
  src: string;
}

const CardImage = ({ className = "img_loaded", src }: CardImageProps) => {
  return (
    <>
      {/* 왜 이 코드에서만 width, height, unoptimized를 추가해야 오류가 안뜨는지 모르겠습니다..ㅠㅠ */}
      <StyledImage className={className} src={src} alt="이미지" width={100} height={100} unoptimized />
      <FavoriteImage src={starImg} alt="별" />
    </>
  );
};

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const FavoriteImage = styled(Image)`
  width: 3.4rem;
  height: 3.4rem;
  flex-shrink: 0;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export default CardImage;
