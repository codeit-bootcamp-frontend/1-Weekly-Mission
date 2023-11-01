import styled, { css } from "styled-components";
import { RESPONSIBLE_SIZE_MOBILE } from "utils/constants";

export const PageContainer = styled.div`
  ${(props) =>
    props.$isHeaderFixed &&
    css`
      padding-top: 9.4rem;
    `}

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    ${(props) =>
      props.$isHeaderFixed &&
      css`
        padding-top: 6.3rem;
      `}
  }
`;
