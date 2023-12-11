import { useState, useEffect } from 'react';
import { getData } from './api/api';
import SharedHeader from '../components/SharedHeader';
import Card from '../components/Card';
import * as S from '../style/styled-component/Shared/SharedPageStyledComponent';
import Image from 'next/image';
import styled from 'styled-components';

export interface SampleFolderData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export default function SharedPage() {
  const [items, setItems] = useState<SampleFolderData[]>();
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
          <Div>
            <Image src="/search.svg" fill alt="search" />
          </Div>
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

const Div = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;
