import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";
import styled from "styled-components";

export const AddLinkBar = styled.div`
  background-color: var(--linkbrary-zircon);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 3.2rem 9rem 3.2rem;
  gap: 2rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    padding: 2.4rem 3.2rem 4rem 3.2rem;
  }
`;

export const AddLinkButton = styled.button`
  display: flex;
  width: 8rem;
  right: 2rem;
  height: 3.7rem;
  font-size: 1.4rem;

  padding: 1rem 1.55rem;

  border: 0;
  background: var(--button-bg-purpleblue-to-skyblue);
  color: var(--button-grey-light);
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  font-family: Pretendard;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-weight: 600;

  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    width: 8rem;
    height: 3.7rem;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    right: 1rem;
  }
`;

export const AddLinkForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 80rem;
  & img {
    position: absolute;
    left: 2rem;
    bottom: 50%;
    transform: translateY(50%);
    cursor: pointer;
    ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
      left: 1rem;
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const AddLinkInput = styled.input`
  width: 100%;
  height: 6.9rem;
  padding: 1.6rem 10.5rem 1.6rem 4.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color);
  outline: var(--linkbrary-primary-color);
  background: var(--linkbrary-white);
  border-radius: 0.8rem;
  font-size: 1.6rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    height: 5.3rem;
    font-size: 1.4rem;
    padding: 0.8rem 9.5rem 0.8rem 3.4rem;
  }
`;
