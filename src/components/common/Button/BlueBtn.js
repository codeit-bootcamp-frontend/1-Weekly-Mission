import styled from 'styled-components';

function BlueBtn({ type, children }) {
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

  /* Mobile */
  @media (max-width: 767px) {
    top: 8px;
    right: 10px;
  }
`;
const LoginBtn = styled(BlueGrd)`
  padding: 16px 20px;
  width: 128px;
  font-size: 1.8rem;

  /* Tablet */
  @media (max-width: 1199px) {
    padding: 16px 20px;
    font-size: 1.8rem;
  }

  /* Mobile */
  @media (max-width: 767px) {
    padding: 10px 16px;
    font-size: 1.4rem;
    width: 80px;
  }
`;
const ModalBtn = styled(BlueGrd)`
  width: 280px;
  padding: 16px 20px;
  margin-top: 24px;
  font-size: 1.6rem;
  &:hover {
    cursor: pointer;
  }
`;
