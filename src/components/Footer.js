import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';
import instagram from '../assets/images/instagram.svg';
import styled from 'styled-components';

const SNSs = [
  {
    href: 'https://www.facebook.com/',
    src: facebook,
    alt: 'facebook',
  },
  {
    href: 'https://twitter.com/',
    src: twitter,
    alt: 'twitter',
  },
  {
    href: 'https://www.youtube.com/',
    src: youtube,
    alt: 'youtube',
  },
  {
    href: 'https://www.instagram.com/',
    src: instagram,
    alt: 'instagram',
  },
];

const FooterSns = ({ href, src, alt }) => {
  return (
    <SnsLink href={href} className='sns'>
      <img src={src} alt={alt} />
    </SnsLink>
  );
};

export default function Footer() {
  return (
    <Container className='footer'>
      <Box className='footer-box'>
        <TradeMark className='footer-trademark'>©codeit - 2023</TradeMark>
        <Nav className='footer-nav'>
          <NavLink href='/Privacy' className='footer-nav-link'>
            Privacy Policy
          </NavLink>
          <NavLink href='FAQ' className='footer-nav-link'>
            FAQ
          </NavLink>
        </Nav>
        <SnsBox className='footer-sns'>
          {SNSs.map((sns) => (
            <FooterSns {...sns} key={sns.alt} />
          ))}
        </SnsBox>
      </Box>
    </Container>
  );
}

const Container = styled.footer`
  height: 160px;
  background-color: var(--the-julge-black);
  font-family: Arial;
  width: 100%;
`;

const Box = styled.div`
  color: var(--linkbrary-white);
  max-width: 1920px;
  padding: 32px 104px 0;
  display: grid;
  justify-content: space-between;
  grid-template-areas: 'trademark nav sns';
  margin: auto;
  @media (max-width: 767px) {
    grid-template-areas:
      'nav sns'
      'trademark .';
    gap: 60px 0px;
    padding: 32px;
  }
`;

const TradeMark = styled.div`
  grid-area: trademark;
`;

const Nav = styled.div`
  grid-area: nav;
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: var(--linkbrary-white);
  text-decoration: none;
`;

const SnsBox = styled.div`
  grid-area: sns;
`;

const SnsLink = styled.a`
  margin-left: 12px;
`;
