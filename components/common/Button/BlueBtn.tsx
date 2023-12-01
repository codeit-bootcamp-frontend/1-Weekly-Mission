import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  type: 'linkAdd' | 'login' | 'modal';
  children: ReactNode;
}

function BlueBtn({ type, children }: Props) {
  return (
    <>
      {type === 'linkAdd' && <LinkAddBtn>{children}</LinkAddBtn>}
      {type === 'login' && <LoginBtn>{children}</LoginBtn>}
      {type === 'modal' && <ModalBtn>{children}</ModalBtn>}
    </>
  );
}

export default BlueBtn;

const BlueGrd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: var(--gra-button);

  color: var(--grey-light);
  font-weight: 600;
  text-decoration: none;
`;
const LinkAddBtn = styled(BlueGrd)`
  position: absolute;
  top: 16px;
  right: 20px;
  padding: 10px 16px;
  width: 81px;
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    top: 8px;
    right: 10px;
  }
`;
const LoginBtn = styled(BlueGrd)`
  padding: 16px 20px;
  width: 128px;
  font-size: 1.8rem;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 16px 20px;
    font-size: 1.8rem;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 10px 16px;
    font-size: 1.4rem;
    width: 80px;
  }
`;
const ModalBtn = styled(BlueGrd)`
  width: 280px;
  padding: 16px 20px;
  margin-top: 15px;
  font-size: 1.6rem;
  &:hover {
    cursor: pointer;
  }
`;
