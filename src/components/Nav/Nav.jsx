import styled from 'styled-components';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';


function Nav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <NavBlock $path={path}>
      <Navbar />
    </NavBlock>
  );
}

export default Nav;

const NavBlock = styled.nav`
  display: flex;
  justify-content: center;
  $position: ${props => (props.path === '/folder' ? 'static' : 'sticky')};
  top: 0;
  width: 100%;
  background: #f0f6ff;
  z-index: 1;
`;
