import './User.css';

export default function User({ folderInfo, owner }) {
  console.log(`user components:`, folderInfo);
  return (
    <div className='user'>
      <img
        src={owner.profileImageSource}
        className='folder-profile-image'
        alt='프로필 이미지'
      />
      <div className='user-name'>@{owner.name}</div>
      <div className='user-folder-name'>{folderInfo.name}</div>
    </div>
  );
}
