import React from 'react';
import CardList from '../../components/card/CardList';
import CardSearchBar from '../../components/card/CardSearchBar';
import FolderList from '../../components/folder/FolderList';

function FolderPage() {
  return (
    <>
      <header>
        <input type="text" />
      </header>
      <main>
        <CardSearchBar />
        <FolderList />
        <CardList links={links} />
      </main>
    </>
  );
}

export default FolderPage;
