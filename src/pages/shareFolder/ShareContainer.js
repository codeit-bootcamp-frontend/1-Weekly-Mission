import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";

import * as S from "./ShareContainerStyle";
import { getFolder } from "api/api";

import Hero from "components/hero/Hero";
import Searchbar from "components/searchbar/Searchbar";
import CardList from "components/card/CardList";
import Loading from "components/Loading";

export default function Share() {
  const [folder, setFolder] = useState("");
  const [profile, setProfile] = useState({});
  const [links, setLinks] = useState([]);
  const { isLoading, error, wrappedFunction: getFolderAsyncFunc } = useFetch(getFolder);

  const handleFolderData = async () => {
    const result = await getFolderAsyncFunc();
    const { name: folderName, owner, links } = result.folder;

    setFolder(folderName);
    setProfile(owner);
    setLinks(links);
  };

  useEffect(() => {
    handleFolderData();
  }, []);

  if (error) console.log(error);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.HeroContainer>
            <Hero folder={folder} profile={profile} />
          </S.HeroContainer>
          <section>
            <S.Contents>
              <Searchbar />
              <CardList links={links} />
            </S.Contents>
          </section>
        </>
      )}
    </main>
  );
}
