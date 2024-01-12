import React from "react";
import Header from "../../../components/header/Header";
import styles from "./sharedpage.module.css";
import ShareCard from "../../../components/shareCard/ShareCard";
import { USERS_ENDPOINT, instance } from "../../../api/services/config";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "@/utils/localStorage";
import { QUERY_KEYS } from "@/constants/queryKeys";

export default function SharedPage() {
  const router = useRouter();
  const folderId = Number(router.query.folderId);

  const getCurrentUser = async () => {
    try {
      const res = await instance.get(USERS_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      const { data } = res;
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const currentUser = useQuery({
    queryKey: [QUERY_KEYS.CURRENT_USER],
    queryFn: getCurrentUser,
  });
  const userId = currentUser.data?.length > 0 ? currentUser?.data[0]?.id : "";

  const getFolders = async () => {
    const res = await instance.get(`folders/${folderId}`);
    const { data } = res;
    return data;
  };

  const folderData = useQuery({
    queryKey: [QUERY_KEYS.FOLDERS, folderId],
    queryFn: getFolders,
  });
  const folders = folderData.data;
  const folderName = folders?.length > 0 ? folders[0]?.name : "";

  const getLinks = async (folderId: number) => {
    const res = await instance.get(`/folders/${folderId}/links`);
    const { data } = res;
    return data;
  };

  const linksData = useQuery({
    queryKey: [QUERY_KEYS.LINKS, folderId],
    queryFn: () => getLinks(folderId),
  });
  const links = linksData.data;

  const getUser = async () => {
    const res = await instance.get(`/users/${userId}`);
    const { data } = res;
    return data;
  };

  const user = useQuery({
    queryKey: [QUERY_KEYS.USER, userId],
    queryFn: getUser,
  });

  return (
    <>
      <Header folderName={folderName} user={user.data} />
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
