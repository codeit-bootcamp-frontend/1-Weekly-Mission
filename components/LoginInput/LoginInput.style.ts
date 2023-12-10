import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputBox = styled.div`
  position: relative;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid ${({ color }) => color ?? 'var(--gray-100)'};
  background: var(--white);

  .eyeImage {
    position: absolute;
    right: 15px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;
