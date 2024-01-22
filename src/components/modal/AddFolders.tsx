import { ChangeEvent, useEffect, useState } from "react";
import styles from "./modalStyles/AddFolders.module.css";

import ModalButton from "@/components/button/ModalButton";
import ModalTitle from "./ModalTitle";

import { mutate } from "swr";
import { DOMAIN_URL } from "@/common/constants";

interface AddFoldersProps {
  onClose: () => void;
}

export default function AddFolders({ onClose }: AddFoldersProps) {
  const [accessToken, setAccessToken] = useState<string | null>();
  const [folderName, setFolderName] = useState("");

  const fetcher = async (url: string, name: string) => {
    if (accessToken) {
      return await fetch(`${DOMAIN_URL}${url}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ name }),
      }).then(() => mutate("/folders"));
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const handleCreateFolder = async () => {
    try {
      await fetcher("/folders", folderName);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, [accessToken]);

  return (
    <>
      <ModalTitle label="폴더 추가" />
      <div className={styles.contents}>
        <input className={styles.input} placeholder="내용 입력" onChange={handleChangeInput} />
        <ModalButton action="change" label="추가하기" onClick={handleCreateFolder} />
      </div>
    </>
  );
}
