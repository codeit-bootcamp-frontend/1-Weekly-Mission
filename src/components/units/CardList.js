import { getFolder } from "api/api";
import "components/units/CardList.css";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

export default function CardList() {
  const [links, setLinks] = useState();

  useEffect(() => {
    getFolderData();
  }, []);

  const getFolderData = async () => {
    const result = await getFolder();
    const { links } = result.folder;
    setLinks(links);
  };

  console.log(links);

  return (
    <ul className="cards">
      {links?.map((link) => (
        <li key={link.id}>
          <CardItem link={link} />
        </li>
      ))}
    </ul>
  );
}
