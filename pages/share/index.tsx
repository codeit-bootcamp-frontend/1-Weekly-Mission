import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { getSampleFolder } from "../api/user";
import styles from "./sharedpage.module.css";
import ShareCard from "../../components/shareCard/ShareCard";
import { FolderInfo, SampleLinks } from "../../types/types";
import SearchBar from "@/components/searchBar/SearchBar";

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
      <main className={styles.main}>
        <section className={styles.contentSection}>
          <div className={styles.container}>
            {/* <SearchBar onKeyUp={handleSearchInputChange}/> */}
            <div className={styles.linksContainer}>
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
