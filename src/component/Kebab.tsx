import { useState, MouseEvent } from "react";
import PopOver from "./PopOver";
import kebabICON from "../assets/img/icon-kebab.svg";
import * as Styled from "../style/Kebab";

export default function Kebab() {
  /*--kebab--*/
  const [isKebab, setIsKebab] = useState(false);

  const handleKebabClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (isKebab) {
      setIsKebab(false);
    } else {
      setIsKebab(true);
    }
  };

  return (
    <Styled.Div>
      <button onClick={handleKebabClick}>
        <img src={kebabICON} alt="더보기" />
      </button>
      {isKebab && <PopOver />}
    </Styled.Div>
  );
}
