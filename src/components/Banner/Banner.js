import './Banner.css';

function Intro({ folder }) {
  const { owner, name: folderName } = folder;
  if (!owner) return;

  const { id, name: userName, profileImageSource } = owner;

  return (
    <div className="intro-section">
      {id !== undefined ? (
        <>
          <img className="profile-img" src={profileImageSource} alt="프로필 이미지" />
          <p className="name">@{userName}</p>
          <p className="bookmark">{folderName}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Intro;
