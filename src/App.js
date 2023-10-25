import './styles/app.css';

import { useState, useEffect } from 'react';
import { getResponse } from './api.js';

import Header from './components/Header.js';
import FolderInfo from './components/FolderInfo.js';
import SearchBar from './components/SearchBar.js';
import CardList from './components/CardList.js';
import Footer from './components/Footer.js';

function App() {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);
  const [links, setLinks] = useState([]);

  async function getUser() {
    const user = await getResponse('sample/user');
    if (!user) return;
    setUser(user);
  }

  async function getFolder() {
    const { folder: folderData } = await getResponse('sample/folder');
    if (!folderData) return;
    setFolder(folderData);
  }

  async function getLinks() {
    /* 페어 프로그래밍한 코드입니다. */
    const res = await getResponse('sample/folder');
    if (!res) return;
    const folder = res.folder;
    const newLinks = folder.links;
    setLinks(newLinks);
  }

  useEffect(() => getUser, []);
  useEffect(() => getFolder, []);
  useEffect(() => getLinks, []);

  return (
    <>
      <header>
        <Header user={user} />
      </header>
      <div className="folder_info">
        <FolderInfo folderData={folder} />
      </div>
      <main>
        <div className="content_container">
          <SearchBar />
          <CardList links={links} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
