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
        <SignHeader checkMember="회원이 아니신가요?" signSrc="/signup" toSignText="회원 가입하기" />
        <SignForm>로그인</SignForm>
        <Social>소셜 로그인</Social>
      </SignWrapper>
    </>
  );
}

const SignWrapper = styled.div`
  padding-top: 23.8rem;
  padding-bottom: 25.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  background-color: var(--bg);

  @media (max-width: 1124px) {
    padding-top: 20rem;
    padding-bottom: 29rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    padding-top: 12rem;
    padding-bottom: 23.2rem;
  }
`;
