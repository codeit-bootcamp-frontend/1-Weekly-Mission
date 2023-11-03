import { MenuTitleButton } from "./MenuTitleButton.js";
import * as S from "./Title.style.js";

export function MenuTitle({ title }) {
  return (
    <S.Container>
      <span>{title}</span>
      {title !== "전체" && <MenuTitleButton />}
    </S.Container>
  );
}
