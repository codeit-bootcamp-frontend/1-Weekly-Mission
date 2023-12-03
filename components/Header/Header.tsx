import { useContext, useRef } from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/display";
import { footerContext } from "@/pages/_app";
import { Items } from "@/pages/shared";
import useIntersectionObserver from "@/public/useIntersectionObserver";
import linkClickImg from "@/src/assets/link.svg";
import Image from 'next/image';
import * as S from "./Header.style";

interface Props {
  items ?: Items;
}

export default function Header({ items } : Props) {
  const search = useRef<HTMLDivElement>(null);
  const footer = useContext(footerContext);
  const isIntersecting = useIntersectionObserver([search, footer]);


  return (
    <ThemeProvider theme={theme}>
      {items && (
        <S.ContainerProfilePage>
          <S.Profile>
            <Image src={items.owner.profileImageSource} alt="profile" width={60} height={60}></Image>
            <span>{items.owner.name}</span>
          </S.Profile>
          <p>{items.name}</p>
        </S.ContainerProfilePage>
      )}

      {!items && (
        <S.ContainerFolderPage ref={search} >
          <S.LinkSearchBox>
            <S.LinkBox>
              <S.LinkInputBox>
                <Image src={linkClickImg} alt="링크아이콘" width={20} height={20}></Image>
                <input type="text" placeholder="링크를 추가해 보세요"></input>
              </S.LinkInputBox>
              <button>추가하기</button>
            </S.LinkBox>
          </S.LinkSearchBox>
        </S.ContainerFolderPage>
      )}
      {(!items && isIntersecting) && (
        <S.ContainerFolderPage $isintersecting={isIntersecting}>
          <S.LinkSearchBox>
            <S.LinkBox>
              <S.LinkInputBox>
                <Image src={linkClickImg} alt="링크아이콘" width={20} height={20}></Image>
                <input type="text" placeholder="링크를 추가해 보세요"></input>
              </S.LinkInputBox>
              <button>추가하기</button>
            </S.LinkBox>
          </S.LinkSearchBox>
        </S.ContainerFolderPage>
      )}
    </ThemeProvider>
  );
}
