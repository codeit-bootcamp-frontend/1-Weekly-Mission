import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import * as S from "./modalStyles/DeleteFolderStyles";

import ModalTitle from "./ModalTitle";
import ModalButton from "@/components/button/ModalButton";

import { DOMAIN_URL } from "@/common/constants";
import { FolderContext } from "@/context/SelectedFolderContext";

interface DeleteFolderProps {
  selectedItem: string;
  linkId?: number;
  label: string;
  onClose: () => void;
}

export default function DeleteFolder({ selectedItem, linkId, label, onClose }: DeleteFolderProps) {
  const router = useRouter();
  const folderId = router.query.id;
  const [accessToken, setAccessToken] = useState<string | null>();
  const { updateFolderName } = useContext(FolderContext);

  const fetcher = async (url: string) => {
    if (accessToken) {
      return await fetch(`${DOMAIN_URL}${url}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
  };

  const handleDeleteLink = async () => {
    try {
      await fetcher(`/links/${linkId}`);
      mutate("/links");
      mutate(`/folders/${folderId}/links`);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFolder = async () => {
    try {
      await fetcher(`/folders/${folderId}`);
      mutate("/folders");
      updateFolderName("");
      router.push("/folder");
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
    <S.Contents>
      <S.Description>
        <ModalTitle label={`${label} 삭제`} />
        <S.Info>{selectedItem}</S.Info>
      </S.Description>
      <ModalButton
        action="delete"
        label="삭제하기"
        onClick={label === "폴더" ? handleDeleteFolder : handleDeleteLink}
      />
    </S.Contents>
  );
}
