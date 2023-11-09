import { ThemeProvider } from "styled-components";
import theme from "../../css/display";
import linkClickImg from "../../assets/link.svg";
import * as S from "./Header.style.js";

export function Header({ items }) {
  return (
    <ThemeProvider theme={theme}>
      {items && (
        <S.ContainerProfilePage>
          <S.Profile>
            <img src={items.owner.profileImageSource} alt="profile"></img>
            <span>{items.owner.name}</span>
          </S.Profile>
          <p>{items.name}</p>
        </S.ContainerProfilePage>
      )}

      {!items && (
        <S.ContainerFolderPage>
          <S.LinkSearchBox>
            <S.LinkBox>
              <S.LinkInputBox>
                <img src={linkClickImg} alt="링크아이콘"></img>
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
