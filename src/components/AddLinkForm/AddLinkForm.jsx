import { useState } from 'react';
import linkIcon from "images/link.svg";
import * as S from './AddLinkForm.style'

function AddLinkForm() {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <S.AddLinkFormContainer>
      <form>
        <input value={value} onChange={handleValueChange} placeholder="링크를 추가해 보세요" />
        <img src={linkIcon} alt="링크 아이콘" />
        <button>추가하기</button>
      </form>
    </S.AddLinkFormContainer>
  );
}

export default AddLinkForm;