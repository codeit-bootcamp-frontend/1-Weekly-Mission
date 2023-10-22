import Card from "../../components/card/Card";
import "./folder.css";
import SearchImg from "../../assets/folder/img_search.png";
import { useCallback, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { getFolder } from "../../api/api";

const Folder = () => {
  const [cardData, setCardData] = useState([]);
  const [user, setUser] = useState();
  const [name, setName] = useState("");
  const [isLoading, error, getFolderAsync] = useAsync(getFolder);

  const handleFolder = useCallback(async () => {
    const result = await getFolderAsync();
    if (!result) return;

    const { folder } = result;

    setCardData(folder.links);
    setUser(folder.owner);
    setName(folder.name);
  }, [getFolderAsync]);

  useEffect(() => {
    handleFolder();
  }, [handleFolder]);

  if (isLoading) {
    return <div>화면을 불러오는 중입니다.</div>;
  }

  if (error) {
    return <div>문제가 발생했습니다. {error}</div>;
  }

  return (
    <div className="wrapper">
      <div className="section">
        <div className="folderContentContainer">
          <img
            id="userProfile"
            src={user?.profileImageSource}
            alt="profileImg"
          />
          <div id="userName">{user?.name}</div>
          <div id="folderName">{name}</div>
        </div>
      </div>
      <div className="section" style={{ background: "#fff" }}>
        <div className="folderContentContainer" id="bottomContainer">
          <div className="searchInputContainer">
            <img src={SearchImg} alt="searchImg" id="searchImg" />
            <input
              id="searchContainer"
              placeholder="링크를 검색해보세요."
            ></input>
          </div>
          <div id="cardContainer">
            {cardData?.map((e) => {
              return <Card key={e.id} cardData={e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
