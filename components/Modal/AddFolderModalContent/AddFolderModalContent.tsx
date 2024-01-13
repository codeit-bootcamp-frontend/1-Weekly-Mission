import styles from "./AddFolderModalContent.module.css";

import ModalButton from "../ModalButton/ModalButton";
import ModalTitle from "../ModalTitle/ModalTitle";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "@/lib/axios";

interface Props {
  onClose: () => void;
}

function AddFolderModalContent({ onClose }: Props) {
  const queryClient = useQueryClient();
  const [folderName, setFolderName] = useState("");

  const addFolderMutation = useMutation({
    mutationFn: async (newFolder: { name: string }) => {
      const response = await fetcher<UserFolders[]>({
        url: `/folders`,
        method: "post",
        data: newFolder,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
    onError: (error) => {
      const errorResponse = (error as any).response;
      window.alert(errorResponse?.data.message);
    },
  });

  const handleAddFolder = () => {
    if (folderName) {
      addFolderMutation.mutate({ name: folderName });
      onClose();
    }
  };

  return (
    <>
      <ModalTitle>폴더 추가</ModalTitle>
      <div className={styles.container}>
        <input
          className={styles.input}
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="내용 입력"
        />
        <ModalButton color="blue" onClick={handleAddFolder}>
          추가하기
        </ModalButton>
      </div>
    </>
  );
}

export default AddFolderModalContent;
