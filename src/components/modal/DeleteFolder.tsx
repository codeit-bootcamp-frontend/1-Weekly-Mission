import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import * as S from "./modalStyles/DeleteFolderStyles";

import ModalTitle from "./ModalTitle";
import ModalButton from "@/components/button/ModalButton";

import { DOMAIN_URL } from "@/common/constants";

interface DeleteFolderProps {
  selectedItem: string;
  id: number;
  label: string;
  onClose: () => void;
}

export default function DeleteFolder({ selectedItem, id, label, onClose }: DeleteFolderProps) {
  const router = useRouter();
  const folderId = router.query.id;
  const [accessToken, setAccessToken] = useState<string | null>();

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
      await fetcher(`/links/${id}`);
      mutate("/links");
      mutate(`/folders/${folderId}/links`);
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
      <ModalButton action="delete" label="삭제하기" onClick={handleDeleteLink} />
    </S.Contents>
  );
}
