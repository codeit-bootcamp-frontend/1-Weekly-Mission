import ModalPortal from "Portal";
import { StyledGlobal } from "style/StyledGlobal";
import * as Styled from "./StyledModal";

interface Props {
  back: string;
}

const ModalLoading = ({ back }: Props) => {
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
