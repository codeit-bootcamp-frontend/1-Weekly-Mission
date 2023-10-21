function Folder({ folderProfile }) {
  const avatar = folderProfile?.avatar ?? '';
  const ownerName = folderProfile?.ownerName ?? '';
  const folderName = folderProfile?.folderName ?? '';

  return (
    <>
      <div className='folder-profile-container'>
        <div className='folder-profile'>
          <img className='folder-avatar' src={avatar} alt='폴더 주인 아바타' />
          <h3 className='folder-owner-name'>{ownerName}</h3>
        </div>
        <h2 className='folder-name'>{folderName}</h2>
      </div>
    </>
  );
}

export default Folder;
