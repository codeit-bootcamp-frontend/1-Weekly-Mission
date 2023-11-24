import ModalPortal from "Portal";
import { StyledGlobal } from "style/StyledGlobal";
import * as Styled from "./StyledModal";

const ModalLoading = ({ back }) => {
  return (
    <>
      <StyledGlobal />
      <ModalPortal>
        <Styled.ModalBackground $back={back}>
          <Styled.Spinner />
        </Styled.ModalBackground>
      </ModalPortal>
    </>
  );
};

export default ModalLoading;
