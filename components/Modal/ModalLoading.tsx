import ModalPortal from "@/lib/utils/Portal";
import { StyledGlobal } from "@/style/StyledGlobal";
import * as Styled from "./StyledModal";

interface Props {
  back: string;
}

const ModalLoading = ({ back }: Props) => {
  const scrollY = window.scrollY;

  return (
    <>
      <StyledGlobal />
      <ModalPortal>
        <Styled.ModalBackground $scrollY={scrollY} $back={back}>
          <Styled.Spinner />
        </Styled.ModalBackground>
      </ModalPortal>
    </>
  );
};

export default ModalLoading;
