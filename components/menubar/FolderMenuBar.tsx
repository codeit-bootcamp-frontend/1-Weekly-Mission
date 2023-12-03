import React, { useContext, useState } from "react";
import styles from "./FolderMenu.module.css";
import LocaleContext from "../../contexts/LocaleContext";
import Modal from "@/components/modal/Modal";
import Image from "next/image";

type FolderMemuProps = {
  folderIdKey: string | undefined;
};

export default function FolderMenu({ folderIdKey }: FolderMemuProps) {
  const [openModal, setOpenModal] = useState(false);
  const [tabName, setTabName] = useState("");
  const { ObjectValue } = useContext(LocaleContext);

  const folder = folderIdKey ? ObjectValue[folderIdKey] : undefined;

  // const folder = ObjectValue[folderIdKey];
  const folderName = folder?.folderName || "전체";

  const isSelected = typeof folder !== "undefined";

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleTab = (e: React.MouseEvent<HTMLDivElement>) => {
    setTabName(e.target.alt);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{folderName}</p>
      {isSelected && (
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
            <Image
              src="/images/delete.png"
              width={40}
              height={20}
              alt="delete"
            />
          </div>
        </div>
      )}

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
