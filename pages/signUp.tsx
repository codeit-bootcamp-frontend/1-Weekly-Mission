import { SignButton } from "@/src/components/auth/Sign/SignButton";
import { SignHeader } from "@/src/components/auth/Sign/SignHead";
import { SocialSign } from "@/src/components/auth/Sign/SocialSign";
import { EmailInput } from "@/src/components/auth/Sign/EmailInput";
import * as React from "react";
import { PasswordInput } from "@/src/components/auth/Sign/PasswordInput";
import { Container, RegularLoginSection } from "./signIn";

function SignUp() {
  const [password, setPassword] = React.useState("");
  const [reconfirmPassword, setReconfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <Container>
      <RegularLoginSection>
        <SignHeader type="회원가입" />
        <EmailInput type="회원가입" setEmail={setEmail} />
        <PasswordInput type="기본" setPassword={setPassword} />
        <PasswordInput type="재확인" password={password} setReconfirmPassword={setReconfirmPassword} />
        <SignButton type="회원가입" email={email} password={password} reconfirmPassword={reconfirmPassword} />
      </RegularLoginSection>
      <SocialSign type="회원가입" />
    </Container>
  );
}

export default SignUp;
