import { RESPONSIBLE_MEDIA_QUERIES } from "@/constants/mediaQueries";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 35rem;
  height: 5.4rem;
  padding: 1.6rem 2rem;
  border: 0;
  background: var(--button-bg-purpleblue-to-skyblue);
  color: var(--button-grey-light);
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  font-family: Pretendard;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.8rem;

  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    width: 20rem;
    height: 3.7rem;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
  }
`;

export const LargeButton = styled(Button)`
  width: 21.875rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    width: 12.5rem;
  }
`;
