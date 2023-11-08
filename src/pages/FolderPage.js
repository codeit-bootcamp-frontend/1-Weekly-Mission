import { useState, useEffect } from "react";
import { styled } from "styled-components";

import Layout from "../layout/Layout";
import HeroContainer from "../layout/HeroContainer";
import Search from "../components/Search";
import FolderButtons from "../components/FolderButtons";
import LinkAdderButton from "../components/LinkAdderButton";
import Modal from "../components/Modal";

import getUserData from "../api/getUserData";
import { getFolderList } from "../api/getUserFolderData";

import "../styles/shared.css";

function FolderPage() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [userData, setUserData] = useState({});
  const [userFolderListData, setUserFolderListData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_user = await getUserData();
        const res_folderList = await getFolderList();
        setUserData(res_user);
        setUserFolderListData(res_folderList);
      } catch (error) {
        throw new Error(
          "사용자 계정 정보, 사용자 폴더리스트 정보 가져오기 실패"
        );
      }
    };

    fetchData();
  }, []);

  const toggleModal = (b) => {
    setModal(b);
  };

  const getModalData = (o) => {
    setModalData(o);
  };

  return (
    <>
      {modal && <Modal data={modalData}></Modal>}
      {!modal && (
        <Layout userData={userData}>
          <HeroContainer>
            <LinkAdderButton></LinkAdderButton>
          </HeroContainer>
          <Search></Search>
          <FolderButtons
            folders={userFolderListData}
            toggleModal={toggleModal}
            getModalData={getModalData}
          />
        </Layout>
      )}
    </>
  );
}

export default FolderPage;
