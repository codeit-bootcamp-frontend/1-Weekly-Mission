import React from 'react';
import './folderPage.css';
import AddLinkInput from './components/AddLinkInput';

export default function FolderPage() {
  return (
    <header className="folder-header">
      <AddLinkInput />
    </header>
  );
}
