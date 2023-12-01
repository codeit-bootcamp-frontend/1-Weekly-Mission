import { Container, Copy, Info, Sns } from "@/components/Footer/Footer.styled";
import { Dom } from "@/hooks/useObserver";
import Image from "next/image";
import Link from "next/link";

interface Props {
  dom?: React.MutableRefObject<Dom>;
}

function Footer({ dom }: Props) {
  return (
    <Container
      ref={(el) => {
        dom && (dom.current.footer = el);
      }}
    >
      <Copy>©codeit - 2023</Copy>
      <Info>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/faq">FAQ</Link>
      </Info>
      <Sns>
        <Link target="_blank" rel="noreferrer" href="https://www.facebook.com">
          <Image width={24} height={24} src="/facebook.svg" alt="페이스북 페이지로 연결" />
        </Link>
        <Link target="_blank" rel="noreferrer" href="https://twitter.com">
          <Image width={24} height={24} src="/twitter.svg" alt="트위터 페이지로 연결" />
        </Link>
        <Link target="_blank" rel="noreferrer" href="https://www.youtube.com">
          <Image width={24} height={24} src="/youtube.svg" alt="유튜브 페이지로 연결" />
        </Link>
        <Link target="_blank" rel="noreferrer" href="https://www.instagram.com">
          <Image width={24} height={24} src="/instagram.svg" alt="인스타그램 페이지로 연결" />
        </Link>
      </Sns>
    </Container>
  );
}

export default Footer;
