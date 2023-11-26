import styled from 'styled-components';
import FooterLink from './FooterLink';

function FooterLinks() {
  return (
    <FooterLinksStyle>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>FAQ</FooterLink>
    </FooterLinksStyle>
  );
}

export default FooterLinks;

const FooterLinksStyle = styled.div`
  grid-area: footer-links;
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
`;
