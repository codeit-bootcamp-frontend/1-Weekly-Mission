import React, { useEffect, useState } from "react";
import Header from "../../../components/header/Header";
import styles from "./sharedpage.module.css";
import ShareCard from "../../../components/shareCard/ShareCard";
import { Folder } from "../../../types/types";
import { FOLDER_ENDPOINT, instance } from "../../../api/services/config";
import useUserStore from "@/hooks/useStore";
import { useRouter } from "next/router";

export default function SharedPage() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const { user } = useUserStore();
  const [links, setLinks] = useState([]);
  const router = useRouter();
  const { folderId } = router.query;
  const folderName = folders[0]?.name;

  const getFolders = async () => {
    const res = await instance.get(`${FOLDER_ENDPOINT}/${folderId}`);
    const nextFolders = res?.data.data.folder;
    setFolders(nextFolders);
  };

  const getLinks = async (userId: number) => {
    const res = await instance.get(
      `/api/users/${userId}/links/?folderId=${folderId}`
    );
    const nextLinks = res.data.data.links;
    setLinks(nextLinks);
  };

  useEffect(() => {
    getFolders();
  }, []);

  useEffect(() => {
    getLinks(user[0].id);
  }, []);

  return (
    <>
      <Header folderName={folderName} />
      <main className={styles.main}>
        <section className={styles.contentSection}>
          <div className={styles.container}>
            {/* <SearchBar onKeyUp={handleSearchInputChange}/> */}
            <div className={styles.linksContainer}>
              {links?.map((item: any) => (
                <ShareCard key={item.id} linkInfo={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
