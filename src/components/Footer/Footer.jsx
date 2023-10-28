import Copyright from './Copyright';
import FooterLinks from './FooterLinks';
import SNSLinks from './SNSLinks';
import styled from 'styled-components';

function Footer() {

  return (
    <FooterBlock>
      <FooterBox>
        <Copyright />
        <FooterLinks />
        <SNSLinks />
      </FooterBox>
    </FooterBlock>
  );
}

export default Footer;

const FooterBlock = styled.footer`
  display: flex;
  margin-top: 6rem;
  justify-content: center;
  width: 100%;
  height: 16rem;
  background-color: #111322;
`;

const FooterBox = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template:
    "footer-links sns"
    ". ." 1fr
    "copyright .";
  width: 100%;
  padding: 3.2rem;
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    grid-template: "copyright footer-links sns";
    height: fit-content;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 0;
  }
`;
