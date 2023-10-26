import '../../styles/sharedContent.css';
import { useState, useEffect, useCallback } from 'react';
import { getData } from '../../utils/getData';
import { PATH } from '../../constants/path';
import { makeQueryStr } from '../../utils/makeQueryStr';
import SearchBar from '../SearchBar.js';
import FolderNav from './FolderNav';
import AddFolderBtn from './AddFolderBtn';
import styled from 'styled-components';
import CardList from '../shared/CardList';

const NavContainer = styled.div`
  padding: 40px 0 0;
  display: flex;
  justify-content: space-between;
`;

function FolderContent() {
  const [folders, setFolders] = useState(null);
  const [folder, setFolder] = useState(null);
  const [links, setLinks] = useState(null);

  const handleChangeFolderAll = useCallback(() => {
    setFolder(-1);
    getData(setLinks, 'users/1/links');
  }, [links]);

  const handleChangeFolder = useCallback(
    (id) => {
      setFolder(id);
      getData(setLinks, 'users/1/links', `?folderId=${id}`);
    },
    [folder]
  );

  function onChangeFolder(id) {
    return id;
  }

  useEffect(() => {
    getData(setFolders, PATH.users[1].folders);
    getData(setLinks, PATH.users[1].links);
  }, []);

  return (
    <main>
      <div className="content_container">
        <SearchBar />
        {folders ? (
          <NavContainer>
            <FolderNav folders={folders} selectedFolderId={folder} onChangeFolder={handleChangeFolder} onChangeFolderAll={handleChangeFolderAll} />
            <AddFolderBtn />
          </NavContainer>
        ) : (
          <div>저장된 링크가 없습니다.</div>
        )}
        <CardList linksData={links} />
      </div>
    </main>
  );
}

export default FolderContent;
