import "./folder.css";

const Folder = () => {
  return (
    <div className="wrapper">
      <div className="section">
        <div className="folderContentContainer">
          <div id="userProfile"></div>
          <div id="userName">@코드잇</div>
          <div id="folderName">⭐️ 즐겨찾기</div>
        </div>
      </div>
      <div className="section" style={{ background: "#fff" }}>
        <div className="folderContentContainer" id="cardContainer">
          <div id="searchContainer"></div>
          <div id="cardContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
