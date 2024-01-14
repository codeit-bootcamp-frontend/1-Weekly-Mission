import { modalState } from "../../../recoil/modal";
import { useResetRecoilState } from "recoil";
import { useState } from "react";
import CloseIcon from "@/public/assets/modal/img_closeIcon.png";
import CheckIcon from "@/public/assets/modal/img_checkIcon.png";
import Image from "next/image";
import { ModalMainContainer } from "../ModalStyledComponents";
import { FolderContainer } from "./addToFolderModalStyled";
import GradientButton from "@/components/button/GradientButton";
import { FolderData, SelectedFolder } from "@/components/folder/folderLayout";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLinks } from "@/lib/api/folder";

interface AddToFolderModalProp {
  folderData: FolderData[];
  selectedFolderItem: SelectedFolder;
  link: string;
}

const AddToFolderModal = ({
  folderData,
  selectedFolderItem,
  link,
}: AddToFolderModalProp) => {
  const resetModalState = useResetRecoilState(modalState);
  const queryClient = useQueryClient();

  const [selectedFolder, setSelectedFolder] = useState(selectedFolderItem.id);

  const addMutation = useMutation({
    mutationFn: () => postLinks({ url: link, folderId: selectedFolder }),
    onSuccess: () => {
      resetModalState();
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });

  return (
    <ModalMainContainer>
      <Image
        src={CloseIcon}
        className="closeIcon"
        alt="closeIcon"
        onClick={resetModalState}
        width="24"
        height="24"
      />

      <div className="modalTitleContainer">
        <div className="title">폴더에 추가</div>
        <div className="link">{link}</div>
      </div>

      <div className="modalContentContainer">
        {folderData.map((e) => {
          return (
            <FolderContainer
              $active={e.id === selectedFolder}
              key={e.id}
              onClick={() => setSelectedFolder(e.id)}
            >
              <div className="title">{e.name}</div>
              <div className="linkNum">{e.link_count}개 링크</div>
              <Image
                width="14"
                height="14"
                src={CheckIcon}
                className="checkIcon"
                alt="checkIcon"
              />
            </FolderContainer>
          );
        })}
      </div>

      <GradientButton onClick={() => addMutation.mutate()}>
        추가하기
      </GradientButton>
    </ModalMainContainer>
  );
};

export default AddToFolderModal;
