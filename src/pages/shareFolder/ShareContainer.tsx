import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";

import * as S from "./ShareContainerStyle";
import { getFolder } from "api/api";

import Hero from "components/hero/Hero";
import Searchbar from "components/inputs/Searchbar";
import CardList from "components/card/CardList";
import Loading from "components/Loading";

import { Owner } from "types/user";
import { SampleLinkData } from "types/folder";

export default function Share() {
  const [folder, setFolder] = useState("");
  const [profile, setProfile] = useState<Owner>({
    id: 0,
    name: "",
    profileImageSource: "",
  });
  const [links, setLinks] = useState<SampleLinkData[]>([]);
  const { isLoading, error, wrappedFunction: getFoldersAsyncFunc } = useFetch(getFolder);

  const handleFolderData = async () => {
    const { folder } = await getFoldersAsyncFunc();
    const { name: folderName, owner, links } = folder;

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
