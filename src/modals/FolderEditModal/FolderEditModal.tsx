import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { editFolder } from "@/api/getFolderCRUDApi";
import useToast from "@/hooks/useToast";
import ModalCreator from "@/modals/ModalCreator";
import { useModalStore } from "@/store/ModalStore";
import { FolderAddFormType } from "@/types/FormType";

import styles from "./FolderEditModal.module.scss";

interface FolderEditModalProps {
  folderId: string;
  folderTitle: string;
}

export default function FolderEditModal({
  folderId,
  folderTitle,
}: FolderEditModalProps) {
  const { register, handleSubmit, getValues } = useForm<FolderAddFormType>({
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });
  const hideModal = useModalStore((state) => state.hideModal);
  const queryClient = useQueryClient();

  const { mutate: editFolderMutation } = useMutation({
    mutationFn: (data: { folderId: string; name: string }) =>
      editFolder(data.folderId, data.name),
    onError: () => {
      useToast(false, "폴더 이름 변경에 실패했어요!");
    },
    onSuccess: () => {
      useToast(true, "폴더 이름이 변경되었어요!");
      hideModal();
      queryClient.invalidateQueries({ queryKey: ["folder-list"] });
    },
  });

  const clickSubmitButton: SubmitHandler<FolderAddFormType> = () => {
    const nameValue = getValues("name");
    if (nameValue) {
      editFolderMutation({ folderId: folderId, name: nameValue });
    } else return;
  };

  return (
    <ModalCreator>
      <h2 className={styles["modal-title"]}>폴더 이름 변경</h2>
      <form onSubmit={handleSubmit(clickSubmitButton)}>
        <input
          id="name"
          className={styles["modal-input"]}
          type="text"
          placeholder={folderTitle}
          {...register("name")}
        />
        <button className={styles["modal-button"]}>변경하기</button>
      </form>
    </ModalCreator>
  );
}
