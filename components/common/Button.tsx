import { DEVICE_SIZE } from '@/lib/styles/DeviceSize';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  type?: 'add' | 'login' | 'modal' | 'delete' | 'linkAdd';
  children: ReactNode;
}

function Button({ type, children }: Props) {
  return (
    <>
      {typeof type === 'undefined' && <BlueGrd>{children}</BlueGrd>}
      {type === 'add' && <AddBtn>{children}</AddBtn>}
      {type === 'login' && <LoginBtn>{children}</LoginBtn>}
      {type === 'modal' && <ModalBtn>{children}</ModalBtn>}
      {type === 'delete' && <DeleteBtn>{children}</DeleteBtn>}
      {type === 'linkAdd' && <LinkAddBtn>{children}</LinkAddBtn>}
    </>
  );
}

export default Button;

const Default = styled.button`
  width: 100%;
  padding: 16px 20px;

  border: none;
  border-radius: 8px;

  color: var(--grey-light);
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const BlueGrd = styled(Default)`
  background: var(--gra-button);
`;

const AddBtn = styled(BlueGrd)`
  width: 81px;
  padding: 10px 16px;

  position: absolute;
  top: 16px;
  right: 20px;

  font-size: 1.4rem;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    top: 8px;
    right: 10px;
  }
`;
const LoginBtn = styled(BlueGrd)`
  width: 128px;
  font-size: 1.8rem;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 16px 20px;
    font-size: 1.8rem;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 80px;
    padding: 10px 16px;
    font-size: 1.4rem;
  }
`;
const ModalBtn = styled(BlueGrd)`
  width: 280px;
  margin-top: 15px;
  font-size: 1.6rem;
`;
const DeleteBtn = styled(Default)`
  width: 280px;
  margin-top: 14px;

  background-color: var(--red);

  color: white;
  font-size: 1.6rem;
`;
const LinkAddBtn = styled(BlueGrd)`
  width: 350px;
  font-size: 1.8rem;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 200px;
    padding: 10px 16px;

    font-size: 1.4rem;
  }
`;
