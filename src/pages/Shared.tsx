import { MouseEvent, useEffect, useState } from "react";
import BinderInfo from "../components/BinderInfo/BinderInfo";
import SearchBar from "../components/SearchBar/SearchBar";
import Binder from "../components/Binder/Binder";
import getSampleFolder from "../apis/sample/folder";
import styles from "./Shared.module.css";
import Nav from "../components/Nav/Nav";
import useInputController from "../hooks/useInputController";
import SearchBarResult from "../components/SearchBarResult/SearchBarResult";

type Card = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

type CardData = {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
};

type Owner = { id: number; name: string; profileImageSource: string };

function Shared() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState<Owner>({
    id: 0,
    name: "",
    profileImageSource: "",
  });
  const [cards, setCards] = useState<Card[] | CardData[]>([]);

  const searchInput = useInputController({});

  const handleSearchBarDeleteIconClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchInput.setValues("");
  };

  const loadFolderData = async () => {
    const {
      folder: { name, owner, links },
    } = await getSampleFolder();

    setName(name);
    setOwner({ ...owner });
    setCards((prevCards) => {
      return [...prevCards, ...links];
    });
  };

  useEffect(() => {
    loadFolderData();
  }, []);

  return (
    <>
      <Nav className={styles.nav} />
      <BinderInfo name={name} owner={owner} />
      <section className={styles.root}>
        <SearchBar
          value={searchInput.values}
          onChange={searchInput.handleChange}
          onClick={handleSearchBarDeleteIconClick}
        />
        {searchInput.values && <SearchBarResult value={searchInput.values} />}
        <Binder cards={cards} shared={true} />
      </section>
    </>
  );
}

export default Shared;
