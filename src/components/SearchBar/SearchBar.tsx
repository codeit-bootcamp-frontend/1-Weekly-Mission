import * as S from './SearchBar.style';
import { ChangeEvent, SyntheticEvent } from 'react';
import searchIcon from '@assets/icons/search.svg';

interface Props {
  onSearch: (e: SyntheticEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function SearchBar({ onSearch, onChange, value }: Props) {
  return (
    <S.Form onSubmit={onSearch}>
      <S.Input
        placeholder='링크를 검색해보세요.'
        onChange={onChange}
        value={value}
      />
      <S.Icon src={searchIcon} alt='검색 아이콘' />
    </S.Form>
  );
}

export default SearchBar;
