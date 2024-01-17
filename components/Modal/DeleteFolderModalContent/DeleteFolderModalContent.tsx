import { ReactNode } from "react";

import styles from "./DeleteFolderModalContent.module.css";

import ModalButton from "../ModalButton/ModalButton";
import ModalTitle from "../ModalTitle/ModalTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "@/lib/axios";
import { useFolderId, useSetFolderId } from "@/contexts/UserContext";
import { useRouter } from "next/router";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

function DeleteFolderModalContent({ onClose, children }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const folderId = useFolderId();
  const setFolderId = useSetFolderId();

  const deleteFolderMutation = useMutation({
    mutationFn: async () => {
      const response = await fetcher<UserFolders[]>({
        url: `/folders/${folderId}`,
        method: "delete",
      });
      return response.data;
    },
    onSuccess: () => {
      router.push("/folder/all");
      setFolderId("all");
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
    onError: (error) => {
      const errorResponse = (error as any).response;
      window.alert(errorResponse?.data.message);
    },
  });

  const handleDeleteFolder = () => {
    deleteFolderMutation.mutate();
    onClose();
  };

  return (
    <div className={styles.deleteFolderModal}>
      <ModalTitle>폴더 삭제</ModalTitle>
      <div className={styles.container}>
        <p className={styles.folderName}>{children}</p>
        <ModalButton color="red" onClick={handleDeleteFolder}>
          삭제하기
        </ModalButton>
      </div>
    </div>
  );
}

export default DeleteFolderModalContent;
