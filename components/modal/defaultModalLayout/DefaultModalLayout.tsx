import { useResetRecoilState } from "recoil";
import { modalState } from "../../../recoil/modal";
import CloseIcon from "@/public/assets/modal/img_closeIcon.png";
import { ReactNode } from "react";
import Image from "next/image";
import { ModalMain } from "./defaultModalLayoutStyled";

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
