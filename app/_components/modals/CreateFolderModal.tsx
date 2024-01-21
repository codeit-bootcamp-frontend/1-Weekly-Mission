"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import API from "@/service/api";
import { ReqPostFolders } from "@/types/apiType";
import Modal from "./Modal";

const CreateFolderModal = () => {
  const queryClient = useQueryClient();
  const [newFolderName, setNewFolderName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewFolderName(e.target.value);
  };

  const createFolder = useMutation({
    mutationFn: (name: string) => API.folder.createFolder(name),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["folders"] }),
  });

  const handleSubmit = () => {
    createFolder.mutate(newFolderName);
  };

  return (
    <>
      <Modal.Title>폴더 추가</Modal.Title>
      <Modal.Input placeholder="내용 입력" onChange={handleChange} />
      <Modal.PrimaryButton onClick={handleSubmit}>추가하기</Modal.PrimaryButton>
    </>
  );
};

export default CreateFolderModal;
