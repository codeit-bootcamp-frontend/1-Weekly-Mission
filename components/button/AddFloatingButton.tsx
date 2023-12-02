import styled from "styled-components";
import FolderAddWhIcon from "@/public/assets/button/img_add.png";
import { device } from "@/styles/globalStyle";
import Image from "next/image";

const AddFloatingBtn = () => {
  return (
    <AddFloatingBtnContainer>
      <div className="floatingBtnTitle">폴더 추가</div>
      <Image
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
