import * as S from './SearchBar.style';
import { ChangeEvent, SyntheticEvent } from 'react';
import SEARCH_ICON from '@assets/icons/search.svg';
import CLOSE from '@assets/icons/close.svg';

interface Props {
  value: string;
  onSearch: (e: SyntheticEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

function SearchBar({ value, onSearch, onChange, onReset }: Props) {
  return (
    <S.Form onSubmit={onSearch}>
      <S.Input
        placeholder='링크를 검색해보세요.'
        onChange={onChange}
        value={value}
      />
      <S.Icon src={SEARCH_ICON} alt='검색 아이콘' />
      {value && (
        <S.Reset type='button' onClick={onReset}>
          <img src={CLOSE} />
        </S.Reset>
      )}
    </S.Form>
  );
}

export default SearchBar;
