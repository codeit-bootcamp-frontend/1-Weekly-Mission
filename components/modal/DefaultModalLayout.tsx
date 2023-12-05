import styled from "styled-components";
import { useResetRecoilState } from "recoil";
import { ModalMainContainer } from "./ModalStyledComponents";
import { modalState } from "../../recoil/modal";
import CloseIcon from "@/public/assets/modal/img_closeIcon.png";
import { ReactNode } from "react";
import Image from "next/image";
import { ButtonContainer } from "../button/Button";
import { InputContainer } from "../input/Input";

interface DefaultModalProp {
  title: string;
  buttonItem: ReactNode;
  inputItem?: ReactNode;
  subTitle?: string;
}

const DefaultModalLayout = ({
  title,
  buttonItem,
  inputItem,
  subTitle,
}: DefaultModalProp) => {
  const resetModalState = useResetRecoilState(modalState);

  return (
    <ModalMain $isDelete={true}>
      <Image
        src={CloseIcon}
        className="closeIcon"
        alt="closeIcon"
        onClick={resetModalState}
        width="24"
        height="24"
      />

      <div className="modalTitleContainer ">
        <div className="title">{title}</div>
        <div className="link">{subTitle}</div>
      </div>

      {inputItem && <div className="modalContentContainer">{inputItem}</div>}

      {buttonItem}
    </ModalMain>
  );
};

export default DefaultModalLayout;

const ModalMain = styled(ModalMainContainer)<{ $isDelete: boolean }>`
  ${InputContainer} {
    width: 100%;
    background: var(--white);
    border: 1px solid var(--gray20);
  }

  ${ButtonContainer} {
    margin-top: ${(props) => (props.$isDelete ? "0" : "-0.8rem")};
  }

  ${InputContainer}:focus-within {
    border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  }
`;
