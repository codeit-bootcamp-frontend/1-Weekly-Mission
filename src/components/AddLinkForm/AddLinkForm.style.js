import styled from "styled-components";
import { onMobile, onTablet } from "styles/mediaQuery";

export const AddLinkFormContainer = styled.div`
  padding: 6rem 32rem 9rem 32rem;
  background-color: #edf7ff;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${onTablet} {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }

  ${onMobile} {
    padding-top: 2.4rem;
    padding-bottom: 4.0rem;
  }

  form {
    position: relative;
    margin-left: -2rem;
    padding-left: 2rem;

    input {
      width: 80rem;
      display: flex;
      padding: 2.25rem 12rem 2.25rem 6rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
      border-radius: 1.5rem;
      border: 0.1rem solid var(--primary);
      background: var(--white);
      font-size: 1.6rem;
      line-height: 150%;

      ${onTablet} {
        width: 70rem;
      }

      ${onMobile} {
        width: 32.5rem;
      }
    }

    img {
      position: absolute;
      width: 2rem;
      height: 2rem;
      top: 2.45rem;
      left: 4rem;
    }

    button {
      color: #f5f5f5;
      display: flex;
      width: 8rem;
      padding: 1rem 1.6rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      border-radius: 0.8rem;
      background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
      position: absolute;
      top: 1.6rem;
      right: 2rem;
    }
  }
`;
