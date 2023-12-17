import SignForm from "@/components/Main/sign/SignForm";
import SignLogo from "@/components/Main/sign/SignLogo";
import { StyledSection } from "@/components/Main/sign/SignSection.styled";
import SignSns from "@/components/Main/sign/SignSns";

export default function SignSection() {
  return (
    <StyledSection>
      <SignLogo />
      <SignForm />
      <SignSns />
    </StyledSection>
  );
}
