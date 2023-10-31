import UserProfile from './UserProfile';
import styled from 'styled-components';
import Logo from './Logo';

function Navbar() {
  return (
    <NavbarStyle>
      <Logo />
      <UserProfile />
    </NavbarStyle>
  );
}

export default Navbar;

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 1.8rem 3.2rem;

  @media (min-width: 768px) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: 1024px) {
    height: 9.4rem;
    max-width: 192rem;
    padding: 0 20rem;
  }
`;
