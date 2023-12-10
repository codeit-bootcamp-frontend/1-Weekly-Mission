import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import LogoImg from '@/public/assets/images/logo.svg';
import { DEVICE_SIZE } from '@/lib/styles/DeviceSize';

interface Props {
  type?: 'header';
  width: number;
  height: number;
}

export default function Logo({ type, width, height }: Props) {
  return (
    <Link href="/" target="_blank">
      <Img src={LogoImg} alt="Linkbrary 메인 페이지 바로가기" $type={type} $width={width} $height={height} />
    </Link>
  );
}

const mobileLogo = css`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 90px;
    height: 18px;
  }
`;

const Img = styled(Image)<{ $type?: string; $width: number; $height: number }>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};

  &:hover {
    cursor: pointer;
  }

  ${({ $type }) => ($type === 'header' ? mobileLogo : null)};
`;
