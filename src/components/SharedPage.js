import { useState, useEffect } from 'react';
import { getFolder } from '../api';
import CardList from './CardList';
import search from '../assets/search.svg';


function SharedPage() {
  // const [folderName, setFolderName] = useState("");
  // const [folderOwner, setFolderOwner] = useState({});
  // const [folderLinks, setFolderLinks] = useState([]);
  const [folderData, setFolderData] = useState(null);

  const handleLoad = async () => {
    const folderData = await getFolder();
    // const {
    //   folder: { name, owner, links },
    // } = folderData;
    // setFolderName(name);
    // setFolderOwner(owner);
    // setFolderLinks(links);
    const data = folderData.data;
    console.log(data);
    setFolderData(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  // const { name, profileImageSource } = folderOwner;

  return (
    <>
      <div className="folder">
        <div className ="folder-container">
          <div>
            {/* <img className="profile-img" src={profileImageSource} alt="" /> */}
            </div>
          {/* <div className="folder-user">{name}</div> */}
          {/* <div className="folder-name">{folderName}</div> */}
        </div>
      </div>
      <div className="container">
        <div className="container2">
          <div className="search-container">
            <img className="search-img" src={search} alt="돋보기" />
            <input className="search-input" type="text" placeholder="링크를 검색해 보세요." />
          </div>
          <CardList folderData={folderData} />
        </div>
      </div>
    </>
  );
}

export default SharedPage;