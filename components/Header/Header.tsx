import { ThemeProvider } from 'styled-components';
import theme from '@/styles/display';
import { Items } from '@/pages/shared';
import linkClickImg from '@/src/assets/link.svg';
import Image from 'next/image';
import * as Style from './Header.style';
import { useState, useEffect, useContext } from 'react';
import useIntersectionObserver from '@/public/useIntersectionObserver';
import { FooterContext } from '@/pages/folder';

interface Props {
  items?: Items;
}

export default function Header({items}: Props) {
  const { isFooterVisible } = useContext(FooterContext);
  const {ref, isIntersecting} = useIntersectionObserver();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  
  useEffect(() => {
    setIsHeaderVisible(isIntersecting);
  }, [isIntersecting]);

  return (
    <ThemeProvider theme={theme}>
      {items && (
        <Style.ContainerProfilePage>
          <Style.Profile>
            <Image
              src={items.owner?.profileImageSource}
              alt="profile"
              width={60}
              height={60}
            ></Image>
            <span>{items.owner?.name}</span>
          </Style.Profile>
          <p>{items.name}</p>
        </Style.ContainerProfilePage>
      )}

      {!items && (
        <Style.ContainerFolderPage ref={ref}>
          <Style.LinkSearchBox>
            <Style.LinkBox>
              <Style.LinkInputBox>
                <Image
                  src={linkClickImg}
                  alt="링크아이콘"
                  width={20}
                  height={20}
                ></Image>
                <input type="text" placeholder="링크를 추가해 보세요"></input>
              </Style.LinkInputBox>
              <button>추가하기</button>
            </Style.LinkBox>
          </Style.LinkSearchBox>
        </Style.ContainerFolderPage>
      )}
      {(!isHeaderVisible && !isFooterVisible) && (
        <Style.ContainerFolderPage $isintersecting={(!isHeaderVisible && !isFooterVisible)}>
          <Style.LinkSearchBox>
            <Style.LinkBox>
              <Style.LinkInputBox>
                <Image
                  src={linkClickImg}
                  alt="링크아이콘"
                  width={20}
                  height={20}
                ></Image>
                <input type="text" placeholder="링크를 추가해 보세요"></input>
              </Style.LinkInputBox>
              <button>추가하기</button>
            </Style.LinkBox>
          </Style.LinkSearchBox>
        </Style.ContainerFolderPage>
      )}
    </ThemeProvider>
  );
}
