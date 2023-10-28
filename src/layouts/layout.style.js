import styled from "styled-components";
import { RESPONSIBLE_SIZE_MOBILE } from "utils/constants";

export const PageContainer = styled.div`
  padding-top: 9.4rem;

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    padding-top: 6.3rem;
  }
`;
