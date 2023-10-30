import { createGlobalStyle } from "styled-components";

const StyledGnb = createGlobalStyle`
  header {
    position: ${({ isFixed }) => isFixed ?? `sticky`};
    top: 0; 
    left: 0;
    width: 100%;
    height: 5.8125rem;
    background-color: var(--linkbrary-bg);
    z-index: 9999;
  }

  .headerContainer {
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
  }

  .profile {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.3rem;
  }

  .profile > span {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default StyledGnb;
