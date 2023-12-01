import SignForm from "@/components/Main/sign/SignForm";
import SignLogo from "@/components/Main/sign/SignLogo";
import { StyledSection } from "@/components/Main/sign/SignSection.styled";
import SignSns from "@/components/Main/sign/SignSns";
import Image from "next/image";

interface ISignSection {
  signin?: boolean;
}

export default function SignSection({ signin = false }: ISignSection) {
  return (
    <StyledSection>
      <SignLogo signin={signin} />
      <SignForm signin={signin} />
      <SignSns signin={signin} />
    </StyledSection>
  );
}
