import {MenuTitleButton} from "component";
import * as S from "./Title.style.js";

export default function MenuTitle({ title }) {
  return (
    <S.Container>
      <span>{title}</span>
      {title !== "전체" && <MenuTitleButton title={title} />}
    </S.Container>
  );
}
