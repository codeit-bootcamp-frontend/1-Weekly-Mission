import { ChangeEvent } from "react";
import * as S from "./SearchbarStyle";
import searchIcon from "assets/Search.svg";

interface SearchbarProps {
  handleOnChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({ handleOnChangeInput }: SearchbarProps) {
  return (
    <S.Search>
      <S.Icon src={searchIcon} alt="search" />
      <S.Input onChange={handleOnChangeInput} type="text" placeholder="링크를 검색해 보세요." />
    </S.Search>
  );
}
