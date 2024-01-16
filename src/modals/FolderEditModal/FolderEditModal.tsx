import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { editFolder } from "@/api/getFolderCRUDApi";
import ModalCreator from "@/modals/ModalCreator";
import { FolderAddFormType } from "@/types/FormType";

import styles from "./FolderEditModal.module.scss";
import useToast from "@/hooks/useToast";

interface FolderEditModalProps {
  folderId: string;
  folderTitle: string;
  onBlur: () => void;
}

function FolderEditModal({
  folderId,
  folderTitle,
  onBlur,
}: FolderEditModalProps) {
  const { register, handleSubmit, getValues } = useForm<FolderAddFormType>({
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });

  const queryClient = useQueryClient();

  const { mutate: editFolderMutation } = useMutation({
    mutationFn: (data: { folderId: string; name: string }) =>
      editFolder(data.folderId, data.name),
    onError: () => {
      useToast(false, "폴더 이름 변경에 실패했어요!");
    },
    onSuccess: () => {
      useToast(true, "폴더 이름이 변경되었어요!");
      onBlur();
      queryClient.invalidateQueries(["folder-list"]);
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
      <div className={styles["modal-content"]}>
        <button className={styles["close-button"]} onClick={onBlur}>
          x
        </button>
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
      </div>
    </ModalCreator>
  );
}

export default FolderEditModal;
