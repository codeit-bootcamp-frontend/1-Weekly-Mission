import {MenuTitleButton} from "@/components";
import * as S from "./Title.style.js";

export default function MenuTitle({ title } : {title:string}) {
  return (
    <S.Container>
      <span>{title}</span>
      {title !== "전체" && <MenuTitleButton title={title} />}
    </S.Container>
  );
}
