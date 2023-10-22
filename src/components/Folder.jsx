import '../css/folder.css';

function Folder() {
  return (
    <>
      <div className="folder-info-wrapper">
        <div className="folder-info">
          <img className="avatar" alt="로그인한 유저의 아바타" />
          <h3 className="owner-name">Name</h3>
        </div>
        <h2 className="folder-name">folder-name</h2>
      </div>
    </>
  );
}

export default Folder;
