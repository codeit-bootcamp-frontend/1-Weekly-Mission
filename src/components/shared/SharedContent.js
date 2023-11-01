import '../../styles/sharedContent.css';
import { SAMPLE_ID } from '../../constants/default';
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
          <CardList folderId={SAMPLE_ID} />
        </div>
      </main>
    </>
  );
}

export default SharedContent;
