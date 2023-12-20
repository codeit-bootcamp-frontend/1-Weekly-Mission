import React, { useState } from "react";
import styles from "./FolderMenu.module.css";
import Modal from "@/components/modal/Modal";
import Image from "next/image";
import { useRouter } from "next/router";
import { FolderMenuBarData } from "@/types/folderMenuBarTypes";
type TabName = "share" | "change" | "delete" | "deleteLink";

export default function FolderMenuBar({
  folderIdKey,
  data,
}: {
  folderIdKey: string;
  data?: FolderMenuBarData;
}) {
  const [openModal, setOpenModal] = useState(false);
  const [tabName, setTabName] = useState<TabName>("share");

  const router = useRouter();
  const { folderId } = router.query;
  const folderName = !folderId ? "전체" : data?.[folderIdKey].folderName;

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleTab = (e: React.MouseEvent<HTMLDivElement>) => {
    const altAttribute = (e.target as HTMLImageElement).alt as TabName;
    setTabName(altAttribute);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{folderName}</p>
      <div className={styles.images__container}>
        <div
          onClick={(e) => {
            handleTab(e);
            handleModal();
          }}
        >
          <Image src="/images/share.png" width={40} height={20} alt="share" />
        </div>
        <div
          onClick={(e) => {
            handleTab(e);
            handleModal();
          }}
        >
          <Image
            src="/images/namechange.png"
            width={60}
            height={20}
            alt="change"
          />
        </div>
        <div
          onClick={(e) => {
            handleTab(e);
            handleModal();
          }}
        >
          <Image src="/images/delete.png" width={40} height={20} alt="delete" />
        </div>
      </div>
      {openModal && (
        <Modal
          setterFunc={setOpenModal}
          tabName={tabName}
          folderName={folderName}
        />
      )}
    </div>
  );
}
