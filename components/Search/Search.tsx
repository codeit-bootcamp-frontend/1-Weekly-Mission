import { useCallback, ChangeEvent} from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/display";
import searchImg from "@/src/assets/Search.svg";
import closeImg from "@/src/assets/_close.png";
import { Link } from "@/pages/shared";
import Image from 'next/image';
import * as S from "./Search.style";

interface Props {
  items: Link[];
  setCheckItem: (value:Link[]) => void;
  onSearch: (value:string) => void;
  value: string;
}

export default function Search({ items, setCheckItem, onSearch, value } : Props) {
  const handleInputChange = useCallback(
    (e : ChangeEvent<HTMLInputElement>) => {
      const lowerValue = (e.target.value).toLowerCase();
      onSearch(lowerValue);
      if (value) {
        const checkItems = items.filter((item) => {
          const { description, title, url } = item;
          return (
            description.includes(value) ||
            title.includes(value) ||
            url.includes(value)
          );
        });
        setCheckItem(checkItems);
      } else setCheckItem(items);
    },
    [items, value]
  );

  const handleCloseClick = () => {
    onSearch("");
    setCheckItem(items);
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Image src={searchImg} alt="검색아이콘"  width={16} height={16}/>
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
      </S.Container>
    </ThemeProvider>
  );
}
