import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { getFolder } from "../api/apiUrl";
import NavAndFooterFixed from "../components/js/NavAndFooterFixed";
import useAsync from "../hooks/useAsync";
import FolderOwner from "../components/js/FolderOwner";
import Search from "../components/js/Search";
import CardList from "../components/js/CardList";

function Shared() {
  const [personalFolder, setPersonalFolder] = useState({});
  const [loadingError, getFolderAsync] = useAsync(getFolder);

  const handleLoad = async () => {
    const folderResult = await getFolderAsync();
    if (!folderResult) return;

    const { folder } = folderResult;
    setPersonalFolder({ ...folder });
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Helmet>
        <title>Linkbrary_Shared</title>
      </Helmet>
      <NavAndFooterFixed>
        <FolderOwner
          owner={personalFolder.owner}
          folderName={personalFolder.name}
        />
        <div>
          <Search />
          {loadingError ? (
            loadingError.message
          ) : (
            <CardList folderLinks={personalFolder.links} />
          )}
        </div>
      </NavAndFooterFixed>
    </>
  );
}

export default Shared;
