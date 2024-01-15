import { useState } from "react";
import Input from "@/components/input/Input";
import DefaultModalLayout from "./defaultModalLayout/DefaultModalLayout";
import GradientButton from "@/components/button/GradientButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFolders, putFolders } from "@/lib/api/folder";
import { useResetRecoilState } from "recoil";
import { modalState } from "@/recoil/modal";

interface DeleteModalProp {
  title: string;
  content: {
    id: number;
    title: string;
  };
}

const EnterModal = ({ title, content }: DeleteModalProp) => {
  const [folderName, setFolderName] = useState(content.title);
  const resetModalState = useResetRecoilState(modalState);
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: () =>
      content.title
        ? putFolders(content.id, { name: folderName })
        : postFolders({ name: folderName }),
    onSuccess: () => {
      resetModalState();
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
  });

  return (
    <DefaultModalLayout
      title={title}
      buttonItem={
        <GradientButton onClick={() => addMutation.mutate()}>
          {content.title ? "변경하기" : "추가하기"}
        </GradientButton>
      }
      inputItem={
        <Input
          label="contentInput"
          placeholder={"내용 입력"}
          value={folderName}
          setValue={setFolderName}
        />
      }
    />
  );
};

export default EnterModal;
