import styled from "styled-components";
import { RESPONSIBLE_SIZE_MOBILE } from "utils/constants";

export const LinkSearchContainer = styled.fieldset`
  display: grid;
  grid-template-columns: 1.6rem auto;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem 1.6rem;
  border-radius: 10px;
  background: #f5f5f5;

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    padding: 1.3rem 1.6rem;
  }
`;

export const LinkSearchInput = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;

  &:-webkit-input-placeholder {
    color: #666666;
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    font-size: 1.4rem;
  }
`;
