import React, { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import SharedPage from './pages/share/SharedPage';
import Footer from './components/footer/Footer';
import { getSampleFolder } from './api/user';
import Header from './components/header/Header';

export default function App() {
  const [folderInfo, setFolderInfo] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(async () => {
    const response = await getSampleFolder();
    setFolderInfo(response);
    const link = response.folder.links;
    setLinks(link);
  }, []);

  return (
    <div>
      <Nav />
      <Header folderInfo={folderInfo} />
      <SharedPage links={links} />
      <Footer />
    </div>
  );
}
