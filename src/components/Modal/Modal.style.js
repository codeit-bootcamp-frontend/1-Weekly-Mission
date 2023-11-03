import styled from 'styled-components';
import { COLORS } from 'styles/palette';
import Button from 'components/Button';
import { zIndexStyle } from 'styles/zIndexStyle';

export const DimContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndexStyle.floating};
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
  padding: 3.2rem 4rem;
  width: 36rem;
  border: 1px solid ${COLORS['LB_GRAY_20']};
  border-radius: 1.5rem;
  background-color: #fff;
`;

export const Close = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${COLORS['LB_GRAY_100']};
  font-size: 2rem;
  font-weight: 700;
`;

export const Description = styled.p`
  text-align: center;
  color: ${COLORS['LB_GRAY_60']};
  font-size: 14px;
  font-weight: 400;
  line-height: 2.2rem;
`;

export const Input = styled.input`
  padding: 1.8rem 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid ${COLORS['LB_PRIMARY']};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  &:placeholder {
    color: ${COLORS['LB_GRAY_100']};
  }
`;

export const BigButton = styled(Button)`
  padding: 1.6rem 2rem;
  font-size: 1.6rem;
`;

export const DeleteButton = styled(Button)`
  padding: 1.6rem 2rem;
  font-size: 1.6rem;
  background: ${COLORS['LB_RED']};
`;
