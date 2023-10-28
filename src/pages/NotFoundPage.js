import LinkAdd from 'components/LinkAdd/LinkAdd';
import NotFoundLink from 'components/NotFoundLink/NotFoundLink';
import Search from 'components/Search/Search';

function NotFoundPage() {
  return (
    <>
      <LinkAdd />
      <div className="main-section">
        <Search />
        <NotFoundLink />
      </div>
    </>
  );
}

export default NotFoundPage;
