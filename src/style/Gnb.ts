import { styled } from "styled-components";

export const Header = styled.header<{ isFixed: boolean }>`
  position: ${({ isFixed }) => (isFixed ? `relative` : `sticky`)};
  top: 0;
  left: 0;
  width: 100%;
  height: 5.8125rem;
  background-color: var(--linkbrary-bg);
  z-index: 9999;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  height: 100%;
  padding: 20px 200px;
  margin: auto;

  @media (max-width: 1124px) {
    max-width: 50rem;
    padding: 20px 32px;
  }

  @media (max-width: 767px) {
    padding: 0.8125rem 2rem;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;
`;

export const Span = styled.span`
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
