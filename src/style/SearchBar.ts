import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 0.62rem;
  width: 100%;
  max-width: 66.25rem;
  height: 3.375rem;
  padding: 0.94rem 1rem;
  margin: 2.5rem 0;
  border-radius: 0.625rem;
  background-color: var(--gray-light);
`;

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  background: transparent;
`;

export const TextDiv = styled.div`
  display: inline-block;
  width: 100%;
  justify-content: start;
  text-align: left;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0125rem;
  color: var(--linkbrary-gray-60);
`;

export const Span = styled(TextDiv)`
  display: inline;
  color: var(--linkbrary-gray-100);
`;
