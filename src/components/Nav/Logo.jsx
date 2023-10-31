import styled from 'styled-components';
import logo from '../../assets/svg/logo.svg';

function Logo() {
  return (
    <>
      <LogoStyle src={logo} alt='홈으로 연결된 Linkbrary 로고' />
    </>
  );
}

export default Logo;

const LogoStyle = styled.img`
  height: 1.6rem;

  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;
