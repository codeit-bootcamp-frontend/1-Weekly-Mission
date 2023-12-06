import s from "./index.module.css";
import Image from "next/image";
import Head from "next/head";
import SignHeader from "@/components/SignHeader";
import SignFooter from "@/components/SignFooter";

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
              <div className={`${s.signInputBox} ${s.signPassword}`}>
                <label htmlFor="password" className={s.signInputLabel}>
                  비밀번호 확인
                </label>
                <input
                  id="confirmPassword"
                  className={s.signInput}
                  type="password"
                />
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
              회원가입
            </button>
          </form>
          <SignFooter sentence="다른 방식으로 가입하기" />
        </div>
      </div>
    </>
  );
}
