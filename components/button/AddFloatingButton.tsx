import FolderAddWhIcon from "@/public/assets/button/img_add.png";
import Image from "next/image";
import { AddFloatingBtnContainer } from "./buttonStyled";

interface AddFloatingButtonProp {
  onClick: (modalType: string) => void;
}

const AddFloatingButton = ({ onClick }: AddFloatingButtonProp) => {
  return (
    <AddFloatingBtnContainer onClick={() => onClick("folderAdd")}>
      <div className="floatingBtnTitle">폴더 추가</div>
      <Image
        width="16"
        height="16"
        className="floatingBtnIcon"
        src={FolderAddWhIcon}
        alt="folderAddIcon"
      />
    </AddFloatingBtnContainer>
  );
};

export default AddFloatingButton;
