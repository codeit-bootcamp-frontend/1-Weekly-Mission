import { useEffect, useState } from "react";
import BinderInfo from "../components/BinderInfo/BinderInfo";
import SearchBar from "../components/SearchBar/SearchBar";
import Binder from "../components/Binder/Binder";
import getSampleFolder from "../apis/sample/folder";
import styles from "./Shared.module.css";

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
      <BinderInfo name={name} owner={owner} />
      <section className={styles.root}>
        <SearchBar />
        <Binder cards={cards} shared={true} />
      </section>
    </>
  );
}

export default Shared;
