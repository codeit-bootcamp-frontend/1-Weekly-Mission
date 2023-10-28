import { useEffect, useState } from 'react';
import { getFolders } from '../../api/api';
import CardList from '../Card/CardList';
import SearchBar from '../SearchBar/SearchBar';
import './Share.style.css';

function Owner({ profileUrl, ownerName, ownerFolderName }) {
  return (
    <div className='owner'>
      <img src={profileUrl} alt='profile' />
      <p className='ownerName'>@{ownerName}</p>
      <h2 className='folderName'>{ownerFolderName}</h2>
    </div>
  );
}

export default function Share() {
  const INITAL_ITEM = {
    id: null,
    name: '',
    profileImageSoure: '',
    folderName: '',
    links: [],
  };
  const [ownerItem, setOwnerItem] = useState(INITAL_ITEM);

  async function getFolderItem() {
    const folder = await getFolders();

    setOwnerItem({
      id: folder.id,
      name: folder.owner.name,
      profileImageSoure: folder.owner.profileImageSource,
      folderName: folder.name,
      links: folder.links,
    });
  }

  useEffect(() => {
    getFolderItem();
  }, []);

  return (
    <>
      {/* <Owner
        profileUrl={ownerItem.profileImageSoure}
        ownerName={ownerItem.name}
        ownerFolderName={ownerItem.folderName}
      /> */}
      <SearchBar />

      {ownerItem && (
        <div className='cardWrapper'>
          <CardList items={ownerItem.links} />
        </div>
      )}
    </>
  );
}
