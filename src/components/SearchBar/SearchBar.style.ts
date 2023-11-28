import styled from 'styled-components';
import { COLORS } from 'styles/color';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 4rem;
`;

export const Form = styled.form`
  position: relative;

  margin-left: -1.6rem;
  padding-left: 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.5rem 5.6rem 1.5rem 4.8rem;
  border: none;
  border-radius: 1rem;

  background: #f5f5f5;

  font-size: 1.6rem;
  line-height: 150%;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 1.9rem;
  left: 3.2rem;

  width: 1.6rem;
  height: 1.6rem;
`;

export const DeleteIcon = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 1.6rem;

  cursor: pointer;
`;

export const Text = styled.div`
  color: ${COLORS.GRAY_60};
  font-weight: 600;
  font-size: 3.2rem;
  letter-spacing: -0.02rem;

  span {
    color: ${COLORS.GRAY_100};
  }
`;
