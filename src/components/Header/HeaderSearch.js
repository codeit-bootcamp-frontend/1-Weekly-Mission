import { useRef, useState } from "react";
import inputImg from "../../assets/link.svg"
import S from "../styled"
import { makeModal } from "../../utils/modal";
import useData from "../../hooks/useReduce";

function HeaderSearch() {
  const [folderData] = useData("FOLDER_CATEGORY")
  const [modal, setModal] = useState(null);
  const [value, setValue] = useState(undefined);
  const input = useRef();

  const handleChange = (e) => {
    const newValue = input.current.value;
    setValue(newValue);
  }

  const handleModal = (e) => {
    e.preventDefault();
    const newModal = makeModal(value, "추가하기", setModal, folderData)
    setModal(newModal);
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