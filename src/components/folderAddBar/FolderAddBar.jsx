import { useState } from "react";
import * as S from "./FolderAddBar.style";
import linkIcon from "../../images/link.png";
import SelectModal from "../modal/SelectModal";

const FolderAddBar = ({ setModalComponent, folders }) => {
  const [addLinkValue, setAddLinkValue] = useState("");
  const handleInputChange = (e) => setAddLinkValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("추가:", addLinkValue);
    setModalComponent(
      <SelectModal modalTitle="폴더에 추가" modalTarget={addLinkValue} buttonText="추가하기" folders={folders} />
    );

    setAddLinkValue("");
  };

  return (
    <S.AddLinkBar>
      <S.AddLinkForm onSubmit={handleSubmit}>
        <img src={linkIcon} alt="링크 아이콘" />
        <S.AddLinkInput placeholder="링크를 추가해 보세요" onChange={handleInputChange} value={addLinkValue} />
        <S.AddLinkButton>추가하기</S.AddLinkButton>
      </S.AddLinkForm>
    </S.AddLinkBar>
  );
};

export default FolderAddBar;
