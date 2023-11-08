import styled from "styled-components";
import CloseTabBtn from "../components/StyledButtons/CloseTabBtn";
import ReactModal from "react-modal";

const ReactModalContainer = styled(ReactModal)`
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
  width: min-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function ModalContainer({ onClick, isOpen, children }) {
  return (
    <ReactModalContainer isOpen={isOpen}>
      <CloseTabBtn onClick={onClick} />
      {children}
    </ReactModalContainer>
  );
}

export default ModalContainer;
