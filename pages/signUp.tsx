import { SignButton } from "@/src/components/auth/Sign/SignButton";
import { SignHeader } from "@/src/components/auth/Sign/SignHead";
import { SocialSign } from "@/src/components/auth/Sign/SocialSign";
import { EmailInput } from "@/src/components/auth/Sign/EmailInput";
import * as React from "react";
import { PasswordInput } from "@/src/components/auth/Sign/PasswordInput";
import { Container, RegularLoginSection } from "./signIn";

function SignUp() {
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <RegularLoginSection>
        <SignHeader type="회원가입" />
        <EmailInput type="회원가입" />
        <PasswordInput type="기본" setPassword={setPassword} />
        <PasswordInput type="재확인" password={password} />
        <SignButton type="회원가입" />
      </RegularLoginSection>
      <SocialSign type="회원가입" />
    </Container>
  );
}

export default SignUp;
