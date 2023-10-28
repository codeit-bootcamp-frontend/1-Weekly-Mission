import "./Main.css";

const INIT_FOLDER_INFO = {
  id: 0,
  name: "",
  owner: {
    id: 0,
    name: "",
    profileImageSource: "",
  },
};

const Main = ({ folderInfo }) => {
  const folder = folderInfo ? folderInfo : INIT_FOLDER_INFO;

  return (
    <div className="main">
      <div className="section-title main-section">
        <div className="section-title-inner">
          <div className="icon-wrap">
            <img src={folder.owner.profileImageSource} alt="프로필 이미지" />
          </div>
          <h4>@{folder.owner.name}</h4>
          <h3>{folder.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
