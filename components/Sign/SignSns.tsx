import Image from "next/image";
import styled from "styled-components";
import googleLogo from "@/public/google.png";
import kakaoLogo from "@/public/kakao.svg";
import * as Styled from "./Sign.styled";

interface Props {
  snsText: string;
}

const GoogleSnsLink = styled(Styled.SnsLink)`
  background-color: var(--white);
  border: 0.1rem solid #d3d4dd;
`;

const KakaoSnsLink = styled(Styled.SnsLink)`
  padding-top: 0.2rem;
  background-color: #f5e14b;
`;

const SignSns = ({ snsText }: Props) => {
  return (
    <>
      <Styled.SnsText>{snsText}</Styled.SnsText>
      <Styled.SnsLinks>
        <GoogleSnsLink href={"https://www.google.com/"} target="_blank">
          <Image src={googleLogo} alt="구글 로고" />
        </GoogleSnsLink>
        <KakaoSnsLink href={"https://www.kakaocorp.com/page/"} target="_blank">
          <Image src={kakaoLogo} alt="카카오 로고" />
        </KakaoSnsLink>
      </Styled.SnsLinks>
    </>
  );
};

export default SignSns;
