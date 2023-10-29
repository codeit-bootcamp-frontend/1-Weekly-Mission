import styled from "styled-components";
import colors from "../../../../style/colors";


export const NavContainer = styled.nav`
  height: 25px;
  padding: 32px 200px;
  background: ${colors.background};
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 133px;
  height: 24px;
`;
