import Image from "next/image";
import Link from "next/link";
import google from "src/assets/icons/google.svg";
import kakao from "src/assets/icons/kakao.svg";
import styled from "styled-components";

interface Props {
  title: string;
}

function SocialButton({ title }: Props) {
  return (
    <StyledWrapper>
      <span>{title}</span>
      <StyledImgWrapper>
        <Link href="https://www.google.com">
          <StyledImg src={google} alt="구글 로고" />
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <StyledImg src={kakao} alt="카카오톡 로고" />
        </Link>
      </StyledImgWrapper>
    </StyledWrapper>
  );
}

export default SocialButton;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;

  border-radius: 0.5rem;
  background-color: #e7effb;
  border: 1px solid #ccd5e3;
  font-size: 1.2rem;
`;

const StyledImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const StyledImg = styled(Image)`
  width: 3.5rem;
  height: 3.5rem;
`;
