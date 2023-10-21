function Folder({ folderProfile }) {
  const avatar = folderProfile?.avatar ?? '';
  const ownerName = folderProfile?.ownerName ?? '';
  const folderName = folderProfile?.folderName ?? '';

  return (
    <>
      <div>
        <img className='folder-avatar' src={avatar} alt='폴더 주인 아바타' />
        <h3 className='folder-ownername'>{ownerName}</h3>
        <h2 className='folder-name'>{folderName}</h2>
      </div>
    </>
  );
}

export default Folder;
