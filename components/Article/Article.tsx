import { useEffect, useState } from "react";
import { Search, CardContainer, FolderArticle} from "@/components";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/display";
import { Link } from "@/pages/shared";
import { Folders } from "@/components/FolderArticle/FolderArticle";
import * as S from "./Article.style";

interface Data {
  items: Link[];
  folders?: Folders;
}

export default function Article({ items, folders }: Data) {
  const [checkItem, setCheckItem] = useState<Link[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleSearch = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    setCheckItem(items);
  }, [items]);

  useEffect(() => {
    if(checkItem)
    setIsVisible(checkItem.length !== 0);
  }, [checkItem]);

  return (
    <ThemeProvider theme={theme}>
      <S.ArticleContainer>
        <S.ArticleSection>
          <Search
            items={items}
            setCheckItem={setCheckItem}
            onSearch={handleSearch}
            value={value}
          />
          {value && (
            <S.P>
              <span>{value}</span>으로 검색한 결과입니다.
            </S.P>
          )}
          {!folders && <CardContainer items={checkItem} />}
          {folders && (
            <FolderArticle
              isVisible={isVisible}
              items={checkItem}
              folders={folders}
            />
          )}
        </S.ArticleSection>
      </S.ArticleContainer>
    </ThemeProvider>
  );
}
