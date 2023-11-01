import 'styles/sharedContent.css';
import { SAMPLE_ID } from 'constants/default';
import useGetSampleFolder from 'hooks/useGetSampleFolder';
import SearchBar from 'components/common/SearchBar.js';
import CardList from 'components/common/Card/CardList.js';
import FolderInfo from './FolderInfo.js';

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
