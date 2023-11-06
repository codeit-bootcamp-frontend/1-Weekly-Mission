import styled from "styled-components";
import { RESPONSIBLE_SIZE } from "utils/constants";

export const LinkSearchForm = styled.form`
  margin-bottom: 4rem;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    margin-bottom: 3.2rem;
  }
`;

export const LinkSearchFieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1.6rem auto;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem 1.6rem;
  border-radius: 10px;
  background: #f5f5f5;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 1.3rem 1.6rem;
  }
`;

export const LinkSearchInput = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-width: fit-content;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;

  &:-webkit-input-placeholder {
    color: #666666;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    font-size: 1.4rem;
  }
`;
