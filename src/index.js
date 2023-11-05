import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/colors.css';
import RenameFolderModal from './components/Modal/RenameFolderModal';
import RemoveFolderModal from './components/Modal/RemoveFolderModal';
import AddFolderModal from './components/Modal/AddFolderModal';
import RemoveLinkModal from './components/Modal/RemoveLinkModal';
import ShareFolderModal from './components/Modal/ShareFolderModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RenameFolderModal /> */}
    {/* <RemoveFolderModal /> */}
    {/* <AddFolderModal / */}
    {/* <RemoveLinkModal /> */}
    {/* <ShareFolderModal /> */}
  </React.StrictMode>,
);
