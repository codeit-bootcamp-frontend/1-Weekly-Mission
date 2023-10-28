import "./Header.css";
import { getResponse } from "../../api";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [folder, setFolder] = useState("");

  const handleLoad = useCallback(async () => {
    const result = await getResponse("sample/folder");
    if (!result) {
      return;
    }

    const newFolder = result.folder;
    setFolder(newFolder);
  }, []);

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <header>
      <div className="header_wrapper">
        <div className="user_info">
          <div className="user_profile">
            <img
              className="owner_img"
              src={folder.owner?.profileImageSource}
              alt="프로필 사진"
            />
            <div className="owner_name">{folder.owner?.name}</div>
          </div>
          <div className="folder_name">{folder.name}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
