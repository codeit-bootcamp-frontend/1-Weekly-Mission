import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;

  span {
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.02rem;
  }
`;

export const OptionContainer = styled.div`
  display: ${({ selected }) => (selected ? `none` : `flex`)};
  align-items: flex-start;
  gap: 1.2rem;
  flex-wrap: wrap;

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    span {
      font-size: 1.4rem;
      color: var(--gray60);
    }
  }
`;
