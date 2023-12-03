import { useState } from "react";
import { Float, Form, Input, InputButton, InputImg, InputWrapper } from "@/components/Header/HeaderInput.styled";
import useData from "@/hooks/useData";
import useModal from "@/hooks/useModal";
import { Dom } from "@/hooks/useObserver";
import { URLS } from "@/utils/getData.type";

interface Props {
  id: number;
  dom: React.MutableRefObject<Dom>;
}

export default function HeaderSearch({ id, dom }: Props) {
  const folder = useData(URLS.FOLDER_CATEGORY, id);
  const { modal, dispatch } = useModal();
  const [value, setValue] = useState("");

  const handleModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (folder?.path === URLS.FOLDER_CATEGORY) {
      dispatch({ title: value, type: "추가하기", data: folder.data });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === dom.current.headerInput) {
      const input = dom.current.headerInput as HTMLInputElement;
      setValue(input.value);
    }
    if (e.target === dom.current.floatInput) {
      const input = dom.current.floatInput as HTMLInputElement;
      setValue(input.value);
    }
  };
  return (
    <>
      <Form ref={(el) => (dom.current.headerForm = el)} onSubmit={handleModal}>
        <Input ref={(el) => (dom.current.headerInput = el)} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
        <InputWrapper>
          <InputImg src="/link.svg" />
          <InputButton>추가하기</InputButton>
        </InputWrapper>
        <Float ref={(el) => (dom.current.floatDiv = el)}>
          <Input ref={(el) => (dom.current.floatInput = el)} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
          <InputWrapper>
            <InputImg src="/link.svg" />
            <InputButton>추가하기</InputButton>
          </InputWrapper>
        </Float>
      </Form>
      {modal}
    </>
  );
}
