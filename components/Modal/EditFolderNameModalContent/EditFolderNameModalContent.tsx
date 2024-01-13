import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import styles from "./EditFolderNameModalContent.module.css";

import ModalButton from "../ModalButton/ModalButton";
import ModalTitle from "../ModalTitle/ModalTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "@/lib/axios";
import { useFolderId } from "@/contexts/UserContext";

interface Props {
  currentFolderName: string;
  setCurrentFolderName: Dispatch<SetStateAction<string>>;
  onClose: () => void;
}

function EditFolderNameModalContent({
  currentFolderName,
  setCurrentFolderName,
  onClose,
}: Props) {
  const folderId = useFolderId();
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState(currentFolderName);

  const editFolderNameMutation = useMutation({
    mutationFn: async () => {
      const response = await fetcher<UserFolders[]>({
        url: `/folders/${folderId}`,
        method: "put",
        data: { name: inputValue },
      });
      return response.data;
    },
    onSuccess: () => {
      setCurrentFolderName(inputValue);
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
    onError: (error) => {
      const errorResponse = (error as any).response;
      window.alert(errorResponse?.data.message);

      if (onClose) {
        onClose();
      }
    },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEditFolderName = () => {
    editFolderNameMutation.mutate();
    onClose();
  };

  return (
    <>
      <ModalTitle>폴더 이름 변경</ModalTitle>
      <div className={styles.container}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="내용 입력"
        />
        <ModalButton color="blue" onClick={handleEditFolderName}>
          변경하기
        </ModalButton>
      </div>
    </>
  );
}

export default EditFolderNameModalContent;
