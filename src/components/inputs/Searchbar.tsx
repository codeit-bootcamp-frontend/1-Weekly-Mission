import { ChangeEvent } from "react";
import * as S from "./SearchbarStyle";

interface SearchbarProps {
  handleOnChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({ handleOnChangeInput }: SearchbarProps) {
  return (
    <S.Search>
      <S.Icon />
      <S.Input onChange={handleOnChangeInput} type="text" placeholder="링크를 검색해 보세요." />
      <S.Close />
    </S.Search>
  );
}
