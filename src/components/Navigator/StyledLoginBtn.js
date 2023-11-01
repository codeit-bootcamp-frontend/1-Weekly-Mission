import styled from "styled-components";

const SIZES = {
  short: 12.8,
  long: 15,
};

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LoginImgBg = styled.div`
  display: flex;
  justify-content: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 70%;
  overflow: hidden;
  cursor: pointer;
`;

export const LoginImg = styled.img`
  object-fit: cover;
`;

export const LoginEmail = styled.span`
  color: var(--linkbrary-gray-100, #373740);

  /* Linkbrary/body2-regular */
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const LoginBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;

  width: ${({ size }) => SIZES[size] ?? SIZES[`short`]};

  @media (max-width: 767px) {
    height: 3.7rem;
    font-size: 1.4rem;
    width: ${({ size }) => SIZES[size] ?? SIZES[`short`]};
  }
`;
