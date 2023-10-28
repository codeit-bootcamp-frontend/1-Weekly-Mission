import { useEffect, useState } from 'react';
import { getFolders } from '../../api/getFolders';
import './Share.style.css';
import CardList from '../Card/CardList';

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
  const [ownerItem, setOwnerItem] = useState({
    id: null,
    name: '',
    profileImageSoure: '',
    folderName: '',
    links: [],
  });

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
      <Owner
        profileUrl={ownerItem.profileImageSoure}
        ownerName={ownerItem.name}
        ownerFolderName={ownerItem.folderName}
      />
      {ownerItem && (
        <div className='cardWrapper'>
          <CardList items={ownerItem.links} />
        </div>
      )}
    </>
  );
}
