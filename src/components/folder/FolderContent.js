import '../../styles/sharedContent.css';
import { useState, useEffect } from 'react';
import { getData } from '../../utils/getData';
import SearchBar from '../SearchBar.js';
import FolderNav from './FolderNav';
import PATH from '../../constants/path';
import AddFolderBtn from './AddFolderBtn';
import styled from 'styled-components';

const NavContainer = styled.div`
  padding: 40px 0 0;
  display: flex;
  justify-content: space-between;
`;

function FolderContent() {
  const [folders, setFolders] = useState(null);

  useEffect(() => {
    getData(setFolders, PATH.users[1].folders);
  }, []);

  return (
    <main>
      <div className="content_container">
        <SearchBar />
        {folders ? (
          <NavContainer>
            <FolderNav folders={folders} />
            <AddFolderBtn />
          </NavContainer>
        ) : (
          <div>저장된 링크가 없습니다.</div>
        )}
      </div>
    </main>
  );
}

export default FolderContent;
