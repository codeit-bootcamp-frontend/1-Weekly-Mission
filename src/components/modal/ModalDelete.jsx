import styled from "styled-components";
const ModalDelete = styled.div`
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--stroke-light, #dee2e6);
  background: var(--gray-white, #fff);
  z-index: 9999;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default ModalDelete;
