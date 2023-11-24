import { useRef, useState } from "react";
import useData from "src/hooks/useReduce";
import useModal from "src/hooks/useModal";
import inputImg from "src/assets/link.svg";
import { Form, Input, InputButton, InputImg, InputWrapper } from "src/components/Header/HeaderSearch.styled";
import { URLS } from "src/utils/getData.type";

interface Props {
  isUser: boolean;
}

function HeaderSearch({ isUser }: Props) {
  const folder = useData(URLS.FOLDER_CATEGORY);
  const { modal, dispatch } = useModal();
  const [value, setValue] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const newValue = input.current!.value;
    setValue(newValue);
  };

  const handleModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (folder?.path === URLS.FOLDER_CATEGORY) {
      isUser && dispatch({ title: value, type: "추가하기", data: folder.data });
    }
  };

  return (
    <>
      <Form onSubmit={handleModal}>
        <Input ref={input} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
        <InputWrapper>
          <InputImg src={inputImg} />
          <InputButton>추가하기</InputButton>
        </InputWrapper>
      </Form>
      {modal}
    </>
  );
}

export default HeaderSearch;
