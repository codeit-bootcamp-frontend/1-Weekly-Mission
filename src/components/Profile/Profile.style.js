import styled from "styled-components";
import { onMobile } from "styles/mediaQuery";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 0.6rem;

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 99rem;
  }

  p {
    ${onMobile} {
      display: none;
    }
  }
`;
