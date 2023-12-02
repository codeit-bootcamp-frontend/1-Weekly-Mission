import Image from "next/image";
import { styled } from "styled-components";

interface Icon {
  size?: number;
  width?: number;
  height?: number;
  src: string;
  alt: string;
}

const DEFAULT_SIZE = 15;

function Icon({ size = DEFAULT_SIZE, width, height, src, alt }: Icon) {
  return (
    <StyledIcon
      src={src}
      width={width ?? size}
      height={height ?? size}
      alt={alt}
      priority
    />
  );
}

export default Icon;

const StyledIcon = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
