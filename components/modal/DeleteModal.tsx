import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../button/Button";
import DefaultModalLayout from "./defaultModalLayout/DefaultModalLayout";
import { deleteFolder, deleteLinks } from "@/lib/api/folder";
import { useResetRecoilState } from "recoil";
import { modalState } from "@/recoil/modal";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

interface DeleteModalProp {
  title: string;
  content: {
    id: number;
    title?: string;
    url?: string;
  };
  type: string;
}

const DeleteModal = ({ title, content, type }: DeleteModalProp) => {
  const resetModalState = useResetRecoilState(modalState);
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteMutation = useMutation({
    mutationFn: () =>
      type === "linkDelete"
        ? deleteLinks(content.id)
        : deleteFolder(content.id),
    onSuccess: () => {
      resetModalState();
      queryClient.invalidateQueries({ queryKey: ["linksId"] });
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
    onError: (error: AxiosError) => {
      resetModalState();
      if (error.response?.status === 403) {
        alert("권한이 없습니다.");
        return;
      }
      if (error.response?.status === 401) {
        alert("로그인이 필요한 서비스입니다.");
        router.push("/login");
        return;
      }
      alert(`${title} 실패하였습니다. 다시 시도해주세요.`);
    },
  });

  return (
    <DefaultModalLayout
      title={title}
      buttonItem={
        <Button onClick={() => deleteMutation.mutate()}>삭제하기</Button>
      }
      subTitle={content.title || content.url}
    />
  );
};

export default DeleteModal;
