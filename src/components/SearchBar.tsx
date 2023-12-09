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
    <form
      onSubmit={onSearch}
      className='relative h-43pxr w-full tablet:h-54pxr'
    >
      <input
        placeholder='링크를 검색해보세요.'
        onChange={onChange}
        value={keyword}
        className='h-full w-full rounded-2xl border border-solid border-gray-light bg-gray-light p-15pxr pb-16pxr pl-50pxr text-14pxr font-normal leading-normal outline-none focus:border-primary active:border-primary tablet:text-16pxr'
      />
      <div className='absolute left-18pxr top-1/2 -translate-y-1/2'>
        <IconSearch />
      </div>
      {keyword && (
        <button
          type='button'
          onClick={onReset}
          className='absolute right-16pxr top-1/2 -translate-y-1/2 bg-transparent'
        >
          <IconClose />
        </button>
      )}
    </form>
  );
}

export default SearchBar;
