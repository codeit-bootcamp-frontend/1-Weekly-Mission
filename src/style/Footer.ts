import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  margin-top: 7.5rem;
  background-color: #000;

  @media (max-width: 767px) {
    margin-top: 2.5rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: auto;
  max-width: 1920px;
  margin: 0 auto;
  padding: 32px 104px 64px;

  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

export const Span = styled.span`
  color: #676767;
  font-family: Arial;
  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 767px) {
    position: absolute;
    top: 7.4rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1.88rem;
  width: 11.31944rem;
`;

export const Link = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1rem;
  font-weight: 400;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 0.75rem;
  width: 7.25rem;
  height: 1.25rem;
`;
