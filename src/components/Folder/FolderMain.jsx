import Main from '../Main/Main';
import SearchForm from '../Search/SearchForm';
import FolderCategory from './FolderCategory';
import FolderCategoryPage from './FolderCategoryPage';

function FolderMain() {
  return (
    <Main>
      <SearchForm />
      <FolderCategory />
      <FolderCategoryPage />
    </Main>
  );
}

export default FolderMain;

