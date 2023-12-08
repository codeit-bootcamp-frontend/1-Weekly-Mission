import { useEffect, useState } from 'react';
import { Search, CardContainer, FolderArticle } from '@/components';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/display';
import { Link } from '@/pages/shared';
import { Folders } from '@/components/FolderArticle/FolderArticle';
import * as S from './Article.style';

interface Data {
  links: Link[];
  folders?: Folders;
}

export default function Article({ links: initial, folders }: Data) {
  const [checkItem, setCheckItem] = useState<Link[]>(initial);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleSearch = (value: string) => {
    2;
    setValue(value);
  };

  useEffect(() => {
    if (checkItem) setIsVisible(checkItem.length !== 0);
  }, [checkItem]);

  return (
    <ThemeProvider theme={theme}>
      <S.ArticleContainer>
        <S.ArticleSection>
          <Search
            links={initial}
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
