import SignHeader from "@/components/sign/SignHeader";
import Social from "@/components/sign/Social";
import SignForm from "@/components/sign/signInput/SignForm";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary | Sign In</title>
      </Head>

      <SignWrapper>
        <SignHeader checkMember="이미 회원이신가요?" signSrc="/signin" toSignText="로그인 하기" />
        <SignForm signup>회원가입</SignForm>
        <Social>다른 방식으로 가입하기</Social>
      </SignWrapper>
    </>
  );
}

const SignWrapper = styled.div`
  padding-top: 23.8rem;
  padding-bottom: 11.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  background-color: var(--bg);

  @media (max-width: 1124px) {
    padding-top: 20rem;
    padding-bottom: 17.7rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    padding-top: 12rem;
    padding-bottom: 11.9rem;
  }
`;
