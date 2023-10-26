import styled from 'styled-components';
import Navbar from './Navbar';

function Nav() {
  return (
    <NavBlock>
      <Navbar />
    </NavBlock>
  );
}

export default Nav;

const NavBlock = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  background: #f0f6ff;
  z-index: 1;
`
