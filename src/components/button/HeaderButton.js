import React, { useContext, useEffect, useMemo, useRef } from "react";
import styles from "./HeaderButton.module.css";
import linkImage from "../../assets/images/link.svg";
import HeaderModal from "../../common/modal/HeaderModal";
import { useState } from "react";
import ObserverContext from "../../contexts/ObserverContext";

export default function HeaderButton() {
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  };
  const {
    headerRef: { headerRef, isHeaderVisible, setIsHeadervisible },
    footerRef: { isFooterVisible },
  } = useContext(ObserverContext);

  const observer = useMemo(() => {
    return new IntersectionObserver((entries) => {
      const [IntersectionObserverEntry] = entries;

      if (IntersectionObserverEntry.isIntersecting) {
        setIsHeadervisible(false);
      } else {
        setIsHeadervisible(true);
      }
    }, options);
  });

  useEffect(() => {
    if (headerRef?.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [headerRef]);

  return (
    <div ref={headerRef}>
      <div
        className={`${styles.container} ${
          isHeaderVisible ? styles.sticky : ""
        }`}
      >
        <div className={styles.button__container}>
          <div className={styles.input__container}>
            <img className={styles.image} src={linkImage} alt="링크이미지" />
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
