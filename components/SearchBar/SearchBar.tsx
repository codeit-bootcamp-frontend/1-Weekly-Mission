import Image from 'next/image';
import * as S from './SearchBar.style';
import Search from '@/public/Search.svg';

const SearchBar = () => {
  return (
    <S.Container>
      <Image src={Search} alt='Search' />
      <S.Input placeholder='링크를 검색해 보세요.' />
    </S.Container>
  );
};

export default SearchBar;
