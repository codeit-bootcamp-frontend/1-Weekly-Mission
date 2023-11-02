import GlobalStyle from '../global/globalStyles';
import Nav from '../components/Folder/Nav';
import Footer from '../components/Folder/Footer';
import Header from '../components/Folder/Header';
import SharedMain from '../components/Folder/Main/SharedMain';
import useGetAccount from '../hooks/useGetAccount';
import useGetShareFolder from '../hooks/useGetShareFolder';
import { useState, useEffect } from 'react';

function Shared() {
  const [userId, setUserId] = useState('S'); // 샘플

  const account = useGetAccount(userId);
  const folderInfo = useGetShareFolder(userId);

  useEffect(() => {
    setUserId(userId);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Nav account={account} isSticky />
      {folderInfo && <Header folderInfo={folderInfo} />}
      {folderInfo && <SharedMain folderInfo={folderInfo.links} />}
      <Footer />
    </>
  );
}

export default Shared;
