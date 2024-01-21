"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import API from "@/service/api";
import { removeQueryString } from "@/utils/handleQueryString";
import Modal from "./Modal";

interface Props {
  folderId: number;
}

const DeleteFolderModal = ({ folderId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const queryClient = useQueryClient();

  const deleteFolder = useMutation({
    mutationFn: (folderId: number) => API.folder.deleteFolder(folderId),
  });

  const handleSubmit = () => {
    deleteFolder.mutate(folderId);
    const query = removeQueryString("folderId", params);
    router.push(`${pathname}?${query}`);
    setTimeout(() => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    }, 500);
  };

  return (
    <>
      <Modal.Title>폴더 삭제</Modal.Title>
      <Modal.SecondaryButton onClick={handleSubmit}>삭제하기</Modal.SecondaryButton>
    </>
  );
};

export default DeleteFolderModal;
