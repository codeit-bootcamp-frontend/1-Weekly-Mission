import SignLayout from "@/components/sign/SignLayout/SignLayout";
import styles from "./SignInPage.module.scss";
import SigninForm from "@/components/sign/SignForm/SigninForm";

function SignInPage() {
  return (
    <>
      <SignLayout type="signin">
        <SigninForm />
      </SignLayout>
    </>
  );
}

export default SignInPage;
