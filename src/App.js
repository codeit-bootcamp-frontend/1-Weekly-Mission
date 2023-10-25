import './styles/app.css';

import { useState, useEffect } from 'react';
import { getResponse } from './api.js';

import Header from './components/Header.js';
import FolderInfo from './components/FolderInfo.js';
import SharedContent from './components/SharedContent';
import Footer from './components/Footer.js';
import PATH from './constants/path';

function App() {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);
  const [links, setLinks] = useState([]);

  async function getUser() {
    const user = await getResponse(PATH.user);
    if (!user) return;
    setUser(user);
  }

  async function getFolder() {
    const { folder: folderData } = await getResponse(PATH.folder);
    if (!folderData) return;
    setFolder(folderData);
  }

  async function getLinks() {
    const res = await getResponse(PATH.folder);
    if (!res) return;
    const folder = res.folder;
    const newLinks = folder.links;
    setLinks(newLinks);
  }

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getFolder();
  }, []);
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <Header user={user} />
      {folder && <FolderInfo folderData={folder} />}
      <SharedContent links={links} />
      <Footer />
    </>
  );
}

export default App;
