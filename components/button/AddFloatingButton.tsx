import styled from "styled-components";
import FolderAddWhIcon from "@/public/assets/button/img_add.png";
import { device } from "@/styles/globalStyle";
import Image from "next/image";
import { modalState } from "@/recoil/modal";
import { useRecoilState } from "recoil";

const AddFloatingBtn = () => {
  const [, setModalOpened] = useRecoilState(modalState);

  return (
    <AddFloatingBtnContainer
      onClick={() =>
        setModalOpened((prev: any) => ({
          ...prev,
          defaultModal: {
            display: true,
            content: {
              id: 0,
              title: "",
            },
            state: "folderAdd",
          },
        }))
      }
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

export default AddFloatingBtn;

const AddFloatingBtnContainer = styled.div`
  display: none;

  @media all and (${device.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 2.4rem;
    border-radius: 2rem;
    border: 1px solid #fff;
    background: var(--primary);
    width: fit-content;
    height: 3.7rem;
    box-sizing: border-box;
    gap: 0.4rem;
    position: fixed;
    z-index: 5;
    bottom: 10.1rem;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, 0);

    .floatingBtnTitle {
      color: var(--gray10);
      text-align: center;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: -0.3px;
    }
  }
`;
