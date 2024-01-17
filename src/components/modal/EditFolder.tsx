import { useRouter } from "next/router";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { mutate } from "swr";
import * as S from "./modalStyles/EditFolderStyles";

import ModalTitle from "./ModalTitle";
import ModalButton from "@/components/button/ModalButton";

import { DOMAIN_URL } from "@/common/constants";
import { FolderContext } from "@/context/SelectedFolderContext";

interface EditFolderProps {
  currentFolderName: string;
  onClose: () => void;
}

export default function EditFolder({ currentFolderName, onClose }: EditFolderProps) {
  const router = useRouter();
  const folderId = router.query.id;

  const [accessToken, setAccessToken] = useState<string | null>();
  const [folderName, setFolderName] = useState("");

  const { updateFolderName } = useContext(FolderContext);

  const fetcher = async (url: string, name: string) => {
    if (accessToken) {
      return await fetch(`${DOMAIN_URL}${url}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ name }),
      }).then((res) => res.json());
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const handleEditFolder = async () => {
    try {
      const result = await fetcher(`/folders/${folderId}`, folderName);
      mutate(`/folders`);
      updateFolderName(result[0].name);
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
      <ModalTitle label="폴더 이름 변경" />
      <S.Contents>
        <S.Input
          placeholder="내용 입력"
          defaultValue={currentFolderName}
          onChange={handleChangeInput}
        />
        <ModalButton action="change" label="변경하기" onClick={handleEditFolder} />
      </S.Contents>
    </>
  );
}
