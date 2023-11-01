import { SnsCollection } from "components";
import * as Styled from "./StyledFooter";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.FooterBox>
        <Styled.Copyright>@codeit - 2023</Styled.Copyright>
        <Styled.FooterLinks>
          <Styled.FooterLink href="/">Privacy Policy</Styled.FooterLink>
          <Styled.FooterLink href="/">FAQ</Styled.FooterLink>
        </Styled.FooterLinks>
        <SnsCollection className="sns" />
      </Styled.FooterBox>
    </Styled.Footer>
  );
};

export default Footer;
