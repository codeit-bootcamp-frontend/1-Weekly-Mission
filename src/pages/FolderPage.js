import { useEffect, useState } from "react";
import AddLink from "../component/AddLink";
import Cards from "../component/Cards";
import FolderList from "../component/FolderList";
import Search from "../component/Search";
import useAsync from "../hooks/useAsync";
import { getLink } from "../api/getLink";

function FolderPage() {
  const [links, setLinks] = useState([]);
  const [, , getLinkAsync] = useAsync(getLink);

  const handleLoad = async () => {
    const links = await getLinkAsync({ id: 1 });
    setLinks(links);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div>
      <AddLink />
      <div>
        <Search />
        <FolderList />
        <Cards cards={links} />
      </div>
    </div>
  );
}

export default FolderPage;
