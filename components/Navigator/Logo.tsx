import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logoImg from "@/public/Linkbrary.svg";

const LogoImgBox = styled.div`
  height: 2.4rem;

  @media (max-width: 767px) {
    height: 1.6rem;
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoImgBox>
        <Image src={logoImg} alt="Linkbrary 로고" />
      </LogoImgBox>
    </Link>
  );
};

export default Logo;
