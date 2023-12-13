import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface errProps {
  $err: string;
}

interface overlapProps {
  $isOverlap: boolean | undefined;
}

export const HeaderMsg = styled.p`
  display: flex;
  column-gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
`;

export const HeaderLink = styled.span`
  height: fit-content;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  color: var(--primary);
  border-bottom: 0.1rem solid var(--primary);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  width: 100%;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;

export const InputTagContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 5px;
`;

export const InputTag = styled.input<errProps>`
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray20);
  font-size: 1.6rem;
  line-height: 150%;
  flex-grow: 1;

  &:focus {
    border: 1px solid var(--primary);
  }

  &::placeholder {
    font-size: 1.4rem;
  }

  ${({ $err }) =>
    $err &&
    `
    border: 1px solid var(--red);
  `}
`;

export const InputTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CheckOverlapBtn = styled.div<overlapProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 5.4rem;
  background-color: ${({ $isOverlap }) =>
    $isOverlap ? `var(--white)` : `var(--gray20)`};
  border-radius: 0.8rem;
  color: var(--text-gray);
  font-size: 1.2rem;
  font-weight: 600;
  cursor: ${({ $isOverlap }) => ($isOverlap ? `pointer` : "unset")};
`;

export const EyesOff = styled(Image)`
  position: absolute;
  top: 44px;
  left: 90%;
  cursor: pointer;
`;

export const EyesOn = styled(Image)`
  position: absolute;
  top: 44px;
  left: 90%;
  cursor: pointer;
`;

export const ErrMsg = styled.span`
  width: 100%;
  margin-top: -0.4rem;
  margin-left: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--red);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.4rem;
  background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const SnsText = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray100);
`;

export const SnsLinks = styled.div`
  display: flex;
  column-gap: 1.6rem;
`;

export const SnsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
`;
