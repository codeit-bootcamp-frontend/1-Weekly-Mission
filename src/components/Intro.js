import '../styles/Intro.css';

function Intro({ id, name, introProfileImg, introFolderName }) {
  return (
    <div className="intro-section">
      {id !== undefined ? (
        <>
          <img className="profile-img" key={id} src={introProfileImg} alt="프로필 이미지" />
          <p className="name">@{name}</p>
          <p className="bookmark">{introFolderName}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Intro;
