import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const LoginBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LoginImgBg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 2.7rem;
  height: 2.7rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 70%;
`;

export const LoginImg = styled(Image)`
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

export const LoginBtn = styled(Link)`
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
  width: 12.8rem;

  @media (max-width: 767px) {
    height: 3.7rem;
    font-size: 1.4rem;
    width: 8rem;
  }
`;

export const Ul = styled.ul`
  position: absolute;
  top: 35px;
  left: -30px;
  width: 100px;
  border: 1px solid var(--gray30);
  background-color: var(--white);
  list-style: none;
  padding-left: 0px;
`;

export const Button = styled.button`
  align-self: stretch;
  width: 100%;
  padding: 6px 16px;
  background-color: var(--white);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  color: var(--gray100);
  cursor: pointer;

  &:hover {
    background-color: var(--gray10);
    color: var(--primary);
  }
`;
