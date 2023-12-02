import styled from "styled-components";
import { Wrapper } from "../common/commonStyled";
import { DefaultBtnContainer } from "../button/DefaultButton";

export const UserWrapper = styled(Wrapper)`
  background: var(--background);
  height: 100vh;
`;

export const UserHeaderContainer = styled.div`
  margin-top: 23.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    cursor: pointer;
  }

  .userContainer {
    display: flex;
    margin-top: 1.6rem;
    gap: 0.8rem;

    .userTitle {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 2.4rem;
    }

    .moveToPage {
      color: var(--primary);
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const UserContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const InputBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3rem auto 3.2rem;
  width: 40rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    ${DefaultBtnContainer} {
      width: 100%;
      margin-top: 0.6rem;
    }
  }
`;

export const SocialBoxContainer = styled.section`
  display: flex;
  box-sizing: border-box;
  padding: 1.2rem 2.4rem;
  width: 40rem;
  justify-content: space-between;
  border-radius: 0.8rem;
  border: 1px solid var(--gray20);
  background: var(--gray10);
  align-items: center;

  .boxTitle {
    color: var(--gray100);
    font-size: 1.4rem;
    font-weight: 400;
  }

  .iconContainer {
    display: flex;
    gap: 1.6rem;

    .socialIcon {
      width: 4.2rem;
      height: 4.2rem;
      cursor: pointer;
    }
  }
`;
