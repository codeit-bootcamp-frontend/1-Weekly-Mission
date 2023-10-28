import styled from "styled-components";
import Nav from "./Nav";

const StyledHeader = styled.div`
  width: 100%;
  height: 93px;
  background-color: #f0f6ff;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    .Header_wrapper {
      padding: 10px 0 40px;
    }
  }
`;

export const FixedStyledHeader = styled(StyledHeader)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
`;

export function FixedHeader({ account }) {
  return (
    <FixedStyledHeader>
      <Nav account={account} />
    </FixedStyledHeader>
  );
}

export function BasicHeader({ account }) {
  return (
    <StyledHeader>
      <Nav account={account} />
    </StyledHeader>
  );
}
