import { useEffect, useState } from 'react';
import { fetchFolder } from '../api/fetchAPI';
import Card from './Card';

function CardList() {
  const [links, setLinks] = useState([]);
  const getFolder = async () => {
    const {
      folder: { links },
    } = await fetchFolder();
    setLinks(links);
  };
  useEffect(() => {
    getFolder();
  });
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Card data={link} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
