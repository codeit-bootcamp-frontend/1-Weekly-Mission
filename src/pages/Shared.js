import { useState, useEffect } from "react";
import { getFolder } from "../api/apiUrl";
import useAsync from "../hooks/useAsync";
import Search from "../components/js/Search";
import CardList from "../components/js/CardList";

function Shared() {
  // const [personalFolder, setPersonalFolder] = useState({});
  // const [loadingError, getFolderAsync] = useAsync(getFolder);

  // const handleLoad = async () => {
  //   const folderResult = await getFolderAsync();
  //   if (!folderResult) return;

  //   const { folder } = folderResult;
  //   setPersonalFolder({ ...folder });
  //   console.log(folder);
  // };

  // useEffect(() => {
  //   handleLoad();
  // }, []);

  // const { owner, name: folderName, links } = personalFolder;
  // const ownerName = owner?.name;
  // const profileImageSource = owner?.profileImageSource;
  // const avatarImg = profileImageSource;

  return (
    // <div className="main">
    //   <div className="Header_wrapper">
    //     <div className="Header_container">
    //       <img className="avatar_img" src={avatarImg} alt="avatar"></img>
    //       <span className="folder_owner">{`@${ownerName}`}</span>
    //       <span className="folder_name">{folderName}</span>
    //     </div>
    //   </div>
    //   <Search />
    //   {!loadingError ? <CardList folderLinks={links} /> : loadingError.message}
    // </div>
    <div></div>
  );
}

export default Shared;
