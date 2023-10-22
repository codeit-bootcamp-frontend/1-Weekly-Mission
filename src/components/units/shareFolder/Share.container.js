import { useEffect, useState } from "react";

import Hero from "components/common/hero/Hero.js";
import Searchbar from "components/common/searchbar/Searchbar.js";
import CardList from "components/common/card/CardList.js";

import "./Share.css";
import { getFolder } from "api/api";

export default function Share() {
  const [folder, setFolder] = useState("");
  const [profile, setProfile] = useState();
  const [links, setLinks] = useState();

  useEffect(() => {
    getFolderData();
  }, []);

  const getFolderData = async () => {
    const result = await getFolder();
    const { name: folderName, owner, links } = result.folder;

    setFolder(folderName);
    setProfile(owner);
    setLinks(links);
  };

  return (
    <main>
      <section className="hero">
        <Hero folder={folder} profile={profile} />
      </section>
      <section>
        <div className="contents">
          <Searchbar />
          <CardList links={links} />
        </div>
      </section>
    </main>
  );
}
