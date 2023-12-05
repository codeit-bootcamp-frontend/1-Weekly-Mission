import FolderAddWhIcon from "@/public/assets/button/img_add.png";
import Image from "next/image";
import { modalState } from "@/recoil/modal";
import { useRecoilState } from "recoil";
import { AddFloatingBtnContainer } from "./buttonStyled";

interface AddFloatingButtonProp {
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const AddFloatingButton = ({ setModalType }: AddFloatingButtonProp) => {
  const [, setModalOpened] = useRecoilState(modalState);

  return (
    <AddFloatingBtnContainer
      onClick={() => {
        setModalType("folderAdd");
        setModalOpened((prev: any) => ({
          ...prev,
          enterModal: {
            display: true,
          },
        }));
      }}
    >
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
