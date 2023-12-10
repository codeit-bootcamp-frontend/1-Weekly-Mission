import { useEffect, useState } from 'react';
import { Search, CardContainer, FolderArticle } from '@/components';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/display';
import { Link } from '@/pages/shared';
import { Folders } from '@/components/FolderArticle/FolderArticle';
import * as Style from './Article.style';

interface Data {
  links: Link[];
  folders?: Folders;
}

export default function Article({ links: initial, folders }: Data) {
  const [checkItem, setCheckItem] = useState<Link[]>(initial);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleSearch = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    if (checkItem) {
      setIsVisible(checkItem.length !== 0);
    }
  }, [checkItem]);

  return (
    <ThemeProvider theme={theme}>
      <Style.ArticleContainer>
        <Style.ArticleSection>
          <Search
            links={initial}
            setCheckItem={setCheckItem}
            onSearch={handleSearch}
            value={value}
          />
          {value && (
            <Style.Paragraph>
              <Style.Keyword>{value}</Style.Keyword>으로 검색한 결과입니다.
            </Style.Paragraph>
          )}
          {!folders && <CardContainer items={checkItem} />}
          {folders && (
            <FolderArticle
              isVisible={isVisible}
              items={checkItem}
              folders={folders}
            />
          )}
        </Style.ArticleSection>
      </Style.ArticleContainer>
    </ThemeProvider>
  );
}
