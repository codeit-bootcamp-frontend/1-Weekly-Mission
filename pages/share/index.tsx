import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { getSampleFolder } from "../../api/user";
import styles from "./sharedpage.module.css";
import ShareCard from "../../components/shareCard/ShareCard";
import { FolderInfo, SampleFolder, SampleLinks } from "../../types/types";
import SearchBar from "@/components/searchBar/SearchBar";
import axios from "axios";
import { BASE_URL, SAMPLE_FOLDER_ENDPOINT } from "../../api/services/config";

interface SharedPageProps {
  sampleFolder: SampleFolder;
}

export const getStaticProps = async () => {
  const sampleFolderResponse = await axios.get(
    `${BASE_URL}${SAMPLE_FOLDER_ENDPOINT}`
  );
  const sampleFolder: SampleFolder = sampleFolderResponse.data;

  return {
    props: {
      sampleFolder,
    },
  };
};

export default function SharedPage({ sampleFolder }: SharedPageProps) {
  const links = sampleFolder.folder.links;
  const folderInfo = sampleFolder;

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
