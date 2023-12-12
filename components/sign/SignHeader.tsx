import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "@/src/image/logo.svg";

interface HeaderProps {
  checkMember: string;
  signSrc: string;
  toSignText: string;
}

const SignHeader = ({ checkMember, signSrc, toSignText }: HeaderProps) => {
  return (
    <Header>
      <LogoBtn href="/">
        <LogoImg src={Logo} alt="로고 이미지" />
      </LogoBtn>
      <Text>
        {checkMember}
        <ToSign href={signSrc}>{toSignText}</ToSign>
      </Text>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

const LogoBtn = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImg = styled(Image)`
  width: 21.0583rem;
  height: 3.8rem;
`;

const Text = styled.div`
  display: flex;
  gap: 0.8rem;

  color: var(--linkbrary-black);

  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const ToSign = styled(Link)`
  color: var(--primary);

  font-weight: 600;
`;

export default SignHeader;
