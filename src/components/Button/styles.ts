import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CTAProps {
  readonly $size: string;
  readonly $buttoncolor: string;
}

interface CTALinkProps {
  readonly $size: string;
}

const CTA = styled.button<CTAProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background: ${({ $buttoncolor }) =>
    $buttoncolor === 'red'
      ? 'var(--linkbrary-red)'
      : 'var(--linkbrary-button-gradient)'};
  border-radius: 0.8rem;
  color: var(--linkbrary-button-text);
  font-size: 1.8rem;
  font-weight: 600;

  width: ${({ $size }) => ($size === 'short' ? '12.8rem' : '28rem')};
  border: none;
  transition: ease-in-out 0.1s;

  &:hover {
    transform: scale(1.01);
    transition: ease-in-out 0.1s;
  }

  @media screen and (max-width: 767px) {
    height: 3.7rem;
    font-size: 1.4rem;

    width: ${({ $size }) => ($size === 'short' ? '8rem' : '20rem')};
    padding: ${({ $size }) =>
      $size === 'short' ? '1.2rem 1rem' : 'auto auto'};
    gap: ${({ $size }) => ($size === 'short' ? '1rem' : '0rem')};
  }
`;

const CTALink = styled(Link)<CTALinkProps>`
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
  width: ${({ $size }) => ($size === 'short' ? '12.8rem' : '35rem')};

  @media screen and (max-width: 767px) {
    height: 3.7rem;
    font-size: 1.15rem;

    width: ${({ $size }) => ($size === 'short' ? '8rem' : '20rem')};
    padding: ${({ $size }) =>
      $size === 'short' ? '1.6rem 2rem' : 'auto auto'};
    gap: ${({ $size }) => ($size === 'short' ? '1rem' : '0rem')};
  }
`;

export { CTA, CTALink };
