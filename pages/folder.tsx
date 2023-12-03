import AddLinkBar from "@/components/AddLinkBar";
import FolderMenu from "@/components/FolderMenu/FolderMenu";
import NavBar from "@/components/NavBar/NavBar";
import SearchBar from "@/components/SearchBar/SearchBar";
import CardList from "@/components/CardList/CardList";
import * as S from "@/styles/Folder.styled";

export default function FolderPage() {

  return (
    <>
      <NavBar />
      <S.Section>
        <AddLinkBar />
      </S.Section>
      <S.Main>
        <S.Container>
          <SearchBar />
          <FolderMenu />
          <CardList />
        </S.Container>
      </S.Main>
      <footer></footer>
    </>
  );
}
