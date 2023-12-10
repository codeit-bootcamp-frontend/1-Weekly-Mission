import * as S from "@/components/folderSearchBar/FolderSearchBar.style";
import searchIcon from "@/images/Search.png";
import { ChangeEvent, FormEvent } from "react";

interface FolderSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const FolderSearchBar = ({ searchQuery, setSearchQuery }: FolderSearchBarProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.SearchBar>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchImageInput type="image" src={searchIcon.src} alt="검색" />
        <S.SearchInput
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="링크를 검색해 보세요."
        />
        {searchQuery && (
          <S.CloseButton type="button">
            <S.CloseIcon onClick={() => setSearchQuery("")} />
          </S.CloseButton>
        )}
      </S.SearchForm>
    </S.SearchBar>
  );
};

export default FolderSearchBar;
