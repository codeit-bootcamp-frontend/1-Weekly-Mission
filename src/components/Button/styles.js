import styled from "styled-components"
import { Link } from "react-router-dom"
const CTA = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background-image: var(--linkbrary-button-gradient);
  border-radius: 0.8rem;
  color: var(--linkbrary-button-text);
  font-size: 1.8rem;
  font-weight: 600;
  width: ${({ size }) => (size === "short" ? "12.8rem" : "35rem")};

  @media screen and (max-width: 767px) {
    height: 3.7rem;
    font-size: 1.15rem;

    width: ${({ size }) => (size === "short" ? "8rem" : "20rem")};
    padding: ${({ size }) => (size === "short" ? "1.6rem 2rem" : "auto auto")};
    gap: ${({ size }) => (size === "short" ? "1rem" : "0rem")};
  }
`

export { CTA }
