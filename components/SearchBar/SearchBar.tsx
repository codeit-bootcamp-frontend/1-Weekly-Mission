import * as S from "./SearchBar.styled";
import Image from "next/image";
import searchIcon from "@/src/assets/images/searchIcon.svg";

export default function SearchBar() {
  return (
    <S.SearchLinkContainer>
      <Image src={searchIcon} alt="제목 검색하기" width={16} height={16} />
      <S.SearchLinkInput placeholder="링크를 검색해 보세요" />
    </S.SearchLinkContainer>
  );
}
