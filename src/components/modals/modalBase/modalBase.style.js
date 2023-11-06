import styled from "styled-components";

export const ModalBaseWrapper = styled.section`
  position: relative;
  width: 36rem;
  padding: 3.2rem 4rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #ccd5e3;
  background: var(--linkbrary--color--white);
`;

export const ModalTitle = styled.p`
  color: var(--linkbrary--color--gray0);
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 2.4rem;
  height: 2.4rem;
`;
