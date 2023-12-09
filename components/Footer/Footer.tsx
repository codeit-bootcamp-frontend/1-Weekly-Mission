import { useRouter } from "next/router";
import { SnsCollection } from "@/components";
import * as Styled from "./Footer.styled";

const Footer = () => {
  const router = useRouter();
  const location = router.pathname.split("/")[1]
    ? router.pathname.split("/")[1]
    : "/";

  return (
    <Styled.Footer $location={location}>
      <Styled.FooterBox>
        <Styled.Copyright>@codeit - 2023</Styled.Copyright>
        <Styled.FooterLinks>
          <Styled.FooterLink href="/">Privacy Policy</Styled.FooterLink>
          <Styled.FooterLink href="/">FAQ</Styled.FooterLink>
        </Styled.FooterLinks>
        <SnsCollection />
      </Styled.FooterBox>
    </Styled.Footer>
  );
};

export default Footer;
