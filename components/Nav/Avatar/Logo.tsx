import { StyledLink } from "@/components/Nav/Avatar/Logo.styled";
import Image from "next/image";

export default function Logo({ src = "", alt = "" }) {
  return (
    <StyledLink href="/">
      <Image width={130} height={24} src={src} alt={alt} />
    </StyledLink>
  );
}
