import { Fragment, useEffect, useState } from "react";
import { getFolderData } from "../../APIs/api";
import "./IntroSection.css";

function IntroSection() {
  const [userInfos, setUserInfos] = useState(null);

  const handleFolderLoad = async () => {
    try {
      const { folder } = await getFolderData();
      setUserInfos(folder);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFolderLoad();
  }, []);

  return (
    <div className="intro-section-container">
      <div className="intro-section">
        {userInfos && (
          <>
            <div className="user-info">
              <div>
                <img
                  className="user-image"
                  src={userInfos.owner.profileImageSource}
                  alt="유저 프로필 사진"
                />
              </div>
              <div className="user-name">@{userInfos.owner.name}</div>
            </div>
            <div className="bookmark">{userInfos.name}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default IntroSection;
