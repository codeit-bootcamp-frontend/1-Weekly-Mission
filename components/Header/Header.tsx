import { ThemeProvider } from 'styled-components';
import theme from '@/styles/display';
import { Items } from '@/pages/shared';
import linkClickImg from '@/src/assets/link.svg';
import Image from 'next/image';
import * as Style from './Header.style';
import { RefObject } from 'react';

interface Props {
  items?: Items;
  linkAddBarRef?: RefObject<HTMLDivElement>;
  isIntersecting?: boolean;
}

export default function Header({
  items,
  linkAddBarRef,
  isIntersecting,
}: Props) {
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
        <Style.ContainerFolderPage >
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
      {/* {!items && !isIntersecting && (
        <Style.ContainerFolderPage $isintersecting={isIntersecting}>
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
      )} */}
    </ThemeProvider>
  );
}
