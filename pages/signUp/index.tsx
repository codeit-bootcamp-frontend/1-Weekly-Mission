import s from "./index.module.css";
import Head from "next/head";
import SignHeader from "@/components/SignHeader";
import SignUpForm from "@/pageComponents/signUpComponents/SignUpForm";
import { GetStaticPaths } from "next";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>회원가입 페이지</title>
      </Head>
      <div className={s.main}>
        <header className={s.header}>
          <SignHeader
            askSentence="이미 회원이신가요?"
            path="/signIn"
            functionSentence="로그인 하기"
          />
        </header>
        <SignUpForm />
      </div>
    </>
  );
}
