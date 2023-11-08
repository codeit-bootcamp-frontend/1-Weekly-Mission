import { useState } from 'react';
import linkIcon from "images/link.svg";
import * as S from './AddLinkForm.style'

function AddLinkForm() {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <S.FormContainer>
      <S.Form>
        <S.Input value={value} onChange={handleValueChange} placeholder="링크를 추가해 보세요" />
        <S.Img src={linkIcon} alt="링크 아이콘" />
        <S.Button>추가하기</S.Button>
      </S.Form>
    </S.FormContainer>
  );
}

export default AddLinkForm;