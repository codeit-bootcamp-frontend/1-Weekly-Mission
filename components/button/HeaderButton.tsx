import React, { useContext, useEffect, useMemo } from "react";
import styles from "./HeaderButton.module.css";
import LinkImage from "@/public/images/link.svg";
import { useState } from "react";
import HeaderModal from "../modal/HeaderModal";
import ObserverContext from "@/contexts/ObserverContext";
export default function HeaderButton() {
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const {
    headerRef: { headerRef, isHeaderVisible, setIsHeadervisible },
  } = useContext(ObserverContext);

  const {
    footerRef: { footerRef, isFooterVisible, setIsFooterVisible },
  } = useContext(ObserverContext);

  const options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
  };

  // const observer = useMemo(() => {
  //   return new IntersectionObserver((entries) => {
  //     const [IntersectionObserverEntry] = entries;
  //     console.log(isFooterVisible);
  //     // 헤더가 보이면은 stick 안 보이게 하기
  //     if (IntersectionObserverEntry.isIntersecting) {
  //       setIsHeadervisible(false);
  //       // 헤더가 안 보이면서 footer가 안 보이면 sticky 보이게 하기
  //     } else if (
  //       !IntersectionObserverEntry.isIntersecting &&
  //       !isFooterVisible
  //     ) {
  //       setIsHeadervisible(true);
  //       // 헤더가 안 보이면서 footer가 보이면 stick 안 보이게 하기 얘 왜
  //     }
  //     // else if (!IntersectionObserverEntry.isIntersecting && isFooterVisible) {
  //     //   setIsHeadervisible(false);
  //     // }
  //   }, options);
  // }, []);

  // const observer = useMemo(() => {
  //   return;
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [IntersectionObserverEntry] = entries;

      // 헤더가 보이면은 stick 안 보이게 하기
      if (IntersectionObserverEntry.isIntersecting) {
        setIsHeadervisible(false);
        // 헤더가 안 보이면서 footer가 안 보이면 sticky 보이게 하기
      } else if (
        !IntersectionObserverEntry.isIntersecting &&
        !isFooterVisible
      ) {
        setIsHeadervisible(true);
        // 헤더가 안 보이면서 footer가 보이면 stick 안 보이게 하기 얘 왜
      }
      // else if (!IntersectionObserverEntry.isIntersecting && isFooterVisible) {
      //   setIsHeadervisible(false);
      // }
    }, options);
    if (headerRef?.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [isHeaderVisible, isFooterVisible]);

  return (
    <div ref={headerRef}>
      <div
        className={`${styles.container} ${
          isHeaderVisible ? styles.sticky : ""
        }`}
      >
        <div className={styles.button__container}>
          <div className={styles.input__container}>
            {/* <img className={styles.image} src={LinkImage} alt="링크이미지" /> */}
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
