import * as S from '@/styles/Shared.styled';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';


export default function Shared() {
  return (
    <>
      <NavBar/>
      <S.Header>
        <S.HeaderContent>
          <S.Profile>
            <S.ProfileImage />
            <S.ProfileName>@코드잇</S.ProfileName>
          </S.Profile>
          <S.FolderName>⭐️ 즐겨찾기</S.FolderName>
        </S.HeaderContent>
      </S.Header>
      <S.CardSection>
        <S.CardSectionContainer>
          <SearchBar />
        </S.CardSectionContainer>
      </S.CardSection>
      <Footer/>
    </>
  );
}