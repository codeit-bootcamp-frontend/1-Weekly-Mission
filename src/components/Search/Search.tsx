import { useEffect, ChangeEvent } from 'react';
import Image from 'next/image';
import searchImg from '@/src/assets/Search.svg';
import closeImg from '@/src/assets/_close.png';
import * as Style from './Search.style';

interface SearchProps {
  links: Link[];
  setCheckItem: (value: Link[]) => void;
  onSearch: (value: string) => void;
  value: string;
}

export default function Search({
  links,
  setCheckItem,
  onSearch,
  value,
}: SearchProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerValue = e.target.value.toLowerCase();
    onSearch(lowerValue);
  };
  useEffect(() => {
    if (value) {
      const checkItems = links.filter((link) => {
        const { description, title, url } = link;
        return (
          description?.includes(value) ||
          title?.includes(value) ||
          url?.includes(value)
        );
      });
      setCheckItem(checkItems);
    } else if (value.length === 0) {
      setCheckItem(links);
    }
  }, [value]);

  const handleCloseClick = () => {
    onSearch('');
    setCheckItem(links);
  };

  return (
    <Style.Container>
      <Image src={searchImg} alt="검색아이콘" width={16} height={16} />
      <input
        name="search"
        placeholder="링크를 검색해 보세요."
        autoComplete="off"
        value={value}
        onChange={handleInputChange}
      />
      <Image
        src={closeImg}
        alt="닫기버튼"
        onClick={handleCloseClick}
        width={24}
        height={24}
      />
    </Style.Container>
  );
}
