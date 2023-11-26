import { useState, useEffect } from 'react';
import search from '../asset/search.svg';
import { getData } from '../api';
import SharedHeader from '../components/SharedHeader';
import Card from '../components/Card';
import * as S from '../components/styled-component/SharedPageStyledComponent';

export interface ItemState {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export default function SharedPage() {
  const [items, setItems] = useState<ItemState[]>();
  useEffect(() => {
    const handleLoad = async () => {
      const { folder } = await getData('sample/folder');
      setItems(folder.links);
    };
    handleLoad();
  }, []);
  return (
    <>
      <SharedHeader />
      <S.MainContainer>
        <S.MainSearch>
          <img src={search} alt="search" />
          <S.SearchInput placeholder="링크를 검색해 보세요."></S.SearchInput>
        </S.MainSearch>
        <S.MainContentWrapper>
          {items?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </S.MainContentWrapper>
      </S.MainContainer>
    </>
  );
}
