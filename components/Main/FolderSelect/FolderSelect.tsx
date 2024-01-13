import FolderAddFloat from "@/components/Main/FolderSelect/FolderAddFloat";
import FolderController from "@/components/Main/FolderSelect/FolderController";
import { IhandleModal } from "@/components/Main/FolderSelect/FolderSelect.type";
import FolderTabs from "@/components/Main/FolderSelect/FolderTabs";
import useModal from "@/hooks/useModal";
import { useState } from "react";

export default function FolderSelect() {
  const [title, setTitle] = useState("전체");
  const { modal, dispatch } = useModal();

  const handleModal: IhandleModal = (e) => {
    const title = e.currentTarget.parentElement?.title ?? "";
    const type = e.currentTarget.textContent ?? "";
    dispatch({ title, type });
  };

  return (
    <>
      <FolderTabs setTitle={setTitle} handleModal={handleModal} />
      <FolderController title={title} handleModal={handleModal} />
      <FolderAddFloat handleModal={handleModal} />
      {modal}
    </>
  );
}
