import SignLayout from "@/components/sign/SignLayout/SignLayout";
import styles from "./SignInPage.module.scss";

function SignInPage() {
  return (
    <>
      <SignLayout type="signin">
        <form className={styles["form"]}>
          <button className={styles["button"]}>로그인</button>
        </form>
      </SignLayout>
    </>
  );
}

export default SignInPage;
