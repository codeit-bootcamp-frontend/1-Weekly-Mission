import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { ModalMainContainer } from "./ModalStyledComponents";
import { modalState } from "../../recoil/modal";
import CloseIcon from "@/public/assets/modal/img_closeIcon.png";
import { useState } from "react";
import Image from "next/image";
import DefaultBtn, { ButtonContainer } from "../button/Button";
import Input, { InputContainer } from "../input/Input";

interface StateObj {
  [index: string]: {
    title: string;
    button: string;
  };
}

const StateObj: StateObj = {
  folderEdit: {
    title: "폴더 이름 변경",
    button: "변경하기",
  },
  folderAdd: {
    title: "폴더 추가",
    button: "추가하기",
  },
  folderDelete: {
    title: "폴더 삭제",
    button: "삭제하기",
  },
  linkDelete: {
    title: "링크 삭제",
    button: "삭제하기",
  },
};

const DefaultModal = () => {
  const { defaultModal } = useRecoilValue(modalState);
  const resetModalState = useResetRecoilState(modalState);
  const type = StateObj[defaultModal.state];
  const isDelete = StateObj[defaultModal.state].button === "삭제하기";
  const [content, setContent] = useState(defaultModal.content.title);

  return (
    <ModalMain $isDelete={isDelete}>
      <Image
        src={CloseIcon}
        className="closeIcon"
        alt="closeIcon"
        onClick={resetModalState}
        width="24"
        height="24"
      />

      <div className="modalTitleContainer ">
        <div className="title">{type.title}</div>
        {isDelete && <div className="link">{defaultModal.content.title}</div>}
      </div>

      {!isDelete && (
        <div className="modalContentContainer">
          <Input
            placeholder={"내용 입력"}
            value={content}
            setValue={setContent}
          />
        </div>
      )}

      <DefaultBtn
        type={isDelete ? "secondary" : "primary"}
        onClick={resetModalState}
      >
        {type.button}
      </DefaultBtn>
    </ModalMain>
  );
};

export default DefaultModal;

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
