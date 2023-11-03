import { useRef, useState } from "react";
import useData from "../../hooks/useReduce";
import useModal from "../../hooks/useModal";
import inputImg from "../../assets/link.svg"
import { S } from "./HeaderSearch.styled";

function HeaderSearch({ isUser }) {
  const [folderData] = useData("FOLDER_CATEGORY")
  const [modal, dispatch] = useModal(null);
  const [value, setValue] = useState(undefined);
  const input = useRef();

  const handleChange = () => {
    const newValue = input.current.value;
    setValue(newValue);
  }

  const handleModal = (e) => {
    e.preventDefault();
    isUser && dispatch({ title: value, type: "추가하기", data: folderData })
  }

  return (
    <>
      <S.HeaderSearch onSubmit={handleModal}>
        <S.Input ref={input} value={value} onChange={handleChange} placeholder="링크를 추가해보세요." />
        <S.InputWrapper>
          <S.InputImg src={inputImg} />
          <S.InputButton>추가하기</S.InputButton>
        </S.InputWrapper>
      </S.HeaderSearch>
      {modal}
    </>
  )
}

export default HeaderSearch