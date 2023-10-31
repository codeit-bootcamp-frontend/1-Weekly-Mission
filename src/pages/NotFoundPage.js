import LinkAdd from 'components/LinkAdd/LinkAdd';
import MainSection from 'components/MainSection/MainSection';
import NotFoundLink from 'components/NotFoundLink/NotFoundLink';
import Search from 'components/Search/Search';

function NotFoundPage() {
  return (
    <>
      <LinkAdd />
      <MainSection>
        <Search />
        <NotFoundLink />
      </MainSection>
    </>
  );
}

export default NotFoundPage;
