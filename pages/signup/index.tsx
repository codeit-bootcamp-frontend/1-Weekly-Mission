import styles from "./signup.module.css";
import Image from "next/image";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import SocialAuth from "@/components/socialAuth/SocialAuth";

function Signup() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Image src={logo} alt="linkbrary 로고" width={210} height={38} />
        <div className={styles.headerTextContainer}>
          <span>이미 회원이신가요?</span>
          <Link href={"/signin"}>
            <span className={styles.signupLink}>로그인 하기</span>
          </Link>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <Input placeholder="이메일을 입력해 주세요" inputName="이메일" />
        <Input
          placeholder="영문,숫자를 조합해 8자 이상 입력해 주세요"
          inputType="password"
          inputName="비밀번호"
        />
        <Input
          placeholder="비밀번호와 일치하는 값을 입력해 주세요"
          inputType="password"
          inputName="비밀번호 확인"
        />
      </div>
      <Button className={styles.ctaButton}>회원가입</Button>
      <SocialAuth title="다른 방식으로 가입하기" />
    </section>
  );
}

export default Signup;
