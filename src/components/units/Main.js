import { useEffect, useState } from "react";

import Hero from "./Hero";
import CardList from "./CardList";
import Searchbar from "./Searchbar";

import "components/units/Main.css";
import { getFolder } from "api/api";

export default function Main() {
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
