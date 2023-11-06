import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../components/Folders.css";
import addImg from "../img/add.svg";
import addImgWhite from "../img/add-white.svg";

const ALL = {
  name: "전체",
};

const Folder = ({ folderInfo, onClick }) => {
  return (
    <div onClick={onClick} id={folderInfo.id}>
      {folderInfo.name}
    </div>
  );
};

const activeStyle = {
  backgroundColor: "#6d6afe",
  color: "#ffffff",
};

const Folders = ({ userFolder, onCurrentFolder }) => {
  const [currentButton, setCurrentButton] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleFolder = (e) => {
    const id = e.target.id;
    const name = e.target.innerHTML;
    if (id === currentButton) {
      setCurrentButton("");
      onCurrentFolder({ name: "전체", id: "" });
    } else {
      setCurrentButton(id);
      onCurrentFolder({ name, id });
    }
  };

  return (
    <div className="folders">
      <div className="folder-box">
        <NavLink
          to={`/folder`}
          end
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          <Folder folderInfo={ALL} key="전체" onClick={handleFolder} id="" />
        </NavLink>
        {userFolder.map((folder) => (
          <NavLink
            to={`/folder/${folder.id}`}
            end
            style={({ isActive }) => (isActive ? activeStyle : {})}
            key={folder.id}
          >
            <Folder
              folderInfo={folder}
              key={folder.id}
              onClick={handleFolder}
            />
          </NavLink>
        ))}
      </div>
      <div className="add-folder">
        <div>폴더추가</div>
        {windowWidth > 768 ? (
          <img src={addImg} alt="폴더추가" />
        ) : (
          <img src={addImgWhite} alt="폴더추가" />
        )}
      </div>
    </div>
  );
};

export default Folders;
