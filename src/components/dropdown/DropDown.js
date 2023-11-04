import React, { useContext, useEffect, useState } from "react";
import styles from "./DropDown.module.css";
import HeaderModal from "../../common/modal/HeaderModal";

import Modal from "../../common/modal/Modal";
import LocaleContext from "../../contexts/LocaleContext";
import { useLocation } from "react-router-dom";
import { fetchUserLinks } from "../../api/users";
export default function DropDown() {
  const [openAddModal, setOpenModal] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);
  const [arr, setArr] = useState([]);
  // const localeValue = useContext(LocaleContext); // obj
  const location = useLocation();
  const findNum = location.pathname.replace("/folder/", "");
  // const folderName = localeValue[findNum]?.folderName || "전체";
  // https://bootcamp-api.codeit.kr/api/users/1/links?folderId=16

  const USER_ID = 1;
  const folder_ID = findNum;

  // useEffect(() => {
  //   fetchUserLinks({ userId: USER_ID, folderId: folder_ID }).then((data) =>
  //     setArr(data?.data)
  //   );
  // }, [folder_ID]);

  const handleModal = (e) => {
    e.stopPropagation();
    setOpenModal(true);
  };

  const handleDeleteModal = (e) => {
    e.stopPropagation();
    setDeleteModal(true);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.sub__container}>
        <li onClick={handleDeleteModal}>삭제하기</li>
        {openDeleteModal && (
          <Modal setterFunc={setDeleteModal} tabName="deleteLink"></Modal>
        )}

        {/* 아래처럼 하면은 검정색 배경화면이 뜸..ㅎ */}
        {/* {openDeleteModal &&
          arr.map((item) => (

            <li key={item.id}>
              <Modal
                setterFunc={setDeleteModal}
                tabName="deleteLink"
                linkName={item?.url}
              />
            </li>
          ))} */}
        <li onClick={handleModal}>폴더에추가하기</li>
        {openAddModal && <HeaderModal setterFunc={setOpenModal} />}
      </ul>
    </div>
  );
}
