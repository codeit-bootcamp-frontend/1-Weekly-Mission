import styled from "styled-components";
import FacebookLogo from "@/src/image/facebook.svg";
import InstagramLogo from "@/src/image/instagram.svg";
import TwitterLogo from "@/src/image/twitter.svg";
import YoutubeLogo from "@/src/image/youtube.svg";
import Image from "next/image";

interface FooterProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const Footer = ({ ref }: FooterProps) => {
  return (
    <Wrapper ref={ref}>
      <Content>
        <Copyright>©codeit - 2023</Copyright>
        <Links>
          <Link href="privacy.html">Privacy Policy</Link>
          <Link href="faq.html">FAQ</Link>
        </Links>
        <Sns>
          <Link href="https://facebook.com">
            <Image src={FacebookLogo} alt="페이스북 로고 이미지" />
          </Link>
          <Link href="https://twitter.com">
            <Image src={TwitterLogo} alt="트위터 로고 이미지" />
          </Link>
          <Link href="https://youtube.com">
            <Image src={YoutubeLogo} alt="유튜브 로고 이미지" />
          </Link>
          <Link href="https://instagram.com">
            <Image src={InstagramLogo} alt="인스타그램 로고 이미지" />
          </Link>
        </Sns>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #111322;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 192rem;
  height: 16rem;
  padding: 3.2rem 10.4rem;

  @media (max-width: 767px) and (min-width: 375px) {
    flex-wrap: wrap;
    gap: 6rem 0;
    height: auto;
    padding: 3.2rem;
  }
`;

const Copyright = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;

  @media (max-width: 767px) and (min-width: 375px) {
    order: 1;
  }
`;

const Links = styled.div`
  display: flex;
  column-gap: 3rem;

  @media (max-width: 767px) and (min-width: 375px) {
    flex-basis: 50%;
  }
`;

const Link = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;

const Sns = styled.div`
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;

  @media (max-width: 767px) and (min-width: 375px) {
    flex-basis: 50%;
    justify-content: flex-end;
  }
`;

export default Footer;
