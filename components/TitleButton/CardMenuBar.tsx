import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { CardButton, MenuTitle, Modal, ModalForm } from "@/components";
import useModal from "@/public/useModal";
import axios from "@/lib/axios";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/display";
import AddPurpleImg from "@/src/assets/addpurple.svg";
import * as Style from "./CardMenuBar.style";

export default function CardMenuBar() {
  const router = useRouter();
  const {folderId} = router.query;
  const option = { input: true, button: { title: "추가하기", color: "blue" } };
  const { isOpen, openModal, closeModal } = useModal();
  const [folderName, setFolderName] = useState()
  const [selectedFolder, setSelectedFolder] = useState(folderId ? parseInt(folderId) : null);

  async function getFolders () {
    const result = await axios.get("/users/1/folders");
    const folders = result.data.data;
    setFolderName(folders);
  }

  const ChangeTitle = () => {
    if (!folderId) {
      setSelectedFolder(null);
      return;
    }
    const matchedFolder = folderName.find(
      (folder) => folder.id === parseInt(folderId)
    );
    if (matchedFolder) {
      setSelectedFolder(matchedFolder.name);
    } else {
      setSelectedFolder("폴더를 찾을 수 없음");
    }
  };

  const handleButtonClick = () => {
    openModal();
  };

  useEffect(() => {
    getFolders();
  }, [])

  useEffect(() => {
    setSelectedFolder(folderId ? parseInt(folderId) : null);
    ChangeTitle();
  }, [folderId, folderName]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Style.Container>
          <Style.Ul>
            <Link href="/folder">
              <li>
                <Style.Button active={selectedFolder === null}>전체</Style.Button>
              </li>
            </Link>
            {folderName?.map((folder) => (
              <CardButton folder={folder} key={folder.id} folderId={folderId} />
            ))}
          </Style.Ul>
          <span onClick={handleButtonClick}>
            폴더 추가<Image src={AddPurpleImg} alt="폴더추가" />
          </span>
        </Style.Container>
        <MenuTitle title={selectedFolder ? selectedFolder : "전체"} />
      </ThemeProvider>
      {isOpen && (
        <Modal
          title="폴더추가"
          closeModal={closeModal}
          trigger={<ModalForm subTitle="내용입력" option={option} />}
        />
      )}
    </>
  );
}
