import '../../styles/sharedContent.css';

import { useState, useEffect } from 'react';
import { getData } from '../../utils/getData';

import FolderInfo from './FolderInfo.js';
import SearchBar from '../SearchBar.js';
import CardList from './CardList.js';
import PATH from '../../constants/path';

function SharedContent() {
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    getData(setFolder, PATH.folder);
  }, []);

  return (
    <>
      {folder && <FolderInfo folder={folder} />}
      <main>
        <div className="content_container">
          <SearchBar />
          {folder && <CardList folder={folder} />}
        </div>
      </main>
    </>
  );
}

export default SharedContent;
