import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <S_Footer>
      <Container>
        <Copyright>©codeit - 2023</Copyright>
        <Links>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </Links>
        <SNS>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S_Image
              src="/images/facebook.svg"
              width={20}
              height={20}
              alt="facebook 로고"
            />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S_Image
              src="/images/twitter.svg"
              width={20}
              height={20}
              alt="twitter 로고"
            />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S_Image
              src="/images/youtube.svg"
              width={20}
              height={20}
              alt="youtube 로고"
            />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S_Image
              src="/images/instagram.svg"
              width={20}
              height={20}
              alt="instagram 로고"
            />
          </Link>
        </SNS>
      </Container>
    </S_Footer>
  );
}

const S_Footer = styled.footer`
  background-color: var(--black);

  width: 100%;
  height: 16rem;
  padding: 3.2rem 10.4rem 6.4rem;
  margin-top: 6rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "links sns"
    "copyright . ";
  justify-content: space-between;
  row-gap: 6rem;

  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1200px) {
    max-width: 192rem;
    height: fit-content;
    padding: 0 10.4rem;
  }
`;

const Copyright = styled.span`
  grid-area: copyright;
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;

const Links = styled.div`
  grid-area: links;
  color: #cfcfcf;
  font: 1.6rem normal Arial;

  padding-right: 1.8rem;

  display: flex;
  column-gap: 3rem;
`;

const SNS = styled.div`
  grid-area: sns;
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;

const S_Image = styled(Image)`
  width: 2rem;
  height: 2rem;
`;
