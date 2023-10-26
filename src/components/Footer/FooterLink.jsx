import styled from 'styled-components';

function FooterLink({ children }) {
  return (
    <>
      <FooterLinkStyle>
        <a href=''>{children}</a>
      </FooterLinkStyle>
    </>
  );
}

export default FooterLink;

const FooterLinkStyle = styled.a`
  color: #cfcfcf;
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
`;
