import { useState, useRef } from "react";
import * as S from "./SelectMenu.style";


function SelectMenu() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClickMenu = () => {
    setIsOpened(!isOpened);
  }


  return (
    <S.SelectMenuContainer>
      <S.SelectDelete>삭제하기</S.SelectDelete>
      <S.SelectAddFolder>폴더에 추가</S.SelectAddFolder>
    </S.SelectMenuContainer>
  );
}
export default SelectMenu;
