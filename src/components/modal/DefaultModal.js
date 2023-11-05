import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  ModalMainContainer,
  OuterModalContainer,
  Overlay,
} from "./ModalStyledComponents";
import { modalState } from "../../recoil/modal";
import CloseIcon from "../../assets/modal/img_modalClose.svg";
import DefaultBtn, { DefaultBtnContainer } from "../btn/DefaultBtn";
import Input, { InputContainer } from "../input/Input";
import { useState } from "react";

const StateObj = {
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
  const [content, setContent] = useState(defaultModal.content);

  return (
    <Overlay>
      <OuterModalContainer onClick={resetModalState} />
      <ModalMain>
        <img
          src={CloseIcon}
          className="closeIcon"
          alt="closeIcon"
          onClick={resetModalState}
        />

        <div className="modalTitleContainer ">
          <div className="title">{type.title}</div>
          {isDelete && <div className="link">{defaultModal.content}</div>}
        </div>

        <div className="modalContentContainer">
          {!isDelete && (
            <Input
              placeholder={"내용 입력"}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          )}
        </div>

        <DefaultBtn
          type={isDelete ? "red" : "default"}
          onClick={resetModalState}
        >
          {type.button}
        </DefaultBtn>
      </ModalMain>
    </Overlay>
  );
};

export default DefaultModal;

const ModalMain = styled(ModalMainContainer)`
  ${InputContainer} {
    width: 100%;
    background: var(--white);
    border: 1px solid var(--gray20);
  }

  ${DefaultBtnContainer} {
    margin-top: -0.9rem;
  }
`;
