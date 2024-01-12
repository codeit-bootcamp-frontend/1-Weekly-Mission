import Image from "next/image";
import styles from "./optionButton.module.css";
import useModal from "@/hooks/useModal";
import { instance } from "@/api/services/config";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAccessToken } from "@/utils/localStorage";
import { QUERY_KEYS } from "@/constants/queryKeys";

interface OptionButtonProps {
  iconSrc: string;
  name: string;
  alt: string;
  folderName: string | undefined;
  folderId: number | string;
}

export default function OptionButton({
  iconSrc,
  name,
  alt,
  folderName,
  folderId,
}: OptionButtonProps) {
  const { open, close, Dialog, isModalOpen } = useModal();
  const [newName, setNewName] = useState("");
  const queryClient = useQueryClient();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const putFolderName = async (folderId: number | string) => {
    try {
      const res = await instance.put(
        `/folders/${folderId}`,
        {
          name: newName,
        },
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFolder = async (folderId: number | string) => {
    try {
      instance.delete(`/folders/${folderId}`, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFolderMutation = useMutation({
    mutationFn: () => deleteFolder(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FOLDER_NAMES] });
    },
  });

  const putFolderNameMutation = useMutation({
    mutationFn: () => putFolderName(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.FOLDER_NAMES],
      });
    },
  });

  return (
    <div className={styles.optionIconContainer} onClick={open} role="none">
      {name === "공유" ? (
        <Dialog isModalOpen={isModalOpen} onClick={close}>
          <Dialog.Title>폴더 공유</Dialog.Title>
          <Dialog.Link>{folderName}</Dialog.Link>
          <Dialog.IconsBox folderId={folderId} />
        </Dialog>
      ) : null}
      {name === "이름 변경" ? (
        <Dialog isModalOpen={isModalOpen} onClick={close}>
          <Dialog.Title>폴더 이름 변경</Dialog.Title>
          <Dialog.Input onChange={handleChange} />
          <Dialog.Button
            isAddButton
            onClick={() => putFolderNameMutation.mutate()}
          >
            변경하기
          </Dialog.Button>
        </Dialog>
      ) : null}
      {name === "삭제" ? (
        <Dialog isModalOpen={isModalOpen} onClick={close}>
          <Dialog.Title>폴더 삭제</Dialog.Title>
          <Dialog.Link>{folderName}</Dialog.Link>
          <Dialog.Button
            isAddButton={false}
            onClick={() => deleteFolderMutation.mutate()}
          >
            삭제하기
          </Dialog.Button>
        </Dialog>
      ) : null}
      <Image src={iconSrc} alt={alt} role="none" width={18} height={18} />
      <span>{name}</span>
    </div>
  );
}
