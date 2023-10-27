import * as style from "./SearchbarStyle";
import searchIcon from "assets/Search.svg";

export default function Searchbar() {
  return (
    <style.Search>
      <style.Icon src={searchIcon} alt="search" />
      <style.Input type="text" placeholder="링크를 검색해 보세요." />
    </style.Search>
  );
}
