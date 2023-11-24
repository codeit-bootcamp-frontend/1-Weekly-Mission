import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardButton, MenuTitle, Modal, ModalForm } from "component";
import useModal from "hooks/useModal.js";
import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import { ReactComponent as AddImg } from "assets/add.svg";
import * as S from "./CardMenuBar.style.js";

export default function CardMenuBar({ folders }) {
  const { folderId } = useParams();
  const { isOpen, openModal, closeModal } = useModal();
  const option = { input: true, button: { title: "추가하기", color: "blue" } };
  const [selectedFolder, setSelectedFolder] = useState(
    folderId ? parseInt(folderId) : null
  );

  const ChangeTitle = () => {
    if (!folderId) {
      setSelectedFolder(null);
      return;
    }
    const matchedFolder = folders.find(
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
    setSelectedFolder(folderId ? parseInt(folderId) : null);
    ChangeTitle();
  }, [folderId, folders]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <S.Container>
          <S.Ul>
            <Link to="/folder">
              <li>
                <S.Button active={selectedFolder === null}>전체</S.Button>
              </li>
            </Link>
            {folders.map((folder) => (
              <CardButton folder={folder} key={folder.id} folderId={folderId} />
            ))}
          </S.Ul>
          <span onClick={handleButtonClick}>
            폴더 추가<AddImg alt="폴더추가" fill="#6D6AFE"></AddImg>
          </span>
        </S.Container>
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
