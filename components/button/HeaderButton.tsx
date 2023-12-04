import React, { useContext, useEffect } from "react";
import styles from "./HeaderButton.module.css";
import LinkImage from "@/public/images/link.svg";
import { useState } from "react";
import HeaderModal from "../modal/HeaderModal";
import useObserver from "@/hooks/useObserver";
import FooterContext from "@/contexts/FooterContext";
import HeaderContext from "@/contexts/HeaderContext";

export default function HeaderButton() {
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const { ref, isVisible } = useObserver();
  const { isHeaderVisible, setIsHeaderVisible } = useContext(HeaderContext);
  const { isFooterVisible, setIsFooterVisible } = useContext(FooterContext);

  useEffect(() => {
    setIsHeaderVisible(isVisible);
  }, [isVisible]);

  if (isFooterVisible) {
    return (
      <div ref={ref} className={`${styles.container}`}>
        <div className={styles.button__container}>
          <div className={styles.input__container}>
            <LinkImage />
            <input
              className={styles.input}
              placeholder="링크를 추가해보세요"
              onChange={handleInput}
            />
          </div>
          <button className={styles.add__button} onClick={handleModal}>
            추가하기
          </button>
          {openModal && (
            <HeaderModal setterFunc={setOpenModal} inputLink={inputText} />
          )}
        </div>
      </div>
    );
  }
  return (
    <div ref={ref}>
      <div
        className={`${styles.container} ${
          !isHeaderVisible ? styles.sticky : ""
        }`}
      >
        <div className={styles.button__container}>
          <div className={styles.input__container}>
            <LinkImage />
            <input
              className={styles.input}
              placeholder="링크를 추가해보세요"
              onChange={handleInput}
            />
          </div>
          <button className={styles.add__button} onClick={handleModal}>
            추가하기
          </button>
          {openModal && (
            <HeaderModal setterFunc={setOpenModal} inputLink={inputText} />
          )}
        </div>
      </div>
    </div>
  );
}
