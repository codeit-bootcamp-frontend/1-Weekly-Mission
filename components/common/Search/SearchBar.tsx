import styled from 'styled-components';
import Image from 'next/image';
import { useRef, FormEvent } from 'react';
import searchImg from '@/public/assets/images/search.svg';
import closeIcon from '@/public/assets/images/search_close.svg';

interface Props {
  search?: boolean;
  setSearch?: any;
  setKeyword?: any;
}

function SearchBar({ search, setSearch, setKeyword }: Props) {
  const input = useRef<HTMLInputElement>(null);

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
    setSearch(true);
    setKeyword(input.current?.value);
  }

  function handleSearchClose() {
    setSearch(false);
    setKeyword('');
    window.location.reload();
  }

  return (
    <Container onSubmit={handleSearchSubmit}>
      <Icon src={searchImg} alt="검색 돋보기 아이콘" width={16} height={16} />
      <Input ref={input} placeholder="링크를 검색해 보세요." />
      {search && <CloseIcon src={closeIcon} alt="검색 취소 아이콘" onClick={handleSearchClose} />}
    </Container>
  );
}

export default SearchBar;

const Container = styled.form`
  position: relative;
`;

const Icon = styled(Image)`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 17px;
  left: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: var(--grey-light);
  font-size: 1.6rem;

  &:focus {
    border: 1px solid var(--grey-70);
  }
`;

const CloseIcon = styled(Image)`
  width: 24px;

  position: absolute;
  top: 13px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`;
