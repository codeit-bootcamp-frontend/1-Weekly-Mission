import '../styles/User.css';

const INIT_FOLDER_INFO = {
  id: 0,
  name: '',
  owner: {
    id: 0,
    name: '',
    profileImageSource: '',
  },
};
export default function User({ folderInfo }) {
  const folder = folderInfo ? folderInfo : INIT_FOLDER_INFO;

  return (
    <div className='user'>
      <img
        src={folder.owner.profileImageSource}
        className='folder-profile-image'
        alt='프로필 이미지'
      />
      <div className='user-name'>@{folder.owner.name}</div>
      <div className='user-folder-name'>{folder.name}</div>
    </div>
  );
}
