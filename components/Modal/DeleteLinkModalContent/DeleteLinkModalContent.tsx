import { ReactNode } from "react";

import styles from "./DeleteLinkModalContent.module.css";

import ModalButton from "../ModalButton/ModalButton";
import ModalTitle from "../ModalTitle/ModalTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "@/lib/axios";
import { UserFolders } from "@/@types/folder.types";

interface Props {
  linkId: number;
  onClose: () => void;
  children: ReactNode;
}

function DeleteLinkModalContent({ linkId, onClose, children }: Props) {
  const queryClient = useQueryClient();
  const linkDeleteMutation = useMutation({
    mutationFn: async () => {
      const response = await fetcher<UserFolders[]>({
        url: `/links/${linkId}`,
        method: "delete",
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
    onError: () => {
      onClose();
    },
  });

  const handleLinkDelete = () => {
    if (linkId) {
      linkDeleteMutation.mutate();
      onClose();
    }
  };
  return (
    <div className={styles.deleteLinkModal}>
      <ModalTitle>링크 삭제</ModalTitle>
      <div className={styles.container}>
        <p className={styles.folderName}>{children}</p>
        <ModalButton color="red" onClick={handleLinkDelete}>
          삭제하기
        </ModalButton>
      </div>
    </div>
  );
}

export default DeleteLinkModalContent;
