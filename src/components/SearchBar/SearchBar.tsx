import * as S from './SearchBar.style';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { IconClose, IconSearch } from '@/public/svgs';

function SearchBar() {
  const router = useRouter();
  const initialKeyword = Array.isArray(router.query.keyword)
    ? router.query.keyword[0]
    : router.query.keyword;
  const initialQuery = router.query;
  const [keyword, setKeyword] = useState(initialKeyword ?? '');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const onSearch = (e: SyntheticEvent) => {
    e.preventDefault();

    router.push({
      pathname: router.pathname,
      query: { ...initialQuery, keyword },
    });
  };

  const onReset = () => {
    setKeyword('');
    router.push({
      pathname: router.pathname,
      query: { ...initialQuery, keyword: '' },
    });
  };

  return (
    <S.Form onSubmit={onSearch}>
      <S.Input
        placeholder='링크를 검색해보세요.'
        onChange={onChange}
        value={keyword}
      />
      <S.Icon>
        <IconSearch />
      </S.Icon>
      {keyword && (
        <S.Reset type='button' onClick={onReset}>
          <IconClose />
        </S.Reset>
      )}
    </S.Form>
  );
}

export default SearchBar;
