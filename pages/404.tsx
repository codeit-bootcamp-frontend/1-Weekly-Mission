import styles from "@/styles/404.module.css";
import LinkButton from "@/components/Button/LinkButton";

const ErrorPage = () => {
  return (
    <>
      <div className={styles.root}>
        <p>
          잘못된 페이지로 들어오셨네요.
          <br />썩 꺼지세요
        </p>
        <LinkButton className={styles.button} href="/" title="메인 화면">
          메인 화면으로 도망치기
        </LinkButton>
      </div>
    </>
  );
};

export default ErrorPage;
