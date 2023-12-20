import { useRouter } from 'next/router';
import filterLinks from '@/utils/filterLinks';
import { DEFAULT_USER_ID } from '@/services/config/default';
import { SharedPageProps } from '@/pages/shared/[folderId]';
import SearchBar from '@/components/SearchBar';
import CardList from '@/components/cards/CardsContainer';
import Banner from './Banner';

function Folder({ links, folderInfo, userInfo }: SharedPageProps) {
  const name = folderInfo[0].name;
  const owner = userInfo[0];

  const router = useRouter();
  const initialKeyword = Array.isArray(router.query.keyword)
    ? router.query.keyword[0]
    : router.query.keyword;
  const filteredLinks = filterLinks(links, initialKeyword);

  return (
    <main>
      <Banner name={name} owner={owner} />
      <section className='px-32pxr pb-60pxr pt-20pxr pc:mx-auto pc:w-[115rem]'>
        <SearchBar />
        <CardList cards={filteredLinks} userId={DEFAULT_USER_ID} />
      </section>
    </main>
  );
}

export default Folder;
