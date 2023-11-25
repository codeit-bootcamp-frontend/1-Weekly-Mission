import { FormEvent, useRef, useState } from "react";
import inputImg from "src/assets/link.svg";
import { Float, Form, Input, InputButton, InputImg, InputWrapper } from "src/components/Header/HeaderInput.styled";
import useData from "src/hooks/useData";
import useModal from "src/hooks/useModal";
import useObserver, { Dom } from "src/hooks/useObserver";
import { URLS } from "src/utils/getData.type";

interface Props {
  id: number;
  isUser: boolean;
}

function HeaderSearch({ id, isUser }: Props) {
  const folder = useData(URLS.FOLDER_CATEGORY, id);
  const { modal, dispatch } = useModal();
  const DOM = useRef<Dom>({ headerForm: null, headerInput: null, floatDiv: null, floatInput: null });
  const [observer] = useObserver(DOM.current);
  const [value, setValue] = useState("");

  const handleModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (folder?.path === URLS.FOLDER_CATEGORY) {
      isUser && dispatch({ title: value, type: "추가하기", data: folder.data });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === DOM.current.headerInput) {
      const input = DOM.current.headerInput as HTMLInputElement;
      setValue(input.value);
    }
    if (e.target === DOM.current.floatInput) {
      const input = DOM.current.floatInput as HTMLInputElement;
      setValue(input.value);
    }
  };
  return (
    <>
      <Form ref={(el) => (DOM.current.headerForm = el)} onSubmit={handleModal}>
        <Input ref={(el) => (DOM.current.headerInput = el)} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
        <InputWrapper>
          <InputImg src={inputImg} />
          <InputButton>추가하기</InputButton>
        </InputWrapper>
        <Float ref={(el) => (DOM.current.floatDiv = el)}>
          <Input ref={(el) => (DOM.current.floatInput = el)} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
          <InputWrapper>
            <InputImg src={inputImg} />
            <InputButton>추가하기</InputButton>
          </InputWrapper>
        </Float>
      </Form>
      {modal}
    </>
  );
}

export default HeaderSearch;
