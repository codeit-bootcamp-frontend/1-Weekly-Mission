import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import { getSampleFolder } from "../../api/user";
import "./sharedpage.css";
import ShareCard from "../../components/shareCard/ShareCard";
import { FolderInfo, SampleLinks } from "../../types/types";

export default function SharedPage() {
  const [links, setLinks] = useState<SampleLinks[]>([]);
  const [folderInfo, setFolderInfo] = useState<FolderInfo>();

  const fetchSampleLinks = async () => {
    const response = await getSampleFolder();
    const link = response?.folder.links;
    setLinks(link);
  };

  useEffect(() => {
    fetchSampleLinks();
  }, []);

  const fetchSampleFolder = async () => {
    const response = await getSampleFolder();
    setFolderInfo(response);
  };

  useEffect(() => {
    fetchSampleFolder();
  }, []);

  return (
    <>
      <Header folderInfo={folderInfo} />
      <main className="main">
        <section className="content-section">
          <div className="container">
            {/* <SearchBar onChange={handleSearchInputChange}/> */}
            <div className="links-container">
              {links &&
                links.map((item) => (
                  <div key={item.id}>
                    <ShareCard linkInfo={item} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
