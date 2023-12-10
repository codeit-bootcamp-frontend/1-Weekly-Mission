import styled from "styled-components";
import Form from "@/components/Form";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "@/utils/signInUp";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/folder");
      return;
    }
  }, []);

  return (
    <Background>
      <Container>
        <Logo href="/">
          <Image src="/images/logo.svg" width={210} height={38} alt="로고" />
        </Logo>
        <CTA>
          <p>회원이 아니신가요?</p>
          <Link href="/signup">회원가입 하기</Link>
        </CTA>
        <Form type="sign-in" apiCall={signIn} />
        <SNS>
          <p>소셜 로그인</p>
          <div>
            <Link href="https://www.google.com">
              <Image
                src="/images/google.svg"
                width={42}
                height={42}
                alt="구글 로그인"
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page">
              <Image
                src="/images/kakao.svg"
                width={42}
                height={42}
                alt="카카오 로그인"
              />
            </Link>
          </div>
        </SNS>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  background: var(--linkbrary-bg, #f0f6ff);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  margin: 0 auto;
  padding-top: 23.8rem;
`;

const Logo = styled(Link)`
  margin: 0 auto;
  cursor: pointer;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 0.8rem;

  padding-bottom: 3rem;

  & p {
    color: #000000;
    font-size: 1.6rem;
  }

  & a {
    color: var(--linkbrary-primary-color, #6d6afe);
    font-size: 1.6rem;
    font-weight: 600;

    text-decoration: underline;
  }
`;

const SNS = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 2.4rem;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--linkbrary-gray-20, #ccd5e3);
  background: var(--linkbrary-gray-10, #e7effb);

  & p {
    text-align: center;
    color: #000000;
    font-size: 1.4rem;
  }

  & a {
    width: 4.2rem;
    height: 4.2rem;
    padding-left: 1.6rem;
    border-radius: 50%;
  }
`;
