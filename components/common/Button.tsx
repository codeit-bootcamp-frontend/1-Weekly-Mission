import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  type: 'add' | 'login' | 'modal' | 'delete' | 'linkAdd';
  children: ReactNode;
}

function Button({ type, children }: Props) {
  return (
    <>
      {type === 'add' && <AddBtn>{children}</AddBtn>}
      {type === 'login' && <LoginBtn>{children}</LoginBtn>}
      {type === 'modal' && <ModalBtn>{children}</ModalBtn>}
      {type === 'delete' && <DeleteBtn>{children}</DeleteBtn>}
      {type === 'linkAdd' && <LinkAddBtn>{children}</LinkAddBtn>}
    </>
  );
}

export default Button;

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

  &:hover {
    cursor: pointer;
  }
`;
const AddBtn = styled(BlueGrd)`
  position: absolute;
  top: 16px;
  right: 20px;
  padding: 10px 16px;
  width: 81px;
  font-size: 1.4rem;

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
`;
const DeleteBtn = styled.button`
  width: 280px;
  padding: 16px 20px;
  margin-top: 24px;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: var(--red);
  border-radius: 8px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const LinkAddBtn = styled(BlueGrd)`
  width: 350px;
  padding: 16px 20px;

  font-size: 18px;
  color: var(--grey-light);
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 200px;
    padding: 10px 16px;

    font-size: 14px;
  }
`;
