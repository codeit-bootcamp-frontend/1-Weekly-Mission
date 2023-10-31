import '../../styles/sharedContent.css';
import FolderInfo from './FolderInfo.js';
import SearchBar from '../SearchBar.js';
import CardList from './CardList.js';
import useGetSampleFolder from '../../hooks/useGetSampleFolder';

function SharedContent() {
  const folderData = useGetSampleFolder();

  return (
    <>
      {folderData && <FolderInfo folder={folderData} />}
      <main>
        <div className="content_container">
          <SearchBar />
          <CardList folderId={-2} />
        </div>
      </main>
    </>
  );
}

export default SharedContent;
