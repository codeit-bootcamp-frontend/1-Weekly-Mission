import Image from 'next/image';
import styled from 'styled-components';
import LogoImg from '@/public/assets/images/logo.svg';
import Link from 'next/link';

interface Props {
  width: number;
  height: number;
}

export default function Logo({ width, height }: Props) {
  return (
    <Link href={'/'}>
      <Img src={LogoImg} alt="Linkbrary 메인 페이지 바로가기" $width={width} $height={height} />
    </Link>
  );
}

const Img = styled(Image)<{ $width: number; $height: number }>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};

  &:hover {
    cursor: pointer;
  }
`;
