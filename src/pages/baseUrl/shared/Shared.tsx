import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { getFolder } from "../../../api/apiUrl";
import NavAndFooterFixed from "../../../components/js/NavAndFooterFixed";
import useAsync from "../../../hooks/useAsync";
import FolderOwner from "../../../components/js/FolderOwner";
import Search from "../../../components/js/Search";
import CardList from "../../../components/js/CardList";
import SearchBarText from "../../../components/js/SearchBarText";
import PageWrapper from "../../../components/js/PageWrapper";

function Shared() {
  const [personalFolder, setPersonalFolder] = useState<any>({});
  const [loadingError, getFolderAsync] = useAsync(getFolder);
  const [searchValue, setSearchValue] = useState("");
  const [folderLinks, setFolderLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState(folderLinks);

  const handleLoad = async () => {
    const folderResult = await getFolder();
    if (!folderResult) return;

    const { folder } = folderResult;
    setPersonalFolder({ ...folder });
    setFolderLinks(folder.links);
  };

  console.log(personalFolder);

  //setSearchValue Prop으로 내려주기 위한 함수
  const handleChangeSearchValue = (value: any) => {
    setSearchValue(value);
  };

  const handleClearSearchValue = () => {
    setSearchValue("");
    setFilteredLinks(folderLinks);
  };

  const filteredList = folderLinks?.filter((item: any) => {
    if (searchValue.length > 0) {
      if (
        item.description?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.url?.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return folderLinks;
      }
    } else {
      return filteredLinks;
    }
  });

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
        <PageWrapper>
          <Search
            value={searchValue}
            onChange={handleChangeSearchValue}
            onDelete={handleClearSearchValue}
          />
          {searchValue.length >= 1 && <SearchBarText value={searchValue} />}
          {loadingError ? (
            loadingError.message
          ) : (
            <CardList folderLinks={filteredList} />
          )}
        </PageWrapper>
      </NavAndFooterFixed>
    </>
  );
}

export default Shared;
