import * as S from './Folder.style';
import { useRouter } from 'next/router';
import { DEFAULT_USER_ID } from '@/services/config/default';
import filterLinks from '@/utils/filterLinks';
import SearchBar from '@/components/SearchBar';
import CardList from '@/components/CardsContainer';
import Banner from '../Banner';
import { SharedFolder } from '@/types/Folder.types';

function Folder({ folder }: SharedFolder) {
  const name = folder?.name;
  const owner = folder?.owner;
  const links = folder?.links;

  const router = useRouter();
  const initialKeyword = Array.isArray(router.query.keyword)
    ? router.query.keyword[0]
    : router.query.keyword;
  const filteredLinks = filterLinks(links, initialKeyword);

  return (
    <main>
      <Banner name={name} owner={owner} />
      <S.ContentContainer>
        <SearchBar />
        <CardList cards={filteredLinks} userId={DEFAULT_USER_ID} />
      </S.ContentContainer>
    </main>
  );
}

export default Folder;
