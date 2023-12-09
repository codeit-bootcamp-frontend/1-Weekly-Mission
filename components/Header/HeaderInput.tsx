import { Float, Form, Input, InputButton, InputImg, InputWrapper } from "@/components/Header/HeaderInput.styled";
import { PATHS } from "@/constants/path";
import useData from "@/hooks/useData";
import useModal from "@/hooks/useModal";
import { SetRefForObserver } from "@/hooks/useObserver";
import { ChangeEvent, FormEvent, memo, useState } from "react";

interface Props {
  id: number;
  setRefForObserver: SetRefForObserver;
}

export default memo(function HeaderSearch({ id, setRefForObserver }: Props) {
  const folder = useData(PATHS.FOLDER_CATEGORY, id);
  const { modal, dispatch } = useModal();
  const [value, setValue] = useState("");

  const handleModal = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ title: value, type: "추가하기", data: folder.data });
  };

  const handleChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setValue(input.value);
  };

  return (
    <>
      <Form ref={setRefForObserver} onSubmit={handleModal}>
        <Input ref={setRefForObserver} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
        <InputWrapper>
          <InputImg src="/link.svg" />
          <InputButton>추가하기</InputButton>
        </InputWrapper>
        <Float ref={setRefForObserver}>
          <Input ref={setRefForObserver} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
          <InputWrapper>
            <InputImg src="/link.svg" />
            <InputButton>추가하기</InputButton>
          </InputWrapper>
        </Float>
      </Form>
      {modal}
    </>
  );
});
