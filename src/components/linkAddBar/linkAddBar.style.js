import styled from "styled-components";
import {
  RESPONSIBLE_SIZE_TABLET,
  RESPONSIBLE_SIZE_MOBILE,
} from "utils/constants";

export const LinkAddForm = styled.form`
  width: 80rem;
  padding: 1.6rem 2rem;
  border: 0.1rem solid var(--linkbrary--color--primary);
  border-radius: 15px;
  background: var(--linkbrary--color--white);

  @media screen and (${RESPONSIBLE_SIZE_TABLET}) {
    width: 70.4rem;
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    width: 100%;
    padding: 0.8rem 1rem;
  }
`;

export const LinkAddFieldset = styled.fieldset`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 8rem;
  gap: 1.2rem;
`;

export const LinkAddInput = styled.input`
  min-width: fit-content;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4;

  :-webkit-input-placeholder {
    color: #9fa6b2;
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    font-size: 1.4rem;
    line-height: normal;
  }
`;

export const LinkAddButton = styled.button`
  padding: 1rem 1.6rem;
  border-radius: 8px;
  background: var(--linkbrary--gra--purpleblue);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: normal;
  color: #f5f5f5;
  word-break: keep-all;
  cursor: pointer;
`;
