import styled from 'styled-components';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function FooterLink({ children }: Props) {
  return (
    <>
      <FooterLinkStyle href=''>{children}</FooterLinkStyle>
    </>
  );
}

export default FooterLink;

const FooterLinkStyle = styled.a`
  color: #cfcfcf;
  font-family: Arial, sans-serif;
  font-size: 1.6rem;
`;
