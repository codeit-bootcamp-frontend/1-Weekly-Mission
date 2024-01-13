import SignLayout from "@/components/sign/SignLayout/SignLayout";
import styles from "./SignUpPage.module.scss";

function SignUpPage() {
  return (
    <>
      <SignLayout type="signup">
        <form className={styles["form"]}>
          <button className={styles["button"]}>회원가입</button>
        </form>
      </SignLayout>
    </>
  );
}

export default SignUpPage;
