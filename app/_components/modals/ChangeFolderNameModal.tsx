"use client";

import { QueryClient, useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import API from "@/service/api";
import Modal from "./Modal";

interface ChangeFolderNameProps {
  folderId: number;
  newFolderName: string;
}

interface Props {
  folderId: number;
  folderName: string;
}

const ChangeFolderNameModal = ({ folderId, folderName }: Props) => {
  const queryClient = new QueryClient();
  const [newFolderName, setNewFolderName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewFolderName(e.target.value);
  };

  const changeFolderName = useMutation({
    mutationFn: ({ folderId, newFolderName }: ChangeFolderNameProps) => API.folder.changeFolderName(folderId, { name: newFolderName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
  });

  const handleSubmit = () => {
    changeFolderName.mutate({ folderId, newFolderName });
  };

  return (
    <>
      <Modal.Title>폴더 이름 변경</Modal.Title>
      <Modal.Input placeholder={folderName} onChange={handleChange} />
      <Modal.PrimaryButton onClick={handleSubmit}>변경하기</Modal.PrimaryButton>
    </>
  );
};

export default ChangeFolderNameModal;
