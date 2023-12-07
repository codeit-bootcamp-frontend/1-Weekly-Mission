import styles from "./HeroSec.module.css";
import TextGradiant from "../TextGradiant/TextGradiant";
import LinkButton from "../Button/LinkButton";
import Image from "next/image";

function HeroSec() {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <TextGradiant className={styles.textGradiant}>세상의 모든 정보</TextGradiant>
          를<br />
          쉽게 저장하고 관리해 보세요
        </h2>

        <LinkButton className={styles.button} href="/signup" title="signup">
          링크 추가하기
        </LinkButton>

        <div className={styles.img}></div>
      </div>
    </header>
  );
}

export default HeroSec;
