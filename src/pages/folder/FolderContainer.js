import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";

import * as style from "./FolderContainerStyle";
import { getAllFolders, getAllLinks } from "api/api";

import CardList from "components/card/CardList";
import Loading from "components/loading/Loading";
import Searchbar from "components/searchbar/Searchbar";
import Hero from "components/hero/Hero";
import FolderHero from "components/hero/HeroAboutFolder";

export default function Folder() {
  const [links, setLinks] = useState([]);
  const [folders, setFolders] = useState([]);

  const { isLoading, error, wrappedFunction: getLinksAsyncFunc } = useFetch(getAllLinks);
  // prettier-ignore
  const { isLoading: isLoadingFolder, error: errorFolder, wrappedFunction: getFoldersAsyncFunc} = useFetch(getAllFolders);

  const handleLoadedData = async () => {
    const { data: linkData } = await getLinksAsyncFunc(1);
    const { data: folderData } = await getFoldersAsyncFunc(1);

    setLinks(linkData);
    setFolders(folderData);
  };

  useEffect(() => {
    handleLoadedData();
  }, []);

  console.log(links);
  console.log(folders);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <style.HeroContainer>
            <FolderHero />
          </style.HeroContainer>
          <section>
            <style.Contents>
              <Searchbar />
              <CardList links={links} />
            </style.Contents>
          </section>
        </>
      )}
    </main>
  );
}
