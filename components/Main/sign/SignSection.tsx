import { Signin } from "@/components/Main/sign/Sign.type";
import SignForm from "@/components/Main/sign/SignForm";
import SignLogo from "@/components/Main/sign/SignLogo";
import { StyledSection } from "@/components/Main/sign/SignSection.styled";
import SignSns from "@/components/Main/sign/SignSns";

export default function SignSection({ signin = false }: Signin) {
  return (
    <StyledSection>
      <SignLogo signin={signin} />
      <SignForm signin={signin} />
      <SignSns signin={signin} />
    </StyledSection>
  );
}
