import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ModalCreator from "@/modals/ModalCreator";
import { FolderAddFormType } from "@/types/FormType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./FolderAddModal.module.scss";
import createFolder from "@/api/createFolder";

interface ModalProps {
  onBlur: () => void;
}

export default function FolderAddModal({ onBlur }: ModalProps) {
  const { register, handleSubmit, getValues } = useForm<FolderAddFormType>({
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });

  const queryClient = useQueryClient();

  const { mutate: createFolderMutation } = useMutation({
    mutationFn: (name: string) => createFolder(name),
    onError: () => {
      toast.error("폴더 생성에 실패했습니다!");
    },
    onSuccess: () => {
      toast.success("폴더가 생성되었습니다!");
      onBlur();
      // BUG 왜시발!
      // BUG 배경 누르면 왜안꺼져!!
      queryClient.invalidateQueries(["folder-list"]);
    },
  });

  const clickSubmitButton: SubmitHandler<FolderAddFormType> = () => {
    const nameValue = getValues("name");
    if (nameValue) {
      createFolderMutation(nameValue);
    } else return;
  };

  return (
    <ModalCreator>
      <div className={styles["modal-content"]}>
        <button className={styles["close-button"]} onClick={onBlur}>
          x
        </button>
        <h2 className={styles["modal-title"]}>폴더 추가</h2>
        <form onSubmit={handleSubmit(clickSubmitButton)}>
          <input
            id="name"
            className={styles["modal-input"]}
            type="text"
            placeholder="내용 입력"
            {...register("name")}
          />
          <button className={styles["modal-button"]}>추가하기</button>
        </form>
      </div>
    </ModalCreator>
  );
}
