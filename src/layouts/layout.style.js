import styled, { css } from "styled-components";
import { RESPONSIBLE_SIZE } from "utils/constants";

export const PageContainer = styled.div`
  ${(props) =>
    props.$isHeaderFixed &&
    css`
      padding-top: 9.4rem;
    `}

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    ${(props) =>
      props.$isHeaderFixed &&
      css`
        padding-top: 6.3rem;
      `}
  }
`;
