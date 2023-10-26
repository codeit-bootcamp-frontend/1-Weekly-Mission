import LinkAdd from '../components/LinkAdd';
import Search from '../components/Search';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <>
      <LinkAdd />
      <div className="main-section">
        <Search />
        <p className="notSaveLink">저장된 링크가 없습니다.</p>
      </div>
    </>
  );
}

export default NotFoundPage;
