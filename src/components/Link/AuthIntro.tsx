import Link from "next/link";
import theme from "src/styles/Theme/theme";
import { AuthIntroType } from "src/types/Layout";
import styled from "styled-components";

function AuthIntro({ memberStatus, linkTitle, link }: AuthIntroType) {
  return (
    <StyledLinkWrapper>
      {memberStatus}
      <StyledLink href={link}>{linkTitle}</StyledLink>
    </StyledLinkWrapper>
  );
}

export default AuthIntro;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 13px;
  margin: 12px 0;
`;

const StyledLink = styled(Link)`
  color: ${theme.color.primary};
`;
