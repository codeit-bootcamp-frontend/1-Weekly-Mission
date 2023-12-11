import s from "./index.module.css";
import Head from "next/head";
import SignHeader from "@/components/SignHeader";
import SignInForm from "@/pageComponents/signInComponents/SignInForm";
import { GetStaticPaths } from "next";

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>로그인 페이지</title>
      </Head>
      <div className={s.main}>
        <header className={s.header}>
          <SignHeader
            askSentence="회원이 아니신가요?"
            path="/signUp"
            functionSentence="회원 가입하기"
          />
        </header>
        <SignInForm />
      </div>
    </>
  );
}
