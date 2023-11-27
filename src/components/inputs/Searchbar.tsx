import { ChangeEvent } from "react";
import * as S from "./SearchbarStyle";

interface SearchbarProps {
  keyword: string;
  handleOnChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDelete: () => void;
}

export default function Searchbar(props: SearchbarProps) {
  return (
    <S.Search>
      <S.Icon />
      <S.Input
        value={props.keyword}
        onChange={props.handleOnChangeInput}
        type="text"
        placeholder="링크를 검색해 보세요."
      />
      {props.keyword && <S.Close onClick={props.handleDelete} />}
    </S.Search>
  );
}
