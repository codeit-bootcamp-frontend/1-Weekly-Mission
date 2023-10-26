import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import { getSampleFolder } from '../../api/user';
import './sharedpage.css';

export default function SharedPage() {
  const [links, setLinks] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);

  useEffect(async () => {
    const response = await getSampleFolder();
    const link = response.folder.links;
    setLinks(link);
  }, []);

  useEffect(async () => {
    const response = await getSampleFolder();
    setFolderInfo(response);
  }, []);

  return (
    <>
      <Header folderInfo={folderInfo} />
      <main className="main">
        <section className="content-section">
          <div className="container">
            <SearchBar />
            <div className="links-container">
              {links &&
                links.map((item) => (
                  <div key={item.id}>
                    <Card linkInfo={item} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
