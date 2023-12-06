import s from "./index.module.css";
import Image from "next/image";
import Head from "next/head";
import SignHeader from "@/components/SignHeader";
import SignFooter from "@/components/SignFooter";

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
        <div className={s.signBox}>
          <form className={s.signForm}>
            <div className={s.signInputs}>
              <div className={s.signInputBox}>
                <label htmlFor="email" className={s.signInputLabel}>
                  이메일
                </label>
                <input id="email" className={s.signInput} type="text" />
                <p className={s.errorMessage}></p>
              </div>
              <div className={`${s.signInputBox} ${s.signPassword}`}>
                <label htmlFor="password" className={s.signInputLabel}>
                  비밀번호
                </label>
                <input id="password" className={s.signInput} type="password" />
                <p className={s.errorMessage}></p>
                <button className={s.eyeButton} type="button">
                  <Image
                    src="/images/eye-off.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </button>
              </div>
            </div>
            <button className={s.cta} type="submit">
              로그인
            </button>
          </form>
          <SignFooter sentence="소셜 로그인" />
        </div>
      </div>
    </>
  );
}
