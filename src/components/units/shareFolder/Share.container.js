import { useEffect, useState } from "react";
import useFetch from "components/common/hooks/useFetch";

import style from "./Share.module.css";
import { getFolder } from "api/api";

import Hero from "components/common/hero/Hero.js";
import Searchbar from "components/common/searchbar/Searchbar.js";
import CardList from "components/common/card/CardList.js";
import Loading from "components/loading/Loading";

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
          <section className={style.hero}>
            <Hero folder={folder} profile={profile} />
          </section>
          <section>
            <div className={style.contents}>
              <Searchbar />
              <CardList links={links} />
            </div>
          </section>
        </>
      )}
    </main>
  );
}
