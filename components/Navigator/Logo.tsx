import Link from "next/link";
import styled from "styled-components";
import LogoImg from "@/public/Linkbrary.svg";

const LogoImgBox = styled.div`
  height: 2.4rem;

  @media (max-width: 767px) {
    height: 1.6rem;
  }
`;

const Logo = () => {
  return (
    <>
      <Link href="/">
        <LogoImgBox>
          <LogoImg alt="Linkbrary 로고" />
        </LogoImgBox>
      </Link>
    </>
  );
};

export default Logo;
